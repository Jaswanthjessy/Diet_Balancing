import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LeanProteins.css';
import chickenImage from '../assets/chicken.jpg';
import turkeyImage from '../assets/turkey.jpg';
import fishImage from '../assets/fish.jpg';
import tofuImage from '../assets/tofu.jpg';
import lentilsImage from '../assets/lentils.jpg';
import chickpeasImage from '../assets/chickpeas.jpg';
import quinoaImage from '../assets/quinoa.jpg';
import greekYogurtImage from '../assets/greek-yogurt.jpg';
import eggsImage from '../assets/eggs.jpg';
import cottageCheeseImage from '../assets/cottage-cheese.jpg';

const LeanProteins = () => {
  const navigate = useNavigate();

  const leanProteins = [
    {
      name: 'Chicken Breast',
      img: chickenImage,
      calories: 165,
      proteins: 31,
      fats: 3.6,
      carbohydrates: 0,
      description: 'Chicken breast is a lean protein source, rich in nutrients and low in fat.',
      advantages: [
        'High in protein, low in fat, making it great for muscle building.',
        'Versatile and can be cooked in various ways.',
      ],
      disadvantages: [
        'Can be dry if overcooked.',
        'Skin contains higher fat, which some may want to avoid.',
      ],
    },
    {
      name: 'Turkey',
      img: turkeyImage,
      calories: 135,
      proteins: 30,
      fats: 1.7,
      carbohydrates: 0,
      description: 'Turkey is a lean protein source, rich in nutrients and lower in fat compared to red meat.',
      advantages: [
        'Leaner than red meat, rich in protein.',
        'Contains B vitamins that support metabolism.',
      ],
      disadvantages: [
        'Can be tough if not cooked properly.',
        'Some processed turkey products can be high in sodium.',
      ],
    },
    {
      name: 'Fish (e.g., Salmon, Tuna)',
      img: fishImage,
      calories: 206,
      proteins: 22,
      fats: 12,
      carbohydrates: 0,
      description: 'Fish is an excellent source of protein and omega-3 fatty acids, promoting heart health.',
      advantages: [
        'High in omega-3 fatty acids, promoting heart health.',
        'Excellent source of protein with essential nutrients.',
      ],
      disadvantages: [
        'Some fish may contain mercury; choose wisely.',
        'Can be expensive compared to other protein sources.',
      ],
    },
    {
      name: 'Tofu',
      img: tofuImage,
      calories: 70,
      proteins: 8,
      fats: 4,
      carbohydrates: 2,
      description: 'Tofu is a great plant-based protein source, low in calories and rich in essential amino acids.',
      advantages: [
        'Great plant-based protein source for vegetarians/vegans.',
        'Contains all essential amino acids and is low in calories.',
      ],
      disadvantages: [
        'Texture can be off-putting for some.',
        'May cause digestive issues in large amounts.',
      ],
    },
    {
      name: 'Lentils',
      img: lentilsImage,
      calories: 116,
      proteins: 9,
      fats: 0.4,
      carbohydrates: 20,
      description: 'Lentils are a high-fiber, high-protein legume, great for digestive health and satiety.',
      advantages: [
        'High in fiber, promoting digestive health.',
        'Packed with protein and low in fat.',
      ],
      disadvantages: [
        'May cause gas or bloating in some individuals.',
        'Requires cooking time, which may be inconvenient.',
      ],
    },
    {
      name: 'Chickpeas',
      img: chickpeasImage,
      calories: 164,
      proteins: 9,
      fats: 2.6,
      carbohydrates: 27,
      description: 'Chickpeas are a versatile legume, rich in protein and fiber, great for salads and various dishes.',
      advantages: [
        'Rich in protein and fiber, great for satiety.',
        'Versatile in cooking; can be added to salads, soups, and more.',
      ],
      disadvantages: [
        'May cause digestive discomfort for some.',
        'Can be high in calories if consumed in large quantities.',
      ],
    },
    {
      name: 'Quinoa',
      img: quinoaImage,
      calories: 120,
      proteins: 4,
      fats: 1.9,
      carbohydrates: 21,
      description: 'Quinoa is a complete protein source, containing all nine essential amino acids, and is high in fiber and minerals.',
      advantages: [
        'Complete protein source, containing all nine essential amino acids.',
        'High in fiber and minerals like magnesium and phosphorus.',
      ],
      disadvantages: [
        'Can be pricey compared to other grains.',
        'Some may have difficulty digesting saponins present on the surface.',
      ],
    },
    {
      name: 'Greek Yogurt',
      img: greekYogurtImage,
      calories: 100,
      proteins: 10,
      fats: 0,
      carbohydrates: 6,
      description: 'Greek yogurt is a high-protein dairy product, rich in probiotics and calcium, supporting gut health and bone health.',
      advantages: [
        'High in protein and probiotics, promoting gut health.',
        'Versatile; can be used in smoothies, dressings, and desserts.',
      ],
      disadvantages: [
        'Some varieties can be high in sugar.',
        'Dairy may not be suitable for those with lactose intolerance.',
      ],
    },
    {
      name: 'Eggs',
      img: eggsImage,
      calories: 68,
      proteins: 6,
      fats: 4.8,
      carbohydrates: 0.6,
      description: 'Eggs are an excellent source of high-quality protein and essential nutrients, supporting overall health.',
      advantages: [
        'Excellent source of high-quality protein and essential nutrients.',
        'Versatile and can be prepared in various ways.',
      ],
      disadvantages: [
        'High in cholesterol; moderation may be needed for some.',
        'May cause allergic reactions in some individuals.',
      ],
    },
    {
      name: 'Cottage Cheese',
      img: cottageCheeseImage,
      calories: 206,
      proteins: 28,
      fats: 9,
      carbohydrates: 6,
      description: 'Cottage cheese is a high-protein dairy product, rich in calcium and probiotics, supporting muscle growth and gut health.',
      advantages: [
        'High in protein and low in fat, making it ideal for weight loss.',
        'Contains calcium, promoting bone health.',
      ],
      disadvantages: [
        'Some may find the texture unappealing.',
        'May contain added sodium in some varieties.',
      ],
    },
  ];

  return (
    <div className="lean-proteins-page">
      <div className="lean-proteins-container">
        <h2>Top Lean Proteins</h2>

        {leanProteins.map((protein, index) => (
          <div className="lean-protein-section" key={index}>
            <img src={protein.img} alt={protein.name} className="lean-protein-image" />
            <div className="lean-protein-description">
              <h3>{index + 1}. {protein.name}</h3>
              <p>{protein.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {protein.calories} kcal</li>
                <li>Proteins: {protein.proteins} g</li>
                <li>Fats: {protein.fats} g</li>
                <li>Carbohydrates: {protein.carbohydrates} g</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {protein.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {protein.disadvantages.map((disadv, i) => (
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

export default LeanProteins;