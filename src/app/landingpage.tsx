import Image from 'next/image'
import Hero from '@/components/Layout/Hero'
import Footer from '@/components/Layout/Footer'
import Features from '@/components/Layout/features'

export default function Home() {
  return (
    <>
    {/* <div>Home</div> */}
    <Hero />
    <Features />
    <Footer />
    </>
  )
}
