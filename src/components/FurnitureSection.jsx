import React from 'react'
import { LuArrowRightCircle } from 'react-icons/lu'
import FurnitureImageOne from '../assets/FurnitureImageOne.png';
import FurnitureImageTwo from '../assets/FurnitureImageTwo.png';
import FurnitureImageThree from '../assets/FurnitureImageThree.png';
import FurnitureImageFour from '../assets/FurnitureImageFour.png';
import FurnitureImageFive from '../assets/FurnitureImageFive.png';
import FurnitureImageSix from '../assets/FurnitureImageSix.png';


const furnitureData = [
    { src: FurnitureImageOne, alt: 'FurnitureImageOne', text: 'Residence' },
    { src: FurnitureImageTwo, alt: 'FurnitureImageTwo', text: 'Office' },
    { src: FurnitureImageThree, alt: 'FurnitureImageThree', text: 'Lounges' },
    { src: FurnitureImageFour, alt: 'FurnitureImageFour', text: 'Furniture' },
    { src: FurnitureImageFive, alt: 'FurnitureImageFive', text: 'Tables' },
    { src: FurnitureImageSix, alt: 'FurnitureImageSix', text: 'Household' },
  ];


const FurnitureSection = () => {
  return (
    <div className='furniture-section'>
        <div className='mb-4'>
                <div className='section-title'>(03)</div>
                <div className='section-title'>Our Furniture</div>
            </div>
            <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='furniture-title'>Crafting Steel Elegance for Every Space</div>
                <button className='button-primary'>Enquire Now <LuArrowRightCircle size={25} /></button>
            </div>
            <div className='row my-5'>
      {furnitureData.map((item, index) => (
        <div className='col-md-4 col-6' key={index}>
          <div className='furniture-image-container'>
            <img src={item.src} alt={item.alt} width="100%" />
            <div className='furniture-image-text'>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default FurnitureSection