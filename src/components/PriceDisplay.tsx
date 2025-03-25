
import { useEffect, useState } from "react";

interface PriceDisplayProps {
  apiKey: string;
}

const PriceDisplay = ({ apiKey }: PriceDisplayProps) => {
  const [registrations, setRegistrations] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/1gaAjL7KoNmjfF0RnyyJM5BM-y-h2J7ixl44Lsws_vMw/values/Sheet1!A:A?key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        
        // Count rows minus header row
        const count = data.values ? Math.max(0, data.values.length - 1) : 0;
        setRegistrations(count);
      } catch (err) {
        console.error("Error fetching registrations:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        // Fallback to random number between 30-60 if error
        setRegistrations(Math.floor(Math.random() * 30) + 30);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [apiKey]);

  const getPrice = (): string => {
    if (registrations >= 200) return "20,000 AMD";
    if (registrations >= 100) return "30,000 AMD";
    if (registrations >= 50) return "40,000 AMD";
    return "50,000 AMD";
  };

  const getCurrentTier = (): number => {
    if (registrations >= 200) return 4;
    if (registrations >= 100) return 3;
    if (registrations >= 50) return 2;
    return 1;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg text-rearmenia-blue mb-2">Արժեք</div>
      {loading ? (
        <div className="text-5xl font-bold text-rearmenia-orange animate-pulse">...</div>
      ) : (
        <div className="text-5xl font-bold text-rearmenia-orange animate-fade-in">{getPrice()}</div>
      )}
      {error && <div className="text-xs text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default PriceDisplay;
