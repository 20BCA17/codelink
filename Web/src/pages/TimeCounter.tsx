import React, { useState, useEffect } from 'react';

const TimeCounter = () => {
  const [time, setTime] = useState(0);
  const [reverseTime, setReverseTime] = useState(14 * 3600); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
      setReverseTime(prevReverseTime => prevReverseTime - 1);
    }, 1000); 

    
    return () => clearInterval(interval);
  }, []); 

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}Hours:${minutes < 10 ? '0' : ''}${minutes}Mins:${seconds < 10 ? '0' : ''}${seconds}Sec`;
  };

  return (
    <div>
     
      <div>
     
        <p> {formatTime(reverseTime)}</p>
      </div>
    </div>
  );
};

export default TimeCounter;
