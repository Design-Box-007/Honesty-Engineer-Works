import React from 'react'
import TestimonialImageOne from '../assets/TestimonialImageOne.png';
import TestimonialImageTwo from '../assets/TestimonialImageTwo.png';
import TestimonialImageThree from '../assets/TestimonialImageThree.png';
import TestimonialImageFour from '../assets/TestimonialImageFour.png';



const TestimonialSection = () => {
    return (
        <div className='testimonial-section'>
            <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='mb-4'>
                    <div className='section-title'>(05)</div>
                    <div className='section-title'>Testimonials</div>
                </div>
                <div className='testimonial-title'>
                    Testimonials That Speak to Our Excellence
                </div>
            </div>
            <div className='my-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='testimonial-card'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-lg-5 col-md-12'>
                                    <img src={TestimonialImageOne} alt="TestimonialImageOne" width="100%" />
                                </div>
                                <div className='col-lg-7 col-md-12'>
                                    <div className='testimonial-username'>
                                    James Wilson
                                    </div>
                                    <div className='testimonial-userinfo'>
                                    Director of Operations at Global Industrial
                                    </div>
                                    <div className='testimonial-userreview'>
                                    “HONESTY's team truly understands the intricacies of steel construction. Their attention to detail and dedication to quality helped us deliver a complex project on time and within budget. We couldn’t have asked for a better partner.”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-lg-5 col-md-12'>
                                    <img src={TestimonialImageThree} alt="TestimonialImageThree" width="100%" />
                                </div>
                                <div className='col-lg-7 col-md-12'>
                                    <div className='testimonial-username'>
                                        Lisa Carter
                                    </div>
                                    <div className='testimonial-userinfo'>
                                        Senior Engineer at BridgeCo
                                    </div>
                                    <div className='testimonial-userreview'>
                                        “Collaborating with HONESTY was a game-changer for our design. Their ability to translate our architectural vision into reality with precision and craftsmanship was truly impressive. We look forward to working with them again.<br /><br />
                                        From concept to completion, HONESTY exceeded our expectations. Their expertise in structural steelwork ensured that our bridge project was not only completed on schedule but also met the highest standards of durability and design”
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='testimonial-card'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-lg-5 col-md-12'>
                                    <img src={TestimonialImageTwo} alt="TestimonialImageTwo" width="100%" />
                                </div>
                                <div className='col-lg-7 col-md-12'>
                                    <div className='testimonial-username'>
                                    Sarah Thompson
                                    </div>
                                    <div className='testimonial-userinfo'>
                                    Project Manager at UrbanBuild
                                    </div>
                                    <div className='testimonial-userreview'>
                                        “Collaborating with HONESTY was a game-changer for our design. Their ability to translate our architectural vision into reality with precision and craftsmanship was truly impressive. We look forward to working with them again.<br /><br />
                                        From concept to completion, HONESTY exceeded our expectations. Their expertise in structural steelwork ensured that our bridge project was not only completed on schedule but also met the highest standards of durability and design”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-card'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-lg-5 col-md-12'>
                                    <img src={TestimonialImageFour} alt="TestimonialImageFour" width="100%" />
                                </div>
                                <div className='col-lg-7 col-md-12'>
                                    <div className='testimonial-username'>
                                    Michael Rodriguez
                                    </div>
                                    <div className='testimonial-userinfo'>
                                    CEO of Skyline Developments
                                    </div>
                                    <div className='testimonial-userreview'>
                                    “HONESTY's team truly understands the intricacies of steel construction. Their attention to detail and dedication to quality helped us deliver a complex project on time and within budget. We couldn’t have asked for a better partner.” </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection