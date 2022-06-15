import React from 'react';

export default function DessertDropdown({ setDessert }) {
  function handleChange(e) {
    setDessert(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value='1'>Apple Pie</option>
    <option value='2'>Chocolate Cake</option>
    <option value='3'>Carrot Cake</option>
    <option value='4'>Cheese Cake</option>
  </select>;
}
