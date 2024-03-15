// EmiCalculator.js
import React, { useState } from 'react';
import './EmiCalculator.css'; // Import your CSS file for styling

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [tenureUnit, setTenureUnit] = useState('years');
  const [emi, setEmi] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');


  const handleInputChange = (e, setStateFunc) => {
    const value = e.target.value;
    setStateFunc(value);
  };

  const handleTenureUnitChange = (e) => {
    setTenureUnit(e.target.value);
  };

  const handleCalculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    let n = parseFloat(loanTerm);

    if (tenureUnit === 'years') {
      n *= 12; // convert years to months
    }

    if (p > 0 && r > 0 && n > 0) {
      const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiAmount.toFixed(2));

      const totalInterestAmount = emiAmount * n - p;
      setTotalInterest(totalInterestAmount.toFixed(2));
      const totalAmount = emiAmount * n;
      setTotalAmount(totalAmount.toFixed(2));
    } else {
      setEmi('');
      setTotalInterest('');
      setTotalAmount('');
    }
  };

  const handleClear = () => {
    setPrincipal('');
    setInterestRate('');
    setLoanTerm('');
    setTenureUnit('years');
    setEmi('');
    setTotalInterest('');
    setTotalAmount('');
  };

  return (
    <div className="main-content">
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className="input-row">
        <label>Principal Amount (Rs.)</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => handleInputChange(e, setPrincipal)}
        />
      </div>
      <div className="input-row">
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => handleInputChange(e, setInterestRate)}
        />
      </div>
      <div className="input-row">
        <label>Tenure</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => handleInputChange(e, setLoanTerm)}
        />
        <select value={tenureUnit} onChange={handleTenureUnitChange}>
          <option value="years">Years</option>
          <option value="months">Months</option>
        </select>
      </div>
      <div className="input-row">
        <button onClick={handleCalculateEmi}>Calculate EMI</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      </div>
      {emi && totalInterest && totalAmount && (
        <div className="result-table">
          <table>
            <thead>
              <tr>
                <th>EMI Amount</th>
                <th>Total Interest Payable</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rs.{emi}</td>
                <td>Rs.{totalInterest}</td>
                <td>Rs.{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* {emi && totalInterest && (
        <div className="result">
          Monthly EMI: <span>Rs.{emi}</span> | Total Interest Payable: <span>Rs.{totalInterest}</span> | Total Amount Payable: <span>Rs. {totalAmount}</span>
        </div>
      )} */}
    </div>
  );
};

export default EmiCalculator;
