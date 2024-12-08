import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

import weightLossImage from '../assets/weight-loss.jpg'; 
import burnFatImage from '../assets/burn-fat.jpg'; 
import weightGainImage from '../assets/weight-gain.jpg';
import bannerImage from '../assets/banner.jpg';

const Home = () => {
  return (
    <div className="home-container main-content">
      <div className="banner-container">
        <img src={bannerImage} alt="Diet Balancing Banner" className="banner-image" />
        <div className="quote-overlay">"Your Health, Your Balance."</div>
      </div>

      <h2>Welcome to Diet Balancing</h2>
      <p>Your journey to a healthier lifestyle starts here.</p>

      <div className="features">
        <div className="feature">
          <Link to="/weight-loss" className="feature-link">
            <img src={weightLossImage} alt="Weight Loss" className="feature-image" />
            <p>Discover effective Foods and Diets for weight loss.</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/burn-fat" className="feature-link">
            <img src={burnFatImage} alt="Burn Fat" className="feature-image" />
            <p>Explore the best Foods and Diet plans to help burn fat.</p>
          </Link>
        </div>
        <div className="feature">
          <Link to="/weight-gain" className="feature-link">
            <img src={weightGainImage} alt="Weight Gain" className="feature-image" />
            <p>Learn about the best Foods and Diets to help you gain weight.</p>
          </Link>
        </div>
      </div>
      <div className="cta-container">
        <h3>Ready to get started?</h3>
        <p>Sign up now to begin your journey!</p>
        <Link to="/signup">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
