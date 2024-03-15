// FuelCalculator.js
import React, { useState, useEffect } from 'react';
import './FuelCalculator.css';

const FuelCalculator = () => {
    const [fuelData, setFuelData] = useState(null);
    const [distance, setDistance] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');
    const [fuelType, setFuelType] = useState('petrol');
    const [fuelPrice, setFuelPrice] = useState('');
    const [totalCost, setTotalCost] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://edata.ndtv.com/cricket/fuel/allcities.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setFuelData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleCalculateCost = () => {
        console.log(fuelData,"Fuel Data")
        const distanceValue = parseFloat(distance);
        const consumptionValue = parseFloat(fuelConsumption);
        const priceValue = parseFloat(fuelPrice);

        if (isNaN(distanceValue) || isNaN(consumptionValue) || isNaN(priceValue)) {
            alert('Please enter valid numbers.');
            return;
        }

        const cost = (distanceValue / consumptionValue) * priceValue;
        setTotalCost(cost.toFixed(2));
    };

    return (
        <div className="fuel-calculator">
            <h2>Fuel Calculator</h2>
            <div className="input-group">
                <label>Distance (km)</label>
                <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Fuel Consumption (km/l)</label>
                <input
                    type="number"
                    value={fuelConsumption}
                    onChange={(e) => setFuelConsumption(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Fuel Type</label>
                <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                </select>
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
                <button onClick={handleCalculateCost}>Calculate Cost</button>
            </div>
            {totalCost && (
                <div className="result">
                    <h3>Total Cost</h3>
                    <p>{`Total cost for ${distance} km: Rs. ${totalCost}`}</p>
                </div>
            )}
        </div>
    );
};

export default FuelCalculator;
