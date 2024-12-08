// CoconutOil.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CoconutOil.css';  // Assuming you have a CSS for Coconut Oil styles
import coconutOilImage from '../assets/coconut-oil.jpg';  // Replace with the actual image path
import virginCoconutOilImage from '../assets/virgin-coconut-oil.jpg';  // Replace with the actual image path
import refinedCoconutOilImage from '../assets/refined-coconut-oil.jpg';  // Replace with the actual image path

const CoconutOil = () => {
  const navigate = useNavigate();

  const coconutOils = [
    {
      name: 'Virgin Coconut Oil',
      img: virginCoconutOilImage,
      calories: 120,
      proteins: 0.0,
      fats: 13.5,
      carbs: 0.0,
      description: 'Virgin coconut oil is made from fresh coconut meat and is extracted through cold pressing. It retains most of its nutrients and has a distinctive coconut flavor.',
      advantages: [
        'Rich in medium-chain triglycerides (MCTs), which may aid in fat loss.',
        'Supports brain health and improves metabolism.',
        'Contains antioxidants that promote skin health and reduce inflammation.',
      ],
      disadvantages: [
        'High in calories and fat, so should be consumed in moderation.',
        'Can be more expensive compared to refined coconut oil.',
      ],
    },
    {
      name: 'Refined Coconut Oil',
      img: refinedCoconutOilImage,
      calories: 120,
      proteins: 0.0,
      fats: 13.5,
      carbs: 0.0,
      description: 'Refined coconut oil is made from dried coconut meat and undergoes a refining process. It has a neutral flavor and is less potent than virgin coconut oil.',
      advantages: [
        'Lighter flavor, making it versatile for cooking and baking.',
        'Contains MCTs that help increase energy and burn fat.',
        'More affordable than virgin coconut oil.',
      ],
      disadvantages: [
        'Undergoes processing that reduces the nutritional content.',
        'Lacks some of the antioxidants present in virgin coconut oil.',
      ],
    },
    {
      name: 'Organic Coconut Oil',
      img: coconutOilImage,
      calories: 120,
      proteins: 0.0,
      fats: 13.5,
      carbs: 0.0,
      description: 'Organic coconut oil is made from coconuts that are grown without pesticides or chemicals. It can be virgin or refined, offering a natural, chemical-free option.',
      advantages: [
        'Certified organic and free of harmful chemicals.',
        'Contains MCTs that support metabolism and fat burning.',
        'Good for skin and hair health due to its antioxidant properties.',
      ],
      disadvantages: [
        'Can be more expensive due to organic certification.',
        'Like other coconut oils, it is high in calories and fat.',
      ],
    },
  ];

  return (
    <div className="coconut-oil-page">
      <div className="coconut-oil-container">
        <h2>Coconut Oil</h2>

        {coconutOils.map((coconutOil, index) => (
          <div className="coconut-oil-section" key={index}>
            <img src={coconutOil.img} alt={coconutOil.name} className="coconut-oil-image" />
            <div className="coconut-oil-description">
              <h3>{index + 1}. {coconutOil.name}</h3>
              <p>{coconutOil.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {coconutOil.calories} (g)</li>
                <li>Proteins: {coconutOil.proteins} (g)</li>
                <li>Fats: {coconutOil.fats} (g)</li>
                <li>Carbohydrates: {coconutOil.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {coconutOil.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {coconutOil.disadvantages.map((disadv, i) => (
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

export default CoconutOil;
