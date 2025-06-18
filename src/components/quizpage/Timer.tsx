import React, { useEffect, useState } from 'react';

interface TimerProps {
  minutes: number;
  onFinish?: () => void;
}

const Timer: React.FC<TimerProps> = ({ minutes, onFinish }) => {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onFinish?.();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, onFinish]);

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60);
    const secsRemaining = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secsRemaining).padStart(2, '0')}`;
  };

  return (

    <div className="timer">
      ⏱️ Time Remaining: <span>{formatTime(secondsLeft)}</span>
    </div>
  );
};

export default Timer;
