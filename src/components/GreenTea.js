// GreenTea.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GreenTea.css';  // Assuming you have a CSS for Green Tea styles
import greenTeaImage from '../assets/green-tea.jpg';  // Replace with the actual image path
import matchaImage from '../assets/matcha.jpg';  // Replace with the actual image path
import senchaImage from '../assets/sencha.jpg';  // Replace with the actual image path
import oolongImage from '../assets/oolong.jpg';  // Replace with the actual image path

const GreenTea = () => {
  const navigate = useNavigate();

  const greenTeas = [
    {
      name: 'Green Tea',
      img: greenTeaImage,
      calories: 2,
      proteins: 0.5,
      fats: 0.0,
      carbs: 0.4,
      description: 'Green tea is made from unoxidized leaves and is one of the least processed types of tea. It contains antioxidants, catechins, and other compounds that support overall health.',
      advantages: [
        'Rich in antioxidants that help improve metabolism.',
        'Supports fat burning during exercise.',
        'May improve brain function and reduce the risk of certain cancers.',
      ],
      disadvantages: [
        'Contains caffeine, which may cause anxiety in some people.',
        'Can cause stomach irritation if consumed on an empty stomach.',
      ],
    },
    {
      name: 'Matcha Green Tea',
      img: matchaImage,
      calories: 3,
      proteins: 0.6,
      fats: 0.1,
      carbs: 0.5,
      description: 'Matcha is a powdered form of green tea, made from specially grown tea leaves that are ground into a fine powder. It has higher levels of antioxidants and nutrients than regular green tea.',
      advantages: [
        'Boosts metabolism and aids in fat burning.',
        'Rich in EGCG (epigallocatechin gallate), a powerful antioxidant.',
        'Improves focus and energy without a crash due to its combination of caffeine and L-theanine.',
      ],
      disadvantages: [
        'Can be more expensive than regular green tea.',
        'Contains caffeine, which may affect sensitive individuals.',
      ],
    },
    {
      name: 'Sencha Green Tea',
      img: senchaImage,
      calories: 2,
      proteins: 0.4,
      fats: 0.0,
      carbs: 0.3,
      description: 'Sencha is one of the most popular types of green tea in Japan, known for its refreshing taste and health benefits. It is rich in antioxidants and provides a natural detox effect.',
      advantages: [
        'Promotes fat oxidation and weight loss.',
        'Rich in catechins that help burn fat and improve metabolism.',
        'Boosts the immune system and improves digestion.',
      ],
      disadvantages: [
        'Can be bitter if over-brewed.',
        'Contains caffeine, which may not be suitable for everyone.',
      ],
    },
    {
      name: 'Oolong Green Tea',
      img: oolongImage,
      calories: 5,
      proteins: 0.4,
      fats: 0.1,
      carbs: 1.0,
      description: 'Oolong tea is a traditional Chinese tea that is partially fermented. It is known for aiding in weight management by boosting metabolism and fat breakdown.',
      advantages: [
        'Helps in fat burning and weight management.',
        'Contains polyphenols that can improve fat metabolism.',
        'May improve brain function and increase energy levels.',
      ],
      disadvantages: [
        'Higher caffeine content compared to regular green tea.',
        'Can cause stomach discomfort for some individuals.',
      ],
    },
  ];

  return (
    <div className="green-tea-page">
      <div className="green-tea-container">
        <h2>Green Tea</h2>

        {greenTeas.map((greenTea, index) => (
          <div className="green-tea-section" key={index}>
            <img src={greenTea.img} alt={greenTea.name} className="green-tea-image" />
            <div className="green-tea-description">
              <h3>{index + 1}. {greenTea.name}</h3>
              <p>{greenTea.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {greenTea.calories} (g)</li>
                <li>Proteins: {greenTea.proteins} (g)</li>
                <li>Fats: {greenTea.fats} (g)</li>
                <li>Carbohydrates: {greenTea.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {greenTea.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {greenTea.disadvantages.map((disadv, i) => (
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

export default GreenTea;
