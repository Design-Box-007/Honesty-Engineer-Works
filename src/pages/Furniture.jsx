import React, { useState } from 'react'; // Import useState
import FurniturePageImageOne from '../assets/FurniturePageImageOne.png';
import FurniturePageImageTwo from '../assets/FurniturePageImageTwo.png';
import FurniturePageImageThree from '../assets/FurniturePageImageThree.png';
import FurniturePageConnectImage from '../assets/FurniturePageConnectImage.png';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HouseHoldCollections from '../components/HouseHoldCollections';
import OfficeFurnitureCollections from '../components/OfficeFurnitureCollections';
// import FurnitureCategory from '../components/HouseHoldCollections';

const Furniture = () => {

  return (
    <div className='furniturepage-section'>
      {/* <div className='furniturepage-hero-section'>
        <h1 className='furniturepage-title'>
          Versatile Steel Furniture,<br /> Durable Furniture for Home and Office
        </h1>
        <div className='row'>
          <div className='col-md-6 my-3'>
            <div className='furniturepage-heroimage-container'>
              <img
                src={FurniturePageImageOne}
                alt="FurniturePageImageOne"
                width="100%"
                className='furniturepage-heroimage'
              />
              <div className='hero-bottom-container w-75'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-2 align-items-end my-1'>
                    <div className='hero-text'>Cityscape Wheel</div>
                    <div className='hero-subtext'>/ stunning architectural feat spanning over a major river</div>
                  </div>
                </div>
                <div className='divider'>
                  <span className='line-gray'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 my-3'>
            <div className='furniturepage-heroimage-container'>
              <img
                src={FurniturePageImageTwo}
                alt="FurniturePageImageTwo"
                width="100%"
                className='furniturepage-heroimage'
              />
              <div className='hero-bottom-container w-75'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-2 align-items-end my-1'>
                    <div className='hero-text'>Luxury Residential</div>
                  </div>
                </div>
                <div className='divider'>
                  <span className='line-gray'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-6 my-3'>
            <div className='furniturepage-heroimage-container'>
              <img
                src={FurniturePageImageThree}
                alt="FurniturePageImageThree"
                width="100%"
                className='furniturepage-heroimage'
              />
              <div className='hero-bottom-container w-75'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-2 align-items-end my-1'>
                    <div className='hero-text'>Grand Bridge</div>
                  </div>
                </div>
                <div className='divider'>
                  <span className='line-gray'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divider my-5'>
        <span className='line-gray'></span>
      </div> */}

      <div className='furniturepage-section'>

      <HouseHoldCollections/>

      <div className='divider my-5'>
        <span className='line-gold'></span>
      </div>

      {/* <OfficeFurnitureCollections/> */}


      <div className='divider my-5'>
        <span className='line-gray'></span>
      </div>

    </div>

      <div className='furniturepage-connect-container'>
        <div className='furniturepage-heroimage-container'>
          <img
            src={FurniturePageConnectImage}
            alt="FurniturePageConnectImage"
            width="100%"
            className='furniturepage-heroimage'
          />
        </div>
        <div className='row'>
          <div className='col-md-6 my-3'>
            <div className='furniturepage-connect-title'>
              Let’s discuss your Vision with us...
            </div>
          </div>
          <div className='col-md-6 my-3'>
            <Link className='text-decoration-none' to='/contact'>
              <div className='furniturepage-connect-button furniturepage-connect-title'>
                Lets Connect <FiArrowRightCircle size={60} />
              </div>
            </Link>
          </div>
          <div className='divider'>
            <span className='line'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
