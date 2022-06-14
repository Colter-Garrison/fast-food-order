import { useState } from 'react';
import './App.css';
import EntreeDropdown from './EntreeDropdown';
import AppetizerDropdown from './AppetizerDropdown';
import DessertDropdown from './DessertDropdown';
import NameInput from './NameInput';
import InstructionForm from './InstructionForm';
import FoodImages from './FoodImages';

function App() {
  const [appetizerId, setAppetizer] = useState(1);
  const [entreeId, setEntree] = useState(1);
  const [dessertId, setDessert] = useState(1);
  const [orderName, setOrder] = useState('Valued Orc');
  const [extraInstructions, setInstructions] = useState(['hold the whip']);

  return (
    <div className="App">
      <div>
        <h2>Order for {orderName}</h2>
        <FoodImages
          appetizerId={appetizerId}
          entreeId={entreeId}
          dessertId={dessertId} />
      </div>
      <div>
        <AppetizerDropdown setAppetizer={setAppetizer} />
        <EntreeDropdown setEntree={setEntree} />
        <DessertDropdown setDessert={setDessert} />
      </div>
    </div>
  );
}

export default App;