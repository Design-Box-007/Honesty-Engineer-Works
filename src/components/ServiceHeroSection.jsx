import React from 'react'
import HeroImage from '../assets/HeroImage.png';
import { FaPlayCircle } from 'react-icons/fa';


const ServiceHeroSection = () => {
    return (
        <div className=''>
            <div className='hero-container'>

                <div className='hero-subcontainer'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-7'>
                            <h1 className='hero-title '>Precision-Driven Steel Solutions Tailored to Your Needs</h1>
                        </div>
                        <div className='col-md-12 '>
                            <div className='hero-subimage-container'>
                                <img
                                    src={HeroImage}
                                    alt="Hero Sub Image"
                                    width="100%"
                                    className='hero-subimage'
                                />
                                <div className='servicehero-right-container'>
                                    <div className='hero-subtitle-container'>
                                        <div className='hero-subtitle'>Creating resilient steel frameworks that stand the test of time. Specializing in innovative, durable, and custom steel solutions for every scale</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default ServiceHeroSection