import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (

        
       <div className='grid grid-cols-12 items-end h-[95vh] justify-items-center'>
         <Image className='lg:hidden col-span-3' src="/../public/pianist.gif" width={500} height={500}  alt='pianist'/>
         <h2 className=' sm:col-span-12 col-span-6 self-center text-6xl font-semibold text-center font-garamond text-red-950'>Ohne <i className='text-7xl'>Musik</i> wäre <br />das <i className='text-7xl'>Leben</i> ein Irrtum</h2>
         <Image className='sm:hidden md:col-span-6 col-span-3' src="/../public/saxguy.gif" width={300} height={500}  alt='sax'/>
        </div>


  );
}

export default Hero;