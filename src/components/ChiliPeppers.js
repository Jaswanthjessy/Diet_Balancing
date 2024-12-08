// ChiliPeppers.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ChiliPeppers.css';  // Assuming you have a CSS for Chili Peppers styles
import chiliImage from '../assets/chili-peppers.jpg';  // Replace with the actual image path
import habaneroImage from '../assets/habanero.jpg';  // Replace with the actual image path
import jalapenoImage from '../assets/jalapeno.jpg';  // Replace with the actual image path
import cayenneImage from '../assets/cayenne.jpg';  // Replace with the actual image path

const ChiliPeppers = () => {
  const navigate = useNavigate();

  const chiliPeppers = [
    {
      name: 'Chili Peppers',
      img: chiliImage,
      calories: 18,
      proteins: 0.9,
      fats: 0.4,
      carbs: 3.9,
      description: 'Chili peppers are a fruit from the Capsicum plant. They come in various varieties, known for their spicy flavor. They are rich in vitamins and antioxidants, especially vitamin C and capsaicin.',
      advantages: [
        'Rich in capsaicin, which helps boost metabolism.',
        'Supports weight loss by increasing calorie burning.',
        'Contains vitamin C and antioxidants that help boost the immune system.',
      ],
      disadvantages: [
        'Can cause digestive issues or heartburn in some individuals.',
        'Too much can lead to irritation in the stomach or intestines.',
      ],
    },
    {
      name: 'Habanero Peppers',
      img: habaneroImage,
      calories: 40,
      proteins: 1.0,
      fats: 0.4,
      carbs: 9.1,
      description: 'Habanero peppers are among the hottest chili peppers. They are often used in hot sauces and dishes for their fiery flavor and rich antioxidant content.',
      advantages: [
        'Great for boosting metabolism and fat burning.',
        'Rich in antioxidants that can help with inflammation.',
        'Supports pain relief by releasing endorphins due to capsaicin.',
      ],
      disadvantages: [
        'Very hot, may cause discomfort or irritation.',
        'Can trigger heartburn or digestive issues in sensitive individuals.',
      ],
    },
    {
      name: 'Jalapeno Peppers',
      img: jalapenoImage,
      calories: 4,
      proteins: 0.2,
      fats: 0.1,
      carbs: 1.0,
      description: 'Jalapenos are moderate heat peppers commonly used in Mexican cuisine. They are rich in vitamins A and C and are lower in heat than habaneros.',
      advantages: [
        'Helps to increase metabolism and burn fat.',
        'Rich in vitamins A and C, which support immune function.',
        'Contains antioxidants that may improve heart health.',
      ],
      disadvantages: [
        'Can cause irritation for sensitive individuals.',
        'Overconsumption may lead to stomach discomfort.',
      ],
    },
    {
      name: 'Cayenne Peppers',
      img: cayenneImage,
      calories: 18,
      proteins: 0.8,
      fats: 0.4,
      carbs: 3.6,
      description: 'Cayenne peppers are commonly used in ground form as a spice in cooking. They contain capsaicin, which has various health benefits including improved circulation and metabolism.',
      advantages: [
        'Boosts metabolism and supports weight loss.',
        'Improves digestion and supports circulation.',
        'Can help with pain relief and reduce inflammation.',
      ],
      disadvantages: [
        'Very spicy, can cause irritation in the digestive system.',
        'May lead to discomfort if consumed in excess.',
      ],
    },
  ];

  return (
    <div className="chili-peppers-page">
      <div className="chili-peppers-container">
        <h2>Chili Peppers</h2>

        {chiliPeppers.map((pepper, index) => (
          <div className="chili-peppers-section" key={index}>
            <img src={pepper.img} alt={pepper.name} className="chili-peppers-image" />
            <div className="chili-peppers-description">
              <h3>{index + 1}. {pepper.name}</h3>
              <p>{pepper.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {pepper.calories} (g)</li>
                <li>Proteins: {pepper.proteins} (g)</li>
                <li>Fats: {pepper.fats} (g)</li>
                <li>Carbohydrates: {pepper.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {pepper.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {pepper.disadvantages.map((disadv, i) => (
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

export default ChiliPeppers;
