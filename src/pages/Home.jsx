import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import ExpertiseSection from '../components/ExpertiseSection'
import FurnitureSection from '../components/FurnitureSection'
import ProjectSection from '../components/ProjectSection'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <section>
        <HeroSection/>
        <AboutUsSection/>
        <ExpertiseSection/>
        <FurnitureSection/>
        <ProjectSection/>
        <TestimonialSection/>
        <ContactSection/>
    </section>
  )
}

export default Home