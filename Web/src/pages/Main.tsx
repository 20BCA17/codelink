
'use client';
import img1  from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.gif';
import img6 from '../assets/img/img5.jpg';

import { Carousel } from 'flowbite-react';

function Main() {
  return (
    <div className="h-[87vh]">
      <Carousel>
        <img src={img1} alt="..." className=''/>
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
        <img src={img6} alt="..." />
      </Carousel>
    </div>
  );
}

export default Main;