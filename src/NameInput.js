import React from 'react';

export default function NameInput({ setOrder }) {
  function handleChange(e) {
    setOrder(e.target.value);
  }
  return <div className='name-input'>
    Order Name:
    <input onChange={handleChange} />
  </div>;
}
