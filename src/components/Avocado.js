// Avocado.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Avocado.css';  // Assuming you have a CSS for Avocado styles
import avocadoImage from '../assets/avocado.jpg';  // Replace with the actual image path
import hassAvocadoImage from '../assets/hass-avocado.jpg';  // Replace with the actual image path
import pinkAvocadoImage from '../assets/pink-avocado.jpg';  // Replace with the actual image path
import floridaAvocadoImage from '../assets/florida-avocado.jpg';  // Replace with the actual image path

const Avocado = () => {
  const navigate = useNavigate();

  const avocados = [
    {
      name: 'Avocado',
      img: avocadoImage,
      calories: 160,
      proteins: 2.0,
      fats: 15.0,
      carbs: 9.0,
      description: 'Avocado is a nutrient-dense fruit packed with healthy fats, vitamins, and minerals, offering numerous health benefits including improved heart health and digestion.',
      advantages: [
        'Rich in healthy monounsaturated fats that promote heart health.',
        'High in fiber, which aids in digestion and promotes weight loss.',
        'Contains essential vitamins such as Vitamin E, K, C, and B-6.',
      ],
      disadvantages: [
        'High in calories, so portion control is necessary for those monitoring caloric intake.',
        'Can be expensive depending on the type and location.',
      ],
    },
    {
      name: 'Hass Avocado',
      img: hassAvocadoImage,
      calories: 160,
      proteins: 2.0,
      fats: 15.0,
      carbs: 9.0,
      description: 'Hass avocados are the most popular variety, known for their creamy texture and rich taste. They are also high in healthy fats and provide a variety of nutrients.',
      advantages: [
        'High in heart-healthy fats and fiber.',
        'Versatile in cooking and ideal for both sweet and savory dishes.',
        'Great for making guacamole and adding creaminess to smoothies.',
      ],
      disadvantages: [
        'Relatively expensive compared to other avocado varieties.',
        'Can spoil quickly once ripened, so they need to be eaten or used fast.',
      ],
    },
    {
      name: 'Pink Avocado',
      img: pinkAvocadoImage,
      calories: 150,
      proteins: 2.0,
      fats: 14.0,
      carbs: 8.0,
      description: 'Pink avocados are a less common variety known for their smooth skin and unique pinkish hue. They offer similar health benefits as other avocados.',
      advantages: [
        'Rich in healthy fats and antioxidants.',
        'Helps in reducing inflammation and supports eye health.',
        'Provides a good amount of potassium and magnesium.',
      ],
      disadvantages: [
        'More difficult to find in stores compared to other varieties.',
        'Slightly lower availability, which may make them more expensive.',
      ],
    },
    {
      name: 'Florida Avocado',
      img: floridaAvocadoImage,
      calories: 140,
      proteins: 1.5,
      fats: 13.0,
      carbs: 8.0,
      description: 'Florida avocados are larger and have a milder flavor than the Hass variety. They are rich in healthy fats, and the flesh is smooth and creamy.',
      advantages: [
        'Lower in calories compared to other avocado varieties.',
        'Ideal for adding to salads or sandwiches due to its mild flavor.',
        'Contains a variety of vitamins and minerals to support overall health.',
      ],
      disadvantages: [
        'Can be less creamy than Hass avocados.',
        'Milder flavor may not appeal to everyone.',
      ],
    },
  ];

  return (
    <div className="avocado-page">
      <div className="avocado-container">
        <h2>Avocados</h2>

        {avocados.map((avocado, index) => (
          <div className="avocado-section" key={index}>
            <img src={avocado.img} alt={avocado.name} className="avocado-image" />
            <div className="avocado-description">
              <h3>{index + 1}. {avocado.name}</h3>
              <p>{avocado.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {avocado.calories} (g)</li>
                <li>Proteins: {avocado.proteins} (g)</li>
                <li>Fats: {avocado.fats} (g)</li>
                <li>Carbohydrates: {avocado.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {avocado.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {avocado.disadvantages.map((disadv, i) => (
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

export default Avocado;
