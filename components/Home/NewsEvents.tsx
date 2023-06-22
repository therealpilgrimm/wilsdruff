import React from 'react';
import Image from 'next/image';

const NewsEvents = () => {
    return (
        
        <div className='justify-items-center text-center w-[100%]'>
            <div className='grid grid-cols-12 justify-items-center bg-[#222] w-[100%] shadow-md bg overflow-hidden gap-10'>
            <img
                        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        className="aspect-[1/1] max-w-[40rem]  bg-gray-50 object-cover col-span-3 my-1"
                    />
            <img
                        src="https://images.unsplash.com/photo-1510524397145-0d2ab89974d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80"
                        alt=""
                        className="aspect-[1/1]  max-w-[40rem]  bg-gray-50 object-cover col-span-3 my-1"
                    />
            <img
                        src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                        alt=""
                        className="aspect-[1/1]  max-w-[40rem]  bg-gray-50 object-cover col-span-3 my-1"
                    />
            <img
                        src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt=""
                        className="aspect-[1/1]  max-w-[40rem]  bg-gray-50 object-cover col-span-3 my-1"
                    />
                    
                    
            </div>
        </div>
    );
}

export default NewsEvents;