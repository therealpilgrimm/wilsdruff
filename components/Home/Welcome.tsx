import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Welcome = () => {
    return (
        
        <div className='grid grid-cols-12 justify-items-center bg-red-950 w-[100%] shadow-md mt-10 pt-[1rem]'>
        <img
                    src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                    alt=""
                    className="aspect-[8/3] max-w-[80rem] rounded-2xl bg-gray-50 object-cover col-span-12 mt-10 "
                  />
            <h2 className="tracking-wide text-5xl font-bold mb-4 col-span-12 pt-5 text-red-100">Willkommen bei der Musikschule Wilsdruff!</h2>
            <p className="tracking-widest text-3xl col-span-12 text-center max-w-[80ch] pt-10 pb-12 text-red-50">
            Wir bieten eine Vielfalt an Programmen, zugeschnitten auf Ihre Bedürfnisse, von Instrumental- bis zu Gesangsunterricht. Unser erfahrenes Team fördert die Entwicklung Ihrer Fähigkeiten in einer positiven Atmosphäre. Unabhängig von Alter oder Erfahrungsgrad begleiten wir Sie gern auf Ihrer musikalischen Reise. Entdecken Sie mit uns die Freude der Musik!
            </p>
            <Link href="/lehrer" className="col-span-12 rounded-xl bg-red-50 px-6 py-4 text-3xl font-semibold text-red-950 shadow-sm hover:bg-red-100 hover:outline-red-800 hover:outline mb-12">
                Lernen Sie uns kennen!
            </Link>
        </div>
    );
}

export default Welcome;

