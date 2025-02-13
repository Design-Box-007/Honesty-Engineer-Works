import React from 'react'
import ContactImage from '../assets/ContactImage.png';
import { FaArrowRightLong } from 'react-icons/fa6';


const ContactSection = () => {
    return (
        <div className='contact-section'>
            <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='mb-4'>
                    <div className='section-title'>(06)</div>
                    <div className='section-title'>Contact</div>
                </div>
                <div className='contact-title'>
                    Have a Idea, Let’s Discuss
                </div>
            </div>
            <div className='contact-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='contact-image-container'>
                        <img src={ContactImage} className='contact-image' alt="ContactImage" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact-subtitle'>
                            Reach out to our team
                        </div>
                        <div className='contact-description my-2'>
                            We are here to answer all your queries and need, leave us a message.
                        </div>
                        <div className='divider my-4'>
                            <span className='line-gold'></span>
                        </div>
                        <form>
                            <div className='row'>
                                <div className='col-md-6 d-flex flex-column gap-1 mb-3'>
                                    <label className='contact-label'>Name</label>
                                    <input className='contact-input' type='text' />
                                </div>
                                <div className='col-md-6 d-flex flex-column gap-1 mb-3'>
                                    <label className='contact-label'>Email</label>
                                    <input className='contact-input' type='text' />
                                </div>
                                <div className='col-md-12 d-flex flex-column gap-1 mb-3'>
                                    <label className='contact-label'>Description</label>
                                    <textarea rows={6} className='contact-input' type='text' />
                                </div>
                                <div className='col-md-12 d-flex flex-column gap-1 mb-3'>
                                    <button className='button-secondary'>Submit Information <FaArrowRightLong /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection