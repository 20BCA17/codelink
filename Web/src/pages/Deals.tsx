import React, { useState, useEffect } from 'react';

import deals from '../assets/img/deals.jpg'

function Deals() {
  const [time, setTime] = useState(0);
  const [reverseTime, setReverseTime] = useState(14 * 3600); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
      setReverseTime(prevReverseTime => prevReverseTime - 1);
    }, 1000); 


    return () => clearInterval(interval);
  }, []); 

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      <div className=''>
        <span>Ending In</span>&nbsp;&nbsp;
        <span className="font-bold text-4xl">{hours}</span> <span className='text-lg'>Hours</span> <span className='text-gray-500'>:</span> {' '}
        <span className="font-bold text-4xl">{minutes < 10 ? '0' : ''}{minutes}</span><span className='text-lg'>Mins</span> <span className='text-gray-500'> :</span> {' '}
        <span className="font-bold text-4xl">{seconds < 10 ? '0' : ''}{seconds}</span> <span className='text-lg'>Sec</span> 
      </div>
    );
  };

  return (
    <div className="text-center">
 
    <div className="relative inline-block ">
      <img src={deals} alt="Daily Deals" className="max-w-full h-auto rounded-2xl" />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-light">
        {formatTime(reverseTime)}
      </span>
    </div>
  </div>
  );
};

export default Deals
