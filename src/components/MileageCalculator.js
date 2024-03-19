// MileageCalculator.js
import React, { useState } from 'react';
import './MileageCalculator.css';

const MileageCalculator = () => {
  const [distance, setDistance] = useState('');
  const [fuelInLiters, setFuelInLiters] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [mileage, setMileage] = useState('');

  const calculateMileage = () => {
    const distanceValue = parseFloat(distance);
    const fuelValue = parseFloat(fuelInLiters);
    const priceValue = parseFloat(fuelPrice);

    if (isNaN(distanceValue) || isNaN(fuelValue) || isNaN(priceValue)) {
      alert('Please enter valid numbers.');
      return;
    }

    const mileageValue = distanceValue / fuelValue;
    setMileage(mileageValue.toFixed(2));
  };

  return (
    <div className="mileage-calculator">
      <h2>Mileage Calculator</h2>
      <div className="input-group">
        <label>Distance (km)</label>
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Fuel (liters)</label>
        <input
          type="number"
          value={fuelInLiters}
          onChange={(e) => setFuelInLiters(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Fuel Price (per liter)</label>
        <input
          type="number"
          value={fuelPrice}
          onChange={(e) => setFuelPrice(e.target.value)}
        />
      </div>
      <div className="input-group">
        <button onClick={calculateMileage}>Calculate Mileage</button>
      </div>
      {mileage && (
        <div className="result">
          <h3>Mileage</h3>
          <h6>{`Mileage: ${mileage} km/liter`}</h6>
        </div>
      )}
    </div>
  );
};

export default MileageCalculator;
