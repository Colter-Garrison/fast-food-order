import React from 'react';

export default function FoodImages({ appetizerId, entreeId, dessertId }) {
  return <div className='image-display'>
    <img className='food-image' src={`appetizer-${appetizerId}.png`} />
    <img className='food-image' src={`entree-${entreeId}.png`} />
    <img className='food-image' src={`dessert-${dessertId}.png`} />
  </div>;
}
