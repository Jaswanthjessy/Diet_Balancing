// src/WholeGrains.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/WholeGrains.css';
import brownRiceImage from '../assets/brown-rice.jpg';
import quinoaImage from '../assets/quinoa.jpg';
import oatsImage from '../assets/oats.jpg';
import barleyImage from '../assets/barley.jpg';
import wholeWheatImage from '../assets/whole-wheat.jpg';
import buckwheatImage from '../assets/buckwheat.jpg';
import amaranthImage from '../assets/amaranth.jpg';
import speltImage from '../assets/spelt.jpg';
import farroImage from '../assets/farro.jpg';
import teffImage from '../assets/teff.jpg';

const WholeGrains = () => {
  const navigate = useNavigate();

  const wholeGrains = [
    {
      name: 'Brown Rice',
      img: brownRiceImage,
      calories: 215,
      proteins: 5,
      fats: 1.8,
      carbohydrates: 45,
      description: 'Brown rice is a whole grain that retains its bran, providing more fiber and nutrients.',
      advantages: [
        'Rich in fiber, promoting digestive health.',
        'Good source of magnesium and other minerals.',
      ],
      disadvantages: [
        'Takes longer to cook than white rice.',
        'May be harder to digest for some people.',
      ],
    },
    {
      name: 'Quinoa',
      img: quinoaImage,
      calories: 120,
      proteins: 4,
      fats: 1.9,
      carbohydrates: 21,
      description: 'Quinoa is a complete protein, providing all nine essential amino acids.',
      advantages: [
        'Complete protein source, rich in amino acids.',
        'High in fiber and magnesium.',
      ],
      disadvantages: [
        'Can be expensive compared to other grains.',
        'Some people may have trouble digesting saponins.',
      ],
    },
    {
      name: 'Oats',
      img: oatsImage,
      calories: 68,
      proteins: 2.4,
      fats: 1.4,
      carbohydrates: 12,
      description: 'Oats are a whole grain known for their heart health benefits, particularly in lowering cholesterol.',
      advantages: [
        'Rich in soluble fiber, promoting heart health.',
        'Good source of antioxidants and B vitamins.',
      ],
      disadvantages: [
        'May cause bloating in sensitive individuals.',
        'Can be high in carbs for those following low-carb diets.',
      ],
    },
    {
      name: 'Barley',
      img: barleyImage,
      calories: 193,
      proteins: 3.5,
      fats: 1.1,
      carbohydrates: 44,
      description: 'Barley is a versatile whole grain known for its high fiber content, supporting digestive health.',
      advantages: [
        'High in fiber, aiding digestion.',
        'Rich in selenium and antioxidants.',
      ],
      disadvantages: [
        'Takes a long time to cook.',
        'Not gluten-free, which is a concern for some individuals.',
      ],
    },
    {
      name: 'Whole Wheat',
      img: wholeWheatImage,
      calories: 174,
      proteins: 6,
      fats: 0.9,
      carbohydrates: 36,
      description: 'Whole wheat contains all parts of the grain, providing more fiber and nutrients than refined wheat.',
      advantages: [
        'Good source of fiber and B vitamins.',
        'Helps regulate blood sugar levels.',
      ],
      disadvantages: [
        'May be difficult for people with gluten intolerance.',
        'Can be higher in calories than refined wheat products.',
      ],
    },
    {
      name: 'Buckwheat',
      img: buckwheatImage,
      calories: 155,
      proteins: 5,
      fats: 1.5,
      carbohydrates: 33,
      description: 'Buckwheat is a nutrient-dense whole grain, gluten-free, and rich in antioxidants.',
      advantages: [
        'Rich in antioxidants and anti-inflammatory properties.',
        'Good source of protein and fiber.',
      ],
      disadvantages: [
        'Can have a strong, earthy taste.',
        'Not suitable for those with a buckwheat allergy.',
      ],
    },
    {
      name: 'Amaranth',
      img: amaranthImage,
      calories: 251,
      proteins: 9.3,
      fats: 4.6,
      carbohydrates: 46,
      description: 'Amaranth is a gluten-free grain that is high in protein, fiber, and micronutrients.',
      advantages: [
        'High in protein and fiber, promoting digestive health.',
        'Rich in iron, magnesium, and other essential minerals.',
      ],
      disadvantages: [
        'Has a distinctive flavor that may not appeal to everyone.',
        'Can be harder to find in stores.',
      ],
    },
    {
      name: 'Spelt',
      img: speltImage,
      calories: 174,
      proteins: 6,
      fats: 1.5,
      carbohydrates: 36,
      description: 'Spelt is an ancient grain, rich in fiber and protein, offering a nutty flavor.',
      advantages: [
        'Good source of fiber and protein.',
        'Rich in vitamins and minerals, such as B vitamins.',
      ],
      disadvantages: [
        'Contains gluten, not suitable for those with gluten intolerance.',
        'Can be expensive compared to other grains.',
      ],
    },
    {
      name: 'Farro',
      img: farroImage,
      calories: 200,
      proteins: 7,
      fats: 1.5,
      carbohydrates: 40,
      description: 'Farro is a whole grain with a chewy texture, packed with fiber and protein.',
      advantages: [
        'High in protein and fiber.',
        'Rich in antioxidants and essential minerals.',
      ],
      disadvantages: [
        'Takes a long time to cook.',
        'Contains gluten, unsuitable for gluten-free diets.',
      ],
    },
    {
      name: 'Teff',
      img: teffImage,
      calories: 255,
      proteins: 10,
      fats: 2.2,
      carbohydrates: 50,
      description: 'Teff is a tiny, nutrient-dense grain, packed with protein, fiber, and calcium.',
      advantages: [
        'High in protein and fiber, promoting heart and digestive health.',
        'Rich in calcium, helping bone health.',
      ],
      disadvantages: [
        'Can be expensive and difficult to find.',
        'May be hard to incorporate into certain dishes.',
      ],
    },
  ];

  return (
    <div className="whole-grains-page">
      <div className="whole-grains-container">
        <h2>Top Whole Grains</h2>

        {wholeGrains.map((grain, index) => (
          <div className="whole-grain-section" key={index}>
            <img src={grain.img} alt={grain.name} className="whole-grain-image" />
            <div className="whole-grain-description">
              <h3>{index + 1}. {grain.name}</h3>
              <p>{grain.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {grain.calories} kcal</li>
                <li>Proteins: {grain.proteins} g</li>
                <li>Fats: {grain.fats} g</li>
                <li>Carbohydrates: {grain.carbohydrates} g</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {grain.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {grain.disadvantages.map((disadv, i) => (
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

export default WholeGrains;
