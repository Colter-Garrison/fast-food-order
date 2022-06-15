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
  const [extraInstructions, setInstructions] = useState(['Hold the frosting']);
  
  return (
    <div className="App">
      <div className='upper-form'>
        <h1>MEATS BACK ON THE MENU BOYS!!!</h1>
        <h2>Order for {orderName}</h2>
        <FoodImages
          appetizerId={appetizerId}
          entreeId={entreeId}
          dessertId={dessertId} />
        <ul className='instructions-list'>
          {
            extraInstructions.map((instruction, i) => <li key={instruction + i}>
              {instruction}</li>)
          }
        </ul>
      </div>
      <div className='order-form'>
        <p>Appetizer</p>
        <AppetizerDropdown setAppetizer={setAppetizer} />
        <p>Entree</p>
        <EntreeDropdown setEntree={setEntree} />
        <p>Dessert</p>
        <DessertDropdown setDessert={setDessert} />
      </div>
      <div>
        <NameInput setOrder={setOrder} />
        <InstructionForm
          extraInstructions={extraInstructions} setInstructions={setInstructions} />
      </div>
    </div>
  );
}

export default App;