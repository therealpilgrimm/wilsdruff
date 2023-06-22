import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (

        
    <div className="absolute w-[100%] pl-10 pt-5">
        <Link className="text-2xl no-underline text-grey-darkest" href="/">
          <Image  src="/../public/Logo_Musikschule.png" width={200} height={200}  alt='pianist'/>
        </Link>
    </div>


  );
}

export default Logo;

