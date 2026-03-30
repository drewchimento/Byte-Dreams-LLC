import { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', { hour12: false }) + ':' + Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0');
      setTime(timeString);
    };

    const interval = setInterval(updateTime, 50); // High refresh for ms
    updateTime();

    return () => clearInterval(interval);
  }, []);

  return time;
};