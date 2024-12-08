import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for back navigation
import '../style/WeightGain.css'; // Import your updated CSS styles

const WeightGain = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="weight-gain-page">
      <div className="weight-gain-background"></div> {/* Background div with blur */}
      <div className="weight-gain-container">
        <h2>Weight Gain Diet Plan</h2>
        <p>Discover the best foods to help you gain weight in a healthy way.</p>
        
        <div className="food-list">
          <h3>Top Foods for Weight Gain</h3>
          <ul>
            <li><Link to="/Wholemilk">1. Whole Milk</Link></li>
            <li>
              <Link to="/eggs">2. Eggs</Link>
            </li>
            <li><Link to="/whole-grains">3. Whole Grains (Brown Rice, Quinoa)</Link></li>
            <li><Link to="/nut-butters">4. Nut Butters (Peanut Butter, Almond Butter)</Link></li>
            <li>
              <Link to="/lean-proteins">5. Lean Proteins (Chicken, Fish)</Link> 
            </li>
            <li><Link to="/healthy-oils">6. Healthy Oils (Olive Oil, Coconut Oil)</Link></li>
            <li>
            <Link to="/healthy-fats">7. Healthy Fats </Link>
            </li>
          </ul>
        </div>
        
        <div className="diet-tips">
          <h3>Diet Tips for Weight Gain</h3>
          <p>1. Eat more calories than you burn.</p>
          <p>2. Increase your protein intake.</p>
          <p>3. Choose nutrient-dense foods.</p>
          <p>4. Eat more frequently, 5-6 small meals a day.</p>
          <p>5. Add healthy fats to your diet.</p>
        </div>

        {/* Back button to navigate back */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default WeightGain;
