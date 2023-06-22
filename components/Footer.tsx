import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='grid grid-cols-12 w-[100%] bg-[#222]'>

      <p className='text-white text-center text-lg col-span-12'>© 2023 Musikschule Wilsdruff</p>
      <p className='text-white text-center text-lg col-span-12'>Gefördert durch</p>
      <div className='col-span-12 flex justify-center'>
      <Image className='mx-1' src="/../public/sponsor1.png" width={100} height={100}  alt='logo'/>
      <Image className='mx-1' src="/../public/sponsor2.jpg" width={100} height={100}  alt='logo'/>
      <Image className='mx-1' src="/../public/sponsor3.png" width={100} height={100}  alt='logo'/>
      <Image className='mx-1' src="/../public/sponsor4.jpg" width={100} height={100}  alt='logo'/>
      </div>
      
    </footer>
  );
}

export default Footer;