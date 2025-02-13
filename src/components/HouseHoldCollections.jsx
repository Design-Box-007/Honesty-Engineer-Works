import React, { useState, useEffect } from 'react';
import furnitureData from '../data/furnitureData'; // Adjust the path as needed

const HouseHoldCollections = () => {
  const [activeCategory, setActiveCategory] = useState('Tables');
  const [activeSubCategory, setActiveSubCategory] = useState(1);

  // Extract categories from the data
  const categories = furnitureData?.map(category => category.title);

  // Find the data for the active category
  const activeCategoryData = furnitureData.find(cat => cat.title === activeCategory);
  const subCategories = activeCategoryData ? activeCategoryData.items.subCategories : [];
  const items = activeCategoryData && activeCategoryData.items.items ? activeCategoryData.items.items[activeSubCategory] : [];

  // Update activeSubCategory when activeCategory changes
  useEffect(() => {
    if (subCategories.length > 0) {
      setActiveSubCategory(subCategories[0].id);
    }
  }, [activeCategory, subCategories]);

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Handle subcategory click
  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  return (
    <div className='my-5'>
      <div className='furniturepage-subtitle'>
        Our Collections
      </div>
      <div className='d-flex justify-content-center'>
        <div className='furniturepage-category d-flex align-items-center justify-content gap-sm-5 gap-1'>
          {categories?.map(category => (
            <div
              key={category}
              className={`furniturepage-category-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className='row'>
        {subCategories?.map(subCategory => (
          <div key={subCategory.id} className='col-lg-3 col-md-4 col-6 my-3'>
            <div
              className={`furniture-category-image-container ${activeSubCategory === subCategory.id ? 'active' : ''}`}
              onClick={() => handleSubCategoryClick(subCategory.id)}
            >
              <img
                src={subCategory.image}
                alt={subCategory.title}
                width="100%"
                className='furniture-category-image'
              />
              {/* <div className='furniture-category-title'>
                {subCategory.title}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        {items?.map(item => (
          <div key={item.id} className='col-lg-3 col-md-4 col-6 my-3'>
            <div className='furniture-item-image-container'>
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                className='furniture-category-image'
              />
              {/* <div className='furniture-item-title'>
                {item.title}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseHoldCollections;
