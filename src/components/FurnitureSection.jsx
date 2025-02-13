import React from 'react'
import { LuArrowRightCircle } from 'react-icons/lu'
import Storage2 from "../assets/furniture-assets/Storage cupboards/Storage2.jpg";
import Chair5 from "../assets/furniture-assets/Chairs/Chair5.jpg";
import Table4 from "../assets/furniture-assets/Table/1563.jpg";
import Chair3 from "../assets/furniture-assets/Chairs/Chair3.jpg";
import Shed10 from "../assets/furniture-assets/Sheds & roofs/Shed10.jpg";
import FurnitureImageThree from '../assets/FurnitureImageThree.png';



const furnitureData = [
  { src: Storage2, alt: 'FurnitureImageOne', text: 'Residence', textColor: "black" },
  { src: Chair5, alt: 'FurnitureImageTwo', text: 'Office', textColor: "black" },
  { src: FurnitureImageThree, alt: 'FurnitureImageThree', text: 'Lounges', textColor: "white" },
  { src: Chair3, alt: 'FurnitureImageFour', text: 'Furniture', textColor: "black" },
  { src: Table4, alt: 'FurnitureImageFive', text: 'Tables', textColor: "black" },
  { src: Shed10, alt: 'FurnitureImageSix', text: 'Industry', textColor: "black" },
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
              <div className='furniture-image-text' style={{ color: item.textColor }}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FurnitureSection