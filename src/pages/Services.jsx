import React from 'react'
import ServiceHeroSection from '../components/ServiceHeroSection'
import ServicesCFSImageOne from '../assets/ServicesCFSImageOne.png';
import ServicesCFSImageTwo from '../assets/ServicesCFSImageTwo.png';
import ServicesCFSImageThree from '../assets/ServicesCFSImageThree.png';
import ServicesCFSImageFour from '../assets/ServicesCFSImageFour.png';
import ServicesCFSImageFive from '../assets/ServicesCFSImageFive.png';
import ServicesCFSImageSix from '../assets/ServicesCFSImageSix.png';

import ServicesAMTImageOne from '../assets/ServicesAMTImageOne.png';
import ServicesAMTImageTwo from '../assets/ServicesAMTImageTwo.png';
import ServicesAMTImageThree from '../assets/ServicesAMTImageThree.png';
import ContactSection from '../components/ContactSection';

const Services = () => {
    return (
        <div>
            <ServiceHeroSection />
            <div className='divider my-5'>
                <span className='line-gray'></span>
            </div>
            <div className='structural-steel-fabrications'>
                <h1 className='services-title'>
                    Structural Steel Fabrications
                </h1>
                <p className='services-description'>
                    At Honesty, we provide high-quality structural steel fabrications that ensure safe, durable, and attractive buildings. With over 32 years of experience, we create steel components that meet the demands of modern architecture and engineering.
                </p>
                <div className='services-container-one'>
                    <h1 className='services-subtitle'>Custom Fabrication Solutions</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesCFSImageOne}
                                    alt="ServicesCFSImageOne"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='row'>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container '>
                                        <img
                                            src={ServicesCFSImageTwo}
                                            alt="ServicesCFSImageTwo"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container'>
                                        <img
                                            src={ServicesCFSImageThree}
                                            alt="ServicesCFSImageThree"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='services-subdescription'>
                                We offer custom steel fabrication services to meet a wide range of project needs. Whether it's bespoke steel components or large-scale structural elements, our team collaborates closely with architects and engineers to ensure every piece meets precise specifications and design criteria.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services-container-one'>
                    <h1 className='services-subtitle'>Advanced Machinery & Techniques</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesAMTImageOne}
                                    alt="ServicesAMTImageOne"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='row'>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container '>
                                        <img
                                            src={ServicesAMTImageTwo}
                                            alt="ServicesAMTImageTwo"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container'>
                                        <img
                                            src={ServicesAMTImageThree}
                                            alt="ServicesAMTImageThree"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='services-subdescription'>
                            Utilizing state-of-the-art technology, we deliver steel products that are not only high in quality but also efficient to produce. Our workshop is equipped with advanced machinery, including CNC cutters, welders, and bending tools, ensuring precision and consistency in every project.
                             </div>
                        </div>
                    </div>
                </div>

                <div className='services-container-two'>
                <h1 className='services-subtitle'>Comprehensive Fabrication Services</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesCFSImageFour}
                                    alt="ServicesCFSImageFour"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='services-card-primary'>
                                <div className='service-card-title'>Surface Finishing</div>
                                <div className='service-card-description'>
                                Application of protective coatings and finishes to enhance both the durability and visual appeal of the steel components, ensuring they stand the test of time.
                                </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Surface Finishing</div>
                                <div className='service-card-description'>
                                Application of protective coatings and finishes to enhance both the durability and visual appeal of the steel components, ensuring they stand the test of time.
                                </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Surface Finishing</div>
                                <div className='service-card-description'>
                                Application of protective coatings and finishes to enhance both the durability and visual appeal of the steel components, ensuring they stand the test of time.
                                </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Surface Finishing</div>
                                <div className='service-card-description'>
                                Application of protective coatings and finishes to enhance both the durability and visual appeal of the steel components, ensuring they stand the test of time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='non-structural-steel-fabrications'>
                <h1 className='services-title'>
                Non-Structural Steel Fabrications
                </h1>
                <p className='services-description'>
                Our non-structural steel fabrications add both function and style, improving the overall quality and performance of your project. Whether you need custom interior elements, decorative features, or specialized industrial parts, we can provide the high-quality solutions you need.
                </p>
                <div className='services-container-one'>
                    <h1 className='services-subtitle'>Custom Fabrication Solutions</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesCFSImageFive}
                                    alt="ServicesCFSImageFive"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='row'>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container '>
                                        <img
                                            src={ServicesCFSImageTwo}
                                            alt="ServicesCFSImageTwo"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6 col-6'>
                                    <div className='services-images-container'>
                                        <img
                                            src={ServicesCFSImageThree}
                                            alt="ServicesCFSImageThree"
                                            width="100%"
                                            className="services-image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='services-subdescription'>
                                We offer custom steel fabrication services to meet a wide range of project needs. Whether it's bespoke steel components or large-scale structural elements, our team collaborates closely with architects and engineers to ensure every piece meets precise specifications and design criteria.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services-container-two'>
                <h1 className='services-subtitle'>Comprehensive Fabrication Services</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                    <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='services-card-primary'>
                                <div className='service-card-title'>Architectural</div>
                                <div className='service-card-description'>
                                Creating attractive and functional details like facades, canopies, and handrails.
                               </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Interior Elements</div>
                                <div className='service-card-description'>
                                Making components for interiors, such as stairs, partitions, and shelving units.
                                </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Industrial Components</div>
                                <div className='service-card-description'>
                                Producing useful parts like machine guards, platforms, and equipment supports to improve efficiency.</div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesCFSImageSix}
                                    alt="ServicesCFSImageSix"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='services-container-two'>
                <h1 className='services-subtitle'>Advanced Fabrication Techniques</h1>
                    <div className='divider my-3'>
                        <span className='line'></span>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='services-images-container '>
                                <img
                                    src={ServicesCFSImageSix}
                                    alt="ServicesCFSImageSix"
                                    width="100%"
                                    className="services-image"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-between mb-3'>
                            <div className='services-card-primary'>
                                <div className='service-card-title'>Precision Cutting and Shaping</div>
                                <div className='service-card-description'>
                                Using CNC machines for exact dimensions and complex shapes.
                               </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Welding and Assembly</div>
                                <div className='service-card-description'>
                                Expert welding for strong and reliable assemblies
                                </div>
                            </div>
                            <div className='services-card-secondary'>
                            <div className='service-card-title'>Finishing and Coating</div>
                                <div className='service-card-description'>
                                Applying finishes and coatings for better durability and appearance.
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection/>
        </div>
    )
}

export default Services