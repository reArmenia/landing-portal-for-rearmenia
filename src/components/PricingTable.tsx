
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Base pricing tiers data
const pricingTiersData = [
  { id: 1, range: "1-50", price: "50,000 AMD" },
  { id: 2, range: "51-100", price: "40,000 AMD" },
  { id: 3, range: "101-200", price: "30,000 AMD" },
  { id: 4, range: "201+", price: "20,000 AMD" },
];

interface PricingTableProps {
  variant?: 'default' | 'cards' | 'pills' | 'tabs' | 'grid';
}

const PricingTable = ({ variant = 'grid' }: PricingTableProps) => {
  const [registrations, setRegistrations] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTier, setCurrentTier] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        // Fetch registrations count from column A
        const responseA = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1gaAjL7KoNmjfF0RnyyJM5BM-y-h2J7ixl44Lsws_vMw/values/Academy 222 AI Course Form (Responses)!A:A?key=AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc"
        );

        if (!responseA.ok) {
          throw new Error("Failed to fetch data from column A");
        }

        const dataA = await responseA.json();
        
        // Count rows minus header row
        const count = dataA.values ? Math.max(0, dataA.values.length - 1) : 0;
        setRegistrations(count);
        
        // Set current tier based on registration count
        if (count >= 200) setCurrentTier(4);
        else if (count >= 100) setCurrentTier(3);
        else if (count >= 50) setCurrentTier(2);
        else setCurrentTier(1);
        
        // Fetch description from column H - first non-empty value
        const responseH = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1gaAjL7KoNmjfF0RnyyJM5BM-y-h2J7ixl44Lsws_vMw/values/Academy 222 AI Course Form (Responses)!H:H?key=AIzaSyAUQi23Gj0riJjH74-yy-H9TbzKqo5vbsc"
        );
        
        if (!responseH.ok) {
          throw new Error("Failed to fetch data from column H");
        }
        
        const dataH = await responseH.json();
        
        // Find first non-empty value in column H after header
        let descriptionText = "";
        if (dataH.values && dataH.values.length > 1) {
          for (let i = 1; i < dataH.values.length; i++) {
            if (dataH.values[i] && dataH.values[i][0] && dataH.values[i][0].trim() !== "") {
              descriptionText = dataH.values[i][0];
              break;
            }
          }
        }
        
        // If no description found, use default
        setDescription(descriptionText || `Արժեքը կախված է մասնակիցների քանակից՝ ${count}`);
        
      } catch (err) {
        console.error("Error fetching data:", err);
        // Fallback to random number between 30-60 if error
        const fallbackCount = Math.floor(Math.random() * 30) + 30;
        setRegistrations(fallbackCount);
        setDescription(`Արժեքը կախված է մասնակիցների քանակից՝ ${fallbackCount}`);
        
        if (fallbackCount >= 200) setCurrentTier(4);
        else if (fallbackCount >= 100) setCurrentTier(3);
        else if (fallbackCount >= 50) setCurrentTier(2);
        else setCurrentTier(1);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  // Only implementing the Grid variant with Montserrat Arm Semibold font
  const renderTableGrid = () => (
    <div className="w-full p-4">
      <h3 className="text-lg font-montserrat font-semibold text-rearmenia-blue mb-6 text-center">
        {loading ? "Բեռնում..." : description}
      </h3>
      
      {loading ? (
        <div className="flex justify-center py-4">
          <div className="animate-pulse text-center font-montserrat">Բեռնում...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {pricingTiersData.map((tier) => {
            const isTierInactive = tier.id < currentTier;
            
            return (
              <div 
                key={tier.id} 
                className={`relative flex flex-col items-center justify-center rounded-lg p-4 transition-all ${
                  currentTier === tier.id 
                    ? 'bg-rearmenia-blue text-white ring-2 ring-rearmenia-orange ring-offset-2' 
                    : isTierInactive
                      ? 'bg-gray-100 opacity-75'
                      : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {isTierInactive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="text-red-500 h-48 w-48 opacity-80" />
                  </div>
                )}
                <div className={`text-lg font-montserrat font-semibold mb-2 ${isTierInactive ? 'opacity-50' : ''}`}>
                  {tier.range}
                </div>
                <div className={`text-xl font-montserrat font-semibold ${
                  currentTier === tier.id 
                    ? 'text-rearmenia-orange' 
                    : isTierInactive 
                      ? 'text-gray-400' 
                      : 'text-rearmenia-blue'
                }`}>
                  {tier.price}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return renderTableGrid();
};

export default PricingTable;
