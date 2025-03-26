
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-04-04T23:59:59");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [isLessThan24Hours, setIsLessThan24Hours] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
        
        setTimeLeft({
          days: daysLeft,
          hours: hoursLeft,
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        
        // Check if less than 24 hours remain
        setIsLessThan24Hours(daysLeft === 0);
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLessThan24Hours(false);
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`text-lg ${isLessThan24Hours ? 'text-red-500 font-bold' : 'text-rearmenia-blue'} mb-2`}>
        Վերջնաժամկետ՝ ապրիլի 4, 2025
      </div>
      {isExpired ? (
        <div className="text-4xl font-bold text-red-500">Ավարտված է</div>
      ) : (
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`text-4xl font-bold ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>
              {formatTime(timeLeft.days)}
            </div>
            <div className="text-xs uppercase text-gray-500">օր</div>
          </div>
          <div className={`text-4xl ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>:</div>
          <div className="flex flex-col items-center">
            <div className={`text-4xl font-bold ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>
              {formatTime(timeLeft.hours)}
            </div>
            <div className="text-xs uppercase text-gray-500">ժամ</div>
          </div>
          <div className={`text-4xl ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>:</div>
          <div className="flex flex-col items-center">
            <div className={`text-4xl font-bold ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>
              {formatTime(timeLeft.minutes)}
            </div>
            <div className="text-xs uppercase text-gray-500">րոպե</div>
          </div>
          <div className={`text-4xl ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>:</div>
          <div className="flex flex-col items-center">
            <div className={`text-4xl font-bold ${isLessThan24Hours ? 'text-red-500' : 'text-rearmenia-blue'}`}>
              {formatTime(timeLeft.seconds)}
            </div>
            <div className="text-xs uppercase text-gray-500">վրկ</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
