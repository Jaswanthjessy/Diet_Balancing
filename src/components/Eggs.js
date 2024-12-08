// Egg.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Eggs.css';  // Assuming you have a CSS for Egg styles
import boiledEggImage from '../assets/boiled-egg.jpg';  // Replace with the actual image path
import scrambledEggImage from '../assets/scrambled-egg.jpg';  // Replace with the actual image path
import friedEggImage from '../assets/fried-egg.jpg';  // Replace with the actual image path
import omeletteEggImage from '../assets/omelette-egg.jpg';  // Replace with the actual image path

const Egg = () => {
  const navigate = useNavigate();

  const eggs = [
    {
      name: 'Boiled Egg',
      img: boiledEggImage,
      calories: 68,
      proteins: 5.5,
      fats: 4.8,
      carbs: 0.6,
      description: 'Boiled eggs are a great source of protein and essential nutrients. They are typically lower in calories and can be eaten as a snack or part of a meal.',
      advantages: [
        'High in protein, which supports muscle growth and repair.',
        'Rich in essential vitamins and minerals, including vitamin B12 and selenium.',
        'Easy to prepare and can be eaten on the go.',
      ],
      disadvantages: [
        'Can be high in cholesterol, especially if consumed in large amounts.',
        'May cause digestive discomfort in some individuals.',
      ],
    },
    {
      name: 'Scrambled Egg',
      img: scrambledEggImage,
      calories: 91,
      proteins: 6.7,
      fats: 6.7,
      carbs: 1.1,
      description: 'Scrambled eggs are made by beating eggs and cooking them in a pan. They are often made with butter or oil, which adds extra calories and fats.',
      advantages: [
        'Versatile and can be flavored with various herbs and spices.',
        'Provides a good amount of protein and healthy fats.',
        'Can be served with vegetables or cheese for added nutrition.',
      ],
      disadvantages: [
        'High in fats, especially if prepared with excessive butter or oil.',
        'Can be calorie-dense depending on the preparation.',
      ],
    },
    {
      name: 'Fried Egg',
      img: friedEggImage,
      calories: 90,
      proteins: 6.3,
      fats: 6.7,
      carbs: 0.7,
      description: 'Fried eggs are cooked by cracking eggs into a hot pan, typically with oil or butter. They are crispy on the edges with a runny yolk in the center.',
      advantages: [
        'Quick and easy to prepare.',
        'Good source of protein and healthy fats.',
        'Can be served with toast or vegetables for a balanced meal.',
      ],
      disadvantages: [
        'May be higher in fat and calories due to oil or butter used for frying.',
        'May cause heartburn or indigestion for some people.',
      ],
    },
    {
      name: 'Omelette',
      img: omeletteEggImage,
      calories: 154,
      proteins: 11,
      fats: 11,
      carbs: 1.2,
      description: 'An omelette is a dish made from beaten eggs, cooked in a pan, and typically filled with ingredients like cheese, vegetables, or meat.',
      advantages: [
        'High in protein and can be packed with vegetables for added nutrients.',
        'Very customizable – can be made with a variety of ingredients.',
        'Perfect for breakfast or lunch.',
      ],
      disadvantages: [
        'Can be high in calories and fat, depending on fillings used.',
        'May be difficult to prepare for beginners without proper techniques.',
      ],
    },
  ];

  return (
    <div className="egg-page">
      <div className="egg-container">
        <h2>Egg Varieties</h2>

        {eggs.map((egg, index) => (
          <div className="egg-section" key={index}>
            <img src={egg.img} alt={egg.name} className="egg-image" />
            <div className="egg-description">
              <h3>{index + 1}. {egg.name}</h3>
              <p>{egg.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {egg.calories} (g)</li>
                <li>Proteins: {egg.proteins} (g)</li>
                <li>Fats: {egg.fats} (g)</li>
                <li>Carbohydrates: {egg.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {egg.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {egg.disadvantages.map((disadv, i) => (
                  <li key={i}>{disadv}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Egg;
