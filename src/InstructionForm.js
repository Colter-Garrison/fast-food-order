import { useState } from 'react';

export default function InstructionForm({ extraInstructions, setInstructions }) {
  const [InstructionForm, setInstructionForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...extraInstructions, InstructionForm]);
  }

  function handleInstructionChange(e) {
    setInstructionForm(e.target.value);
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Special Instructions:
      <input required value={InstructionForm} onChange={handleInstructionChange} />
    </label>
    <button>Add Instruction</button>
  </form>;
}
