import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Home/Hero'
import Welcome from '../components/Home/Welcome'
import NewsEvents from '../components/Home/NewsEvents'
import Team from '../components/Home/Team'
import Logo from '@/components/Home/Logo'
import Music from '@/components/Home/Music'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Music />
      <Hero />
      <Welcome />
      <NewsEvents />
    </main>
  )
}