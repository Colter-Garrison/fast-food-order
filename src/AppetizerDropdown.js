import React from 'react';

export default function AppetizerDropdown({ setAppetizer }) {
  function handleChange(e) {
    setAppetizer(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value='1'>Hobbit</option>
    <option value='2'>Dwarf</option>
    <option value='3'>Po-Ta-Toes</option>
    <option value='4'>Snuffler</option>
  </select>;
}