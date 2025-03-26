
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DebugInfoProps {
  apiKey: string;
}

const DebugInfo = ({ apiKey }: DebugInfoProps) => {
  const [registrations, setRegistrations] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        // Fix the sheet range format to include the sheet name correctly
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/1gaAjL7KoNmjfF0RnyyJM5BM-y-h2J7ixl44Lsws_vMw/values/Sheet1!A1:A1000?key=${apiKey}`
        );

        const responseClone = response.clone();
        const responseText = await responseClone.text();
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}\n${responseText}`);
        }

        const data = await response.json();
        setResponseData(data);
        
        // Count rows minus header row
        const count = data.values ? Math.max(0, data.values.length - 1) : 0;
        setRegistrations(count);
      } catch (err) {
        console.error("Error fetching registrations:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [apiKey]);

  const getCurrentTier = (): string => {
    if (registrations >= 200) return "201+ (20,000 AMD)";
    if (registrations >= 100) return "101-200 (30,000 AMD)";
    if (registrations >= 50) return "51-100 (40,000 AMD)";
    return "1-50 (50,000 AMD)";
  };

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle className="text-xl text-rearmenia-blue">Debug Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-bold mb-2">Registration Data</h3>
            <p><span className="font-medium">API Key:</span> {apiKey.substring(0, 10)}...{apiKey.substring(apiKey.length - 4)}</p>
            <p><span className="font-medium">Loading:</span> {loading ? "Yes" : "No"}</p>
            <p><span className="font-medium">Registration Count:</span> {registrations}</p>
            <p><span className="font-medium">Current Tier:</span> {getCurrentTier()}</p>
            {error && (
              <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-red-600">
                <p className="font-bold">Error:</p>
                <pre className="whitespace-pre-wrap text-xs">{error}</pre>
              </div>
            )}
          </div>
          
          {responseData && (
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-bold mb-2">API Response</h3>
              <pre className="whitespace-pre-wrap text-xs overflow-auto max-h-60">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </div>
          )}
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-bold mb-2">Browser Information</h3>
            <p><span className="font-medium">User Agent:</span> {navigator.userAgent}</p>
            <p><span className="font-medium">Window Size:</span> {window.innerWidth}x{window.innerHeight}</p>
            <p><span className="font-medium">Device Pixel Ratio:</span> {window.devicePixelRatio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DebugInfo;
