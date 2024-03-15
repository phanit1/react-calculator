import React, { useState } from 'react';
import './ScientificCalculator.css'; // Import your CSS file for styling

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input}
          readOnly
          className="input-display"
          placeholder="Enter an expression"
        />
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={handleClear}>C</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('Math.sin(')}>sin</button>
          <button onClick={() => handleButtonClick('Math.cos(')}>cos</button>
          <button onClick={() => handleButtonClick('Math.tan(')}>tan</button>
          <button onClick={() => handleButtonClick('Math.sqrt(')}>sqrt</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('Math.log10(')}>log</button>
          <button onClick={() => handleButtonClick('Math.pow(')}>x^y</button>
          <button onClick={() => handleButtonClick('Math.PI')}>π</button>
          <button onClick={() => handleButtonClick('(')}>(</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('Math.exp(')}>exp</button>
          <button onClick={() => handleButtonClick('Math.pow(')}>^</button>
          <button onClick={() => handleButtonClick('Math.E')}>e</button>
          <button onClick={() => handleButtonClick(')')}>)</button>
        </div>
        <div className="row">
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator;
