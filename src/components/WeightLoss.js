// WeightLoss.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/WeightLoss.css';

const WeightLoss = () => {
  const navigate = useNavigate();

  return (
    <div className="weight-loss-page">
      <div className="weight-loss-container">
        <h2>Weight Loss Diet Plan</h2>
        <p>Discover the best foods for effective weight loss.</p>

        <div className="food-list">
          <h3>Top Foods for Weight Loss</h3>
          <ul>
            <li>
              <Link to="/leafy-greens">1. Leafy Greens (Spinach, Kale)</Link>
            </li>
            <li>
              <Link to="/lean-proteins">2. Lean Proteins (Chicken, Fish)</Link> 
            </li>
            <li>
              <Link to="/whole-grains">3. Whole Grains (Brown Rice, Quinoa)</Link> {/* Updated link */}
            </li>
            <li>
            <Link to="/fruits">4. Fruits (Berries, Apples)</Link>
            </li>
            <li>
            <Link to="/healthy-fats">5. Healthy Fats (Avocado, Nuts)</Link>
            </li>
          </ul>
        </div>

        <div className="diet-tips">
          <h3>Diet Tips</h3>
          <p>1. Stay hydrated.</p>
          <p>2. Watch portion sizes.</p>
          <p>3. Avoid sugary drinks.</p>
          <p>4. Include regular physical activity.</p>
        </div>

        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default WeightLoss;
