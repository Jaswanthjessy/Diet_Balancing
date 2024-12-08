// src/Fruits.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Fruits.css';
import appleImage from '../assets/apple.jpg';
import bananaImage from '../assets/banana.jpg';
import orangeImage from '../assets/orange.jpg';
import strawberryImage from '../assets/strawberry.jpg';
import mangoImage from '../assets/mango.jpg';
import watermelonImage from '../assets/watermelon.jpg';
import pineappleImage from '../assets/pineapple.jpg';
import grapesImage from '../assets/grapes.jpg';
import kiwiImage from '../assets/kiwi.jpg';
import papayaImage from '../assets/papaya.jpg';

const Fruits = () => {
  const navigate = useNavigate();

  const fruits = [
    {
      name: 'Apple',
      img: appleImage,
      calories: 52,
      proteins: 0.3,
      fats: 0.2,
      carbs: 14,
      description: 'Apples are crunchy fruits rich in dietary fiber, Vitamin C, and various antioxidants.',
      advantages: [
        'High in fiber, promoting digestive health.',
        'Rich in antioxidants, supporting heart health.',
        'Low calorie, great for weight management.',
      ],
      disadvantages: [
        'May cause bloating in some individuals.',
        'Contains natural sugars, which should be moderated for diabetics.',
      ],
    },
    {
      name: 'Banana',
      img: bananaImage,
      calories: 89,
      proteins: 1.1,
      fats: 0.3,
      carbs: 23,
      description: 'Bananas are tropical fruits known for their potassium content and natural sweetness.',
      advantages: [
        'Rich in potassium, supporting heart and muscle function.',
        'Provides quick energy due to natural sugars.',
      ],
      disadvantages: [
        'High in carbs, not suitable for low-carb diets.',
        'Can cause bloating in sensitive individuals.',
      ],
    },
    {
      name: 'Orange',
      img: orangeImage,
      calories: 47,
      proteins: 0.9,
      fats: 0.1,
      carbs: 12,
      description: 'Oranges are citrus fruits packed with Vitamin C, supporting immune health.',
      advantages: [
        'High in Vitamin C, boosting immunity.',
        'Rich in water content, hydrating the body.',
      ],
      disadvantages: [
        'Acidity may irritate sensitive stomachs.',
        'Peeling can be cumbersome for some.',
      ],
    },
    {
      name: 'Strawberry',
      img: strawberryImage,
      calories: 33,
      proteins: 0.8,
      fats: 0.3,
      carbs: 8,
      description: 'Strawberries are sweet berries rich in Vitamin C, antioxidants, and dietary fiber.',
      advantages: [
        'Low calorie and high in Vitamin C.',
        'Rich in antioxidants, promoting skin health.',
      ],
      disadvantages: [
        'Highly perishable, requiring careful storage.',
        'May cause allergies in some individuals.',
      ],
    },
    {
      name: 'Mango',
      img: mangoImage,
      calories: 60,
      proteins: 0.8,
      fats: 0.4,
      carbs: 15,
      description: 'Mangoes are tropical fruits known for their sweetness and high Vitamin A content.',
      advantages: [
        'Rich in Vitamin A, supporting eye health.',
        'Good source of dietary fiber.',
      ],
      disadvantages: [
        'High in natural sugars, not ideal for diabetics.',
        'Can cause allergic reactions in sensitive individuals.',
      ],
    },
    {
      name: 'Watermelon',
      img: watermelonImage,
      calories: 30,
      proteins: 0.6,
      fats: 0.2,
      carbs: 8,
      description: 'Watermelon is a hydrating fruit, rich in water content and Vitamin C.',
      advantages: [
        'Extremely hydrating due to high water content.',
        'Low in calories, ideal for weight management.',
      ],
      disadvantages: [
        'May cause bloating if eaten in excess.',
        'Not very filling despite its size.',
      ],
    },
    {
      name: 'Pineapple',
      img: pineappleImage,
      calories: 50,
      proteins: 0.5,
      fats: 0.1,
      carbs: 13,
      description: 'Pineapples are tropical fruits with a tangy taste and rich in Vitamin C.',
      advantages: [
        'Rich in bromelain, which aids digestion.',
        'Good source of Vitamin C and manganese.',
      ],
      disadvantages: [
        'Acidity can irritate sensitive mouths.',
        'Difficult to peel and prepare.',
      ],
    },
    {
      name: 'Grapes',
      img: grapesImage,
      calories: 69,
      proteins: 0.6,
      fats: 0.2,
      carbs: 18,
      description: 'Grapes are small, sweet fruits packed with antioxidants and natural sugars.',
      advantages: [
        'Rich in antioxidants like resveratrol.',
        'Easy to snack on and highly versatile.',
      ],
      disadvantages: [
        'High in sugar, not ideal for diabetics.',
        'May cause digestive discomfort if overeaten.',
      ],
    },
    {
      name: 'Kiwi',
      img: kiwiImage,
      calories: 61,
      proteins: 1.1,
      fats: 0.5,
      carbs: 15,
      description: 'Kiwi is a tropical fruit rich in Vitamin C, fiber, and potassium.',
      advantages: [
        'High in Vitamin C, supporting immune function.',
        'Rich in fiber, promoting gut health.',
      ],
      disadvantages: [
        'Can be acidic, irritating sensitive stomachs.',
        'May cause allergic reactions in some individuals.',
      ],
    },
    {
      name: 'Papaya',
      img: papayaImage,
      calories: 43,
      proteins: 0.5,
      fats: 0.2,
      carbs: 11,
      description: 'Papaya is a tropical fruit known for its enzyme, papain, which aids digestion.',
      advantages: [
        'Rich in papain, which supports digestion.',
        'High in Vitamin C and antioxidants.',
      ],
      disadvantages: [
        'Overripe papaya may have a strong smell.',
        'Not everyone enjoys its unique flavor.',
      ],
    },
  ];

  return (
    <div className="fruits-page">
      <div className="fruits-container">
        <h2>Top Fruits</h2>

        {fruits.map((fruit, index) => (
          <div className="fruit-section" key={index}>
            <img src={fruit.img} alt={fruit.name} className="fruit-image" />
            <div className="fruit-description">
              <h3>{index + 1}. {fruit.name}</h3>
              <p>{fruit.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {fruit.calories} (g)</li>
                <li>Proteins: {fruit.proteins} (g)</li>
                <li>Fats: {fruit.fats} (g)</li>
                <li>Carbohydrates: {fruit.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {fruit.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {fruit.disadvantages.map((disadv, i) => (
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

export default Fruits;
