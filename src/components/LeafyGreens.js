import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LeafyGreens.css';
import spinachImage from '../assets/spinach.jpg'; 
import kaleImage from '../assets/kale.jpg'; 
import collardGreensImage from '../assets/collard-greens.jpg'; 
import arugulaImage from '../assets/arugula.jpg'; 
import swissChardImage from '../assets/swiss-chard.jpg'; 
import romaineLettuceImage from '../assets/romaine-lettuce.jpg'; 
import beetGreensImage from '../assets/beet-greens.jpg'; 
import watercressImage from '../assets/watercress.jpg'; 
import bokChoyImage from '../assets/bok-choy.jpg'; 
import mustardGreensImage from '../assets/mustard-greens.jpg'; 

const LeafyGreens = () => {
  const navigate = useNavigate();

  const leafyGreens = [
    {
      name: 'Spinach',
      img: spinachImage,
      calories: 23,
      proteins: 2.9,
      fats: 0.4,
      carbs: 3.6,
      description: 'Spinach is a leafy green vegetable that is rich in vitamins and minerals, particularly Vitamin K, A, and C.',
      advantages: [
        'High in iron and calcium, promoting healthy bones and preventing anemia.',
        'Loaded with antioxidants, which may reduce inflammation.',
        'Contains folate, essential for DNA repair and cellular function.',
      ],
      disadvantages: [
        'Contains oxalates, which can contribute to kidney stones in some individuals.',
        'May interfere with blood thinners due to its high Vitamin K content.',
      ],
    },
    {
      name: 'Kale',
      img: kaleImage,
      calories: 35,
      proteins: 2.9,
      fats: 1.5,
      carbs: 4.4,
      description: 'Kale is a superfood packed with vitamins, minerals, and antioxidants, making it a popular choice for healthy eating.',
      advantages: [
        'Extremely nutrient-dense, packed with vitamins A, K, and C.',
        'May help lower cholesterol levels and support heart health.',
        'Rich in antioxidants like quercetin and kaempferol, which have anti-inflammatory properties.',
      ],
      disadvantages: [
        'Contains goitrogens, which may interfere with thyroid function.',
        'Raw kale can be tough to digest and may cause digestive discomfort.',
      ],
    },
    {
      name: 'Collard Greens',
      img: collardGreensImage,
      calories: 32,
      proteins: 3.0,
      fats: 0.6,
      carbs: 7.0,
      description: 'Collard greens are a type of leafy green vegetable known for their high fiber content and rich nutrients.',
      advantages: [
        'Rich in fiber, which supports digestive health.',
        'High levels of Vitamin A, supporting eye health.',
        'Good source of calcium, essential for bone health.',
      ],
      disadvantages: [
        'May cause gas and bloating due to its high fiber content.',
        'Contains goitrogens that may affect thyroid health.',
      ],
    },
    {
      name: 'Arugula',
      img: arugulaImage,
      calories: 25,
      proteins: 2.6,
      fats: 0.7,
      carbs: 3.7,
      description: 'Arugula is a peppery leafy green that adds a unique flavor to salads and dishes, rich in vitamins and minerals.',
      advantages: [
        'Low in calories but packed with vitamins A and K.',
        'Has a peppery flavor that adds variety to salads.',
        'Contains glucosinolates, which may help protect against cancer.',
      ],
      disadvantages: [
        'Can be too bitter for some palates, especially if eaten raw.',
        'May not be suitable for people on blood thinners due to high Vitamin K content.',
      ],
    },
    {
      name: 'Swiss Chard',
      img: swissChardImage,
      calories: 19,
      proteins: 1.8,
      fats: 0.2,
      carbs: 3.7,
      description: 'Swiss chard is a colorful leafy green known for its vibrant stems and high nutritional value, especially in vitamins and minerals.',
      advantages: [
        'Rich in magnesium, supporting muscle and nerve function.',
        'Good source of iron and Vitamin C, helping boost immunity.',
        'Low in calories and high in fiber, making it ideal for weight loss diets.',
      ],
      disadvantages: [
        'Contains oxalates, which can contribute to kidney stone formation.',
        'Large amounts of Swiss chard can be tough to digest and may cause bloating.',
      ],
    },
    {
      name: 'Romaine Lettuce',
      img: romaineLettuceImage,
      calories: 15,
      proteins: 1.2,
      fats: 0.2,
      carbs: 2.8,
      description: 'Romaine lettuce is a popular salad green known for its crisp texture and nutritional benefits, especially hydrating properties.',
      advantages: [
        'Rich in water and low in calories, making it hydrating.',
        'Good source of Vitamin C and potassium, supporting heart health.',
      ],
      disadvantages: [
        'Lower in nutrient density compared to other leafy greens like spinach and kale.',
      ],
    },
    {
      name: 'Beet Greens',
      img: beetGreensImage,
      calories: 22,
      proteins: 2.2,
      fats: 0.2,
      carbs: 4.0,
      description: 'Beet greens are the leafy tops of beetroot, rich in nutrients and can be used in salads or cooked dishes.',
      advantages: [
        'Excellent source of Vitamin K and calcium, supporting bone health.',
        'High in fiber, supporting digestion.',
      ],
      disadvantages: [
        'Can be slightly bitter when eaten raw, requiring preparation.',
      ],
    },
    {
      name: 'Watercress',
      img: watercressImage,
      calories: 11,
      proteins: 1.3,
      fats: 0.1,
      carbs: 1.3,
      description: 'Watercress is a nutrient-rich aquatic plant known for its peppery flavor and high antioxidant content.',
      advantages: [
        'Contains more Vitamin C than oranges, boosting the immune system.',
        'Low in calories but packed with nutrients.',
      ],
      disadvantages: [
        'Has a strong, peppery taste that may not be suitable for everyone.',
      ],
    },
    {
      name: 'Bok Choy',
      img: bokChoyImage,
      calories: 13,
      proteins: 1.5,
      fats: 0.2,
      carbs: 2.2,
      description: 'Bok choy is a Chinese cabbage with a mild flavor, rich in vitamins and minerals, and great for stir-fries.',
      advantages: [
        'Rich in vitamins A and C, supporting immune function.',
        'Low in calories and great for stir-fries.',
      ],
      disadvantages: [
        'May interfere with thyroid function in people sensitive to goitrogens.',
      ],
    },
    {
      name: 'Mustard Greens',
      img: mustardGreensImage,
      calories: 27,
      proteins: 2.7,
      fats: 0.4,
      carbs: 5.2,
      description: 'Mustard greens are a spicy leafy green that provides a robust flavor and numerous health benefits.',
      advantages: [
        'Contains powerful antioxidants like flavonoids and beta carotene.',
        'Great for detoxifying the liver.',
      ],
      disadvantages: [
        'Has a strong, spicy flavor that may not be suitable for all palates.',
      ],
    },
  ];

  return (
    <div className="leafy-greens-page">
      <div className="leafy-greens-container">
        <h2>Top Leafy Greens</h2>

        {leafyGreens.map((green, index) => (
          <div className="leafy-green-section" key={index}>
            <img src={green.img} alt={green.name} className="leafy-green-image" />
            <div className="leafy-green-description">
              <h3>{index + 1}. {green.name}</h3>
              <p>{green.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {green.calories} (g)</li>
                <li>Proteins: {green.proteins} (g)</li>
                <li>Fats: {green.fats} (g)</li>
                <li>Carbohydrates: {green.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {green.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {green.disadvantages.map((disadv, i) => (
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

export default LeafyGreens;
