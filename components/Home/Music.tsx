import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Music = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % 4);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="absolute w-[100%] pl-10 pt-5 h-[95vh]">
        <Image className={`${activeIndex === 0 ? "fade-in-out" : "hidden"} absolute top-[60%] left-[30%]`} src="/../public/music1.png" width={20} height={20} alt='note'/>
        <Image className={`${activeIndex === 1 ? "fade-in-out" : "hidden"} absolute top-[50%] left-[30%]`} src="/../public/music2.png" width={40} height={20} alt='note'/>
        <Image className={`${activeIndex === 2 ? "fade-in-out" : "hidden"} absolute top-[60%] left-[30%]`} src="/../public/music3.png" width={20} height={20} alt='note'/>
        <Image className={`${activeIndex === 3 ? "fade-in-out" : "hidden"} absolute top-[50%] left-[30%]`} src="/../public/music2.png" width={40} height={20} alt='note'/>
        <Image className={`${activeIndex === 0 ? "fade-in-out" : "hidden"} absolute top-[50%] right-[30%]`} src="/../public/music3.png" width={20} height={20} alt='note'/>
        <Image className={`${activeIndex === 1 ? "fade-in-out" : "hidden"} absolute top-[60%] right-[30%]`} src="/../public/music1.png" width={20} height={20} alt='note'/>
        <Image className={`${activeIndex === 2 ? "fade-in-out" : "hidden"} absolute top-[50%] right-[30%]`} src="/../public/music2.png" width={40} height={20} alt='note'/>
        <Image className={`${activeIndex === 3 ? "fade-in-out" : "hidden"} absolute top-[60%] right-[30%]`} src="/../public/music3.png" width={20} height={20} alt='note'/>
      </div>
    );
  }
  
  export default Music;