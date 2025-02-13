import React from 'react'
import HeroImage from '../assets/HomeHeroImage2.jpg';
import { FaPlayCircle } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';



const HeroSection = () => {
    const revealVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <div className=''>
            <div className='hero-container'>
                <img
                    src={HeroImage}
                    alt="Hero Image"
                    width="100%"
                    className='hero-image'
                />
                <div className='hero-subcontainer'>
                    <div className='row d-flex align-items-center justify-center'>
                        <div className='col-md-7'>
                            <motion.div initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={revealVariants}
                                transition={{ duration: 2 }}>
                                <h1
                                    className='hero-title'>Expert Structural Steel Fabrication & Custom Furniture Solutions – Built for Durability and Designed for Excellence</h1>
                            </motion.div>
                        </div>
                        {/* <div className='col-md-5 ' style={{ overflow: "hidden" }}>
                            <motion.div initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 1, y: 100 },
                                    visible: { opacity: 1, y: 0 },
                                
                                }}
                                transition={{ duration: 2 }}>
                                <div className='hero-subtitle-container'>
                                    <div className='hero-subtitle'>Creating resilient steel frameworks that stand the test of time. Specializing in innovative, durable, and custom steel solutions for every scale</div>
                                </div>
                            </motion.div>
                        </div> */}
                        {/* <div className='col-md-12 '>
                            <motion.div
                             initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{ duration: 2 }} className='hero-subimage-container'>
                                <img
                                
                                    src={HeroImage}
                                    alt="Hero Sub Image"
                                    width="100%"
                                    className='hero-subimage'
                                />
                                <div className='hero-bottom-container'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex gap-2 align-items-end my-1'>
                                            <div className='hero-text'>Cityscape Tower</div>
                                            <div className='hero-subtext'>/ stunning architectural feat spanning over a major river</div>
                                        </div>
                                        <FaPlayCircle className='hero-icon' />
                                    </div>
                                    <div className='divider'>
                                        <span className='line'></span>
                                    </div>
                                </div>
                            </motion.div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection