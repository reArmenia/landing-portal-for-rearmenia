
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2024-04-04T23:59:59");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
      <div className="text-lg text-rearmenia-blue mb-2">Վերջնաժամկետ՝ ապրիլի 4</div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-rearmenia-blue">{formatTime(timeLeft.days)}</div>
          <div className="text-xs uppercase text-gray-500">օր</div>
        </div>
        <div className="text-4xl text-rearmenia-blue">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-rearmenia-blue">{formatTime(timeLeft.hours)}</div>
          <div className="text-xs uppercase text-gray-500">ժամ</div>
        </div>
        <div className="text-4xl text-rearmenia-blue">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-rearmenia-blue">{formatTime(timeLeft.minutes)}</div>
          <div className="text-xs uppercase text-gray-500">րոպե</div>
        </div>
        <div className="text-4xl text-rearmenia-blue">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-rearmenia-blue">{formatTime(timeLeft.seconds)}</div>
          <div className="text-xs uppercase text-gray-500">վրկ</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
