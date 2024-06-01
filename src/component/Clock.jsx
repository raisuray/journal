// Suggested code may be subject to a license. Learn more: ~LicenseLog:3765007272.
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1>{time.toLocaleTimeString()}</h1>
  );
};

export default Clock;
