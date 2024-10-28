'use client'
import FeaturedCoures from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import MusicMovingCardsDemo from '@/components/Testmoving'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import Instructor from '@/components/instructer'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>
      <HeroSection/>
      <FeaturedCoures/>
      <Navbar/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
      <MusicMovingCardsDemo/>
      <Instructor/>
      
    </main>
  )
}

export default page
