import React from 'react'
import AboutUsImageOne from '../assets/AboutUsHeroImage1.jpg';
import AboutUsImageTwo from '../assets/AboutUsHeroImage2.jpg';
import { motion } from 'framer-motion';


const aboutUsData = [
  {
    number: '01',
    title: 'Client-Centric Approach',
    description: 'We prioritize understanding our clients’ unique needs and work collaboratively to deliver tailored solutions that exceed expectations.'
  },
  {
    number: '02',
    title: 'Innovative Solutions',
    description: 'Leveraging the latest advancements in steel technology and construction practices, we ensure that our projects are both durable and efficient.'
  },
  {
    number: '03',
    title: 'Commitment to Quality',
    description: 'We adhere to stringent quality control measures and industry regulations, guaranteeing the safety and longevity of our structures.'
  },
  {
    number: '04',
    title: 'Expert Craftsmanship',
    description: 'Our experienced fabricators bring a wealth of knowledge and skill to every project, ensuring the highest standards of workmanship.'
  },
  {
    number: '05',
    title: 'Tailored Solutions',
    description: 'We offer customized fabrication services tailored to meet the unique needs of each project, whether it’s a small-scale build or a large.'
  },
  {
    number: '06',
    title: 'On-Time Delivery',
    description: 'We understand the importance of timelines in construction projects. Our efficient processes and dedicated team ensure that we deliver on time.'
  }
];

const AboutUsSection = () => {
  return (
    <div className='aboutus-section'>
      <div className='mb-4'>
        <div className='section-title'>(01)</div>
        <div className='section-title'>About Us</div>
      </div>
      <div className='row'>
        <div className='col-md-7' style={{overflow:"hidden"}}>

          <motion.img
          
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ duration: 2 }}
            src={AboutUsImageOne}
            alt="AboutUsImageOne"
            width="100%"
            className='aboutus-image-one'
          />
        </div>
        <div className='col-md-5 d-flex flex-column justify-content-between gap-1'>
          <div className='aboutus-description'>
            Since our inception, we have been dedicated to delivering top-tier steel solutions that blend innovation, precision, and reliability.
          </div>
          <img
            src={AboutUsImageTwo}
            alt="AboutUsImageTwo"
            width="100%"
            className='aboutus-image-two'
          />
        </div>

      </div>
      <div className='aboutus-description-two my-3'>
        “Our unwavering commitment to excellence has earned us the trust of countless clients and a reputation as a dependable partner in every project we undertake”
      </div>
      <div className='divider my-4'>
        <span className='line-gray'></span>
      </div>
      <div className='d-flex align-items-center gap-4 my-3'>
        <div className='aboutus-title'>
          Why People Work with Us
        </div>
        <div className='divider mt-3'>
          <span className='line-gold'></span>
          <span className='dot-gold'></span>
        </div>
      </div>
      <div className='row'>
      {aboutUsData.map((item, index) => (
        <div className='col-md-4' key={index}>
          <div className='aboutus-card'>
            <div className='d-flex gap-2 mb-3'>
              <div className='aboutus-card-number'>{item.number}</div>
              <div className='aboutus-card-title'>{item.title}</div>
            </div>
            <div className='aboutus-card-description'>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default AboutUsSection