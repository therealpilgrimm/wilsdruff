import React from 'react'
import Image from 'next/image'
import Team from '@/components/Home/Team'



export default function Lehrer() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1 className='text-red-950 text-6xl font-garamond p-14'>Unsere Lehrer</h1>
      <Team />
    </main>
  )
}