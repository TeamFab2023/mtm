import React from 'react'
import Hero from '@/components/Layout/Hero'
import Features from '@/components/Layout/Features'
import Footer from '@/components/Layout/Footer'
import Slider from '@/components/Layout/Slider'
import Cardsection from '@/components/Layout/Cardsection'

export default function Home() {
  return (
    <>
    {/* <Hero />
    <Features /> */}
    <Slider />
    <Cardsection />
    <Footer />
    </>
  )
}
