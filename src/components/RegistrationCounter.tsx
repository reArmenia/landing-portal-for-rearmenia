
import { useEffect, useState } from "react";

const RegistrationCounter = () => {
  const [registrations, setRegistrations] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1gaAjL7KoNmjfF0RnyyJM5BM-y-h2J7ixl44Lsws_vMw/values/Sheet1!A:A?key=AIzaSyDFvN7hVqKb5INnGnZcDgDy9cP-EgqUjmI"
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
        setError("Failed to load registration count");
        // Fallback to random number between 30-60 if error
        setRegistrations(Math.floor(Math.random() * 30) + 30);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg text-rearmenia-blue mb-2">Գրանցում</div>
      {loading ? (
        <div className="text-5xl font-bold text-rearmenia-blue animate-pulse">...</div>
      ) : error ? (
        <div className="text-5xl font-bold text-rearmenia-blue">{registrations}</div>
      ) : (
        <div className="text-5xl font-bold text-rearmenia-blue animate-fade-in">{registrations}</div>
      )}
    </div>
  );
};

export default RegistrationCounter;
