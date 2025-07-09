import React from 'react'
import AboutUsImageOne from '../assets/AboutUsHeroImage1.jpg';
import AboutUsImageTwo from '../assets/AboutUsHeroImage2.jpg';
import { motion } from 'framer-motion';

const FoundersNoteSection = () => {
    return (
        <div className='aboutus-section'>
            <div className='mb-4'>
                <div className='section-title'>(02)</div>
                <div className='section-title'>Founders Note</div>
            </div>
            <div className='d-flex gap-4 flex-column flex-md-row'>
                <div className='col-md-5' style={{ overflow: "hidden" }}>

                    <motion.img

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        src={AboutUsImageTwo}
                        alt="AboutUsImageOne"
                        width="100%"
                        className='aboutus-image-one'
                    />
                </div>
                <div className='col-md-7 d-flex flex-column justify-content-between gap-1'>
                    <div className='aboutus-description-two'>
                        “At Honesty Engineering Works, our journey is one of purpose, passion, and perseverance. Nearly four decades ago, I set out with a simple dream — to build with integrity and craft with care. Today, that dream stands tall as a legacy. Through 39 years of tireless dedication, we have transformed a small workshop into a trusted name in structural steel and bespoke furniture solutions. Every beam we weld and every piece we craft reflects the values I hold dear: precision, durability, and constant innovation. These remain the soul of our work — then, now, and always.”
                    </div>
                    <div className='founder-signature mt-3'>
                        <div className='founder-name'><b>Suryamoorthy</b></div>
                        <div className='founder-title'>Founder & CEO</div>
                    </div>
                </div>
            </div>
            <div className='divider my-4'>
                <span className='line-gray'></span>
            </div>
        </div>
    )
}

export default FoundersNoteSection