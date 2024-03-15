import React, { useState } from 'react';
import './App.css';
import SimpleCalculator from './components/SimpleCalculator';
import ScientificCalculator from './components/ScientificCalculator';
import EmiCalculator from './components/EmiCalculator';
import FuelCalculator from './components/FuelCalculator';


function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <header>React Customised Calculator</header>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="simple">Simple Calculator</option>
        <option value="scientific">Scientific Calculator</option>
        <option value="emi">EMI Calculator</option>
        <option value="bmi">BMI Calculator</option>
        <option value="fuel">Fuel Calculator</option>
        <option value="age">Age Calculator</option>
      </select>

      {selectedOption === 'simple' && <div><SimpleCalculator /></div>}
      {selectedOption === 'scientific' && <div><ScientificCalculator /></div>}
      {selectedOption === 'emi' && <div><EmiCalculator /></div>}
      {selectedOption === 'bmi' && <div>Content for BMI Calculator</div>}
      {selectedOption === 'fuel' && <div><FuelCalculator /></div>}
      {selectedOption === 'age' && <div>Content for Age Calculator</div>}

    </div>
  );
}

export default App;
