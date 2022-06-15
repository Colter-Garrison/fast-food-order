import React from 'react';

export default function EntreeDropdown({ setEntree }) {
  function handleChange(e) {
    setEntree(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value='1'>Wizard</option>
    <option value='2'>Elf</option>
    <option value='3'>Ranger</option>
    <option value='4'>Uruk-hai</option>
  </select>;
}
