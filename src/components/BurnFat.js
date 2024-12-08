import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/BurnFat.css'; // Import CSS styles

const BurnFat = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="burn-fat-page">
      <div className="burn-fat-container">
        <h2>Foods and Diets to Burn Fat</h2>
        <p>Here are the best foods and diets to help you burn fat effectively.</p>
        <div className="food-list">
          <h3>Top Foods for Burning Fat</h3>
          <ul>
            <li>
              <Link to="/greentea">1. Green Tea</Link>
            </li>
            <li>
              <Link to="/coconutoil">2. Coconut Oil</Link>
            </li>
            <li>
              <Link to="/eggs">3. Eggs</Link>
            </li>
            <li>
              <Link to="/apple">4. Apple Cider Vinegar</Link>
            </li>
            <li>
              <Link to="/avocado">5. Avocados</Link>
            </li>
            <li>
              <Link to="/peppers">6. Chili Peppers</Link>
            </li>
          </ul>
        </div>

        <div className="diet-tips">
          <h3>Diet Tips for Burning Fat</h3>
          <p>1. Eat more protein-rich foods.</p>
          <p>2. Cut back on refined carbs.</p>
          <p>3. Increase fiber intake.</p>
          <p>4. Drink water before meals.</p>
          <p>5. Get quality sleep.</p>
        </div>

        {/* Back button to navigate back */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BurnFat;
