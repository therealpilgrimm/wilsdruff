import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Logo from '@/components/Home/Logo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Logo />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp