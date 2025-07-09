import React from 'react'
import HeroSection from '../components/HeroSection'
import FurnitureSection from '../components/FurnitureSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import FoundersNoteSection from '../components/FoundersNoteSection'

const About = () => {
  return (
    <section>
        <HeroSection/>
        <FoundersNoteSection/>
        <FurnitureSection/>
        <ProjectSection/>
        <ContactSection/>
    </section>
  )
}

export default About