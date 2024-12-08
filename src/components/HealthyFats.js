import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/HealthyFats.css';
import avocadoImage from '../assets/avocado.jpg'; 
import oliveOilImage from '../assets/olive-oil.jpg'; 
import nutsImage from '../assets/nuts.jpg'; 
import seedsImage from '../assets/seeds.jpg'; 
import coconutOilImage from '../assets/coconut-oil.jpg'; 
import fattyFishImage from '../assets/fatty-fish.jpg'; 
import chiaSeedsImage from '../assets/chia-seeds.jpg'; 
import flaxseedsImage from '../assets/flaxseeds.jpg'; 
import darkChocolateImage from '../assets/dark-chocolate.jpg'; 
import almondButterImage from '../assets/almond-butter.jpg'; 

const HealthyFats = () => {
  const navigate = useNavigate();

  const healthyFats = [
    {
      name: 'Avocado',
      img: avocadoImage,
      calories: 160,
      proteins: 2,
      fats: 15,
      carbs: 9,
      description: 'Avocados are rich in heart-healthy monounsaturated fats and are a great source of vitamins and minerals.',
      advantages: [
        'Rich in monounsaturated fats that help reduce bad cholesterol.',
        'High in fiber, which supports digestion and weight management.',
        'Packed with potassium, supporting healthy blood pressure levels.',
      ],
      disadvantages: [
        'High in calories, so it should be consumed in moderation.',
        'Can be expensive depending on the region.',
      ],
    },
    {
      name: 'Olive Oil',
      img: oliveOilImage,
      calories: 119,
      proteins: 0,
      fats: 13.5,
      carbs: 0,
      description: 'Olive oil is a staple of the Mediterranean diet and is known for its anti-inflammatory properties.',
      advantages: [
        'High in monounsaturated fats, beneficial for heart health.',
        'Contains antioxidants that help reduce inflammation.',
        'Good for cooking at low to medium temperatures.',
      ],
      disadvantages: [
        'Should not be used for high-temperature cooking, as it can degrade.',
        'Relatively high in calories, so portion control is important.',
      ],
    },
    {
      name: 'Nuts',
      img: nutsImage,
      calories: 200,
      proteins: 5,
      fats: 18,
      carbs: 5,
      description: 'Nuts such as almonds, walnuts, and cashews are rich in healthy fats, fiber, and protein.',
      advantages: [
        'Packed with heart-healthy fats and protein, great for muscle building.',
        'Full of antioxidants that help protect against oxidative stress.',
        'Good source of vitamins and minerals like vitamin E and magnesium.',
      ],
      disadvantages: [
        'High in calories, so they should be eaten in moderation.',
        'Some nuts can be allergenic for certain individuals.',
      ],
    },
    {
      name: 'Seeds',
      img: seedsImage,
      calories: 150,
      proteins: 5,
      fats: 14,
      carbs: 4,
      description: 'Seeds such as chia, flax, and sunflower seeds are loaded with nutrients, including healthy fats and fiber.',
      advantages: [
        'Excellent source of omega-3 fatty acids, which are beneficial for heart health.',
        'High in fiber, which helps with digestion and weight management.',
        'Rich in plant-based protein, making them a great option for vegetarians and vegans.',
      ],
      disadvantages: [
        'Can cause digestive issues in some individuals if consumed in excess.',
        'High in calories, so moderation is key.',
      ],
    },
    {
      name: 'Coconut Oil',
      img: coconutOilImage,
      calories: 121,
      proteins: 0,
      fats: 14,
      carbs: 0,
      description: 'Coconut oil is a tropical oil known for its high saturated fat content, especially medium-chain triglycerides (MCTs).',
      advantages: [
        'Contains MCTs, which are quickly metabolized and used for energy.',
        'May support brain function and memory.',
        'Can be used in cooking or as a skin and hair moisturizer.',
      ],
      disadvantages: [
        'High in saturated fats, which may not be suitable for everyone.',
        'Should be used in moderation due to its high calorie content.',
      ],
    },
    {
      name: 'Fatty Fish',
      img: fattyFishImage,
      calories: 200,
      proteins: 20,
      fats: 13,
      carbs: 0,
      description: 'Fatty fish such as salmon, mackerel, and sardines are excellent sources of omega-3 fatty acids and protein.',
      advantages: [
        'Rich in omega-3 fatty acids, which are beneficial for heart health.',
        'Great source of high-quality protein, supporting muscle growth and repair.',
        'Contain vitamins D and B12, which are important for overall health.',
      ],
      disadvantages: [
        'Can be expensive, especially wild-caught options.',
        'Some varieties may contain mercury or other toxins.',
      ],
    },
    {
      name: 'Chia Seeds',
      img: chiaSeedsImage,
      calories: 138,
      proteins: 4,
      fats: 9,
      carbs: 12,
      description: 'Chia seeds are tiny, nutrient-dense seeds that are rich in omega-3 fatty acids, fiber, and protein.',
      advantages: [
        'Rich in omega-3s, fiber, and protein, supporting heart health and muscle recovery.',
        'Contain antioxidants that protect cells from oxidative damage.',
        'Great for making puddings, smoothies, or adding to baked goods.',
      ],
      disadvantages: [
        'Can be expensive compared to other seeds.',
        'May cause digestive discomfort in some people if consumed in excess.',
      ],
    },
    {
      name: 'Flaxseeds',
      img: flaxseedsImage,
      calories: 150,
      proteins: 5,
      fats: 12,
      carbs: 8,
      description: 'Flaxseeds are small seeds that are packed with healthy fats, fiber, and antioxidants.',
      advantages: [
        'Excellent source of omega-3 fatty acids and lignans, which have cancer-fighting properties.',
        'High in fiber, supporting digestive health.',
        'Great for adding to smoothies, oatmeal, or baking recipes.',
      ],
      disadvantages: [
        'Should be ground for better absorption of nutrients.',
        'Excessive consumption can cause digestive issues due to its high fiber content.',
      ],
    },
    {
      name: 'Dark Chocolate',
      img: darkChocolateImage,
      calories: 170,
      proteins: 2,
      fats: 12,
      carbs: 15,
      description: 'Dark chocolate is not only a delicious treat but also contains antioxidants and healthy fats.',
      advantages: [
        'Contains antioxidants, which help protect against free radicals.',
        'May improve brain function and heart health when consumed in moderation.',
        'Rich in magnesium and iron, supporting overall health.',
      ],
      disadvantages: [
        'High in calories and sugar, so it should be eaten in moderation.',
        'May cause digestive issues for some individuals, especially in large amounts.',
      ],
    },
    {
      name: 'Almond Butter',
      img: almondButterImage,
      calories: 190,
      proteins: 7,
      fats: 16,
      carbs: 6,
      description: 'Almond butter is a creamy spread made from almonds, offering a rich source of healthy fats and protein.',
      advantages: [
        'Rich in healthy monounsaturated fats, which help lower cholesterol.',
        'Good source of protein, supporting muscle and tissue repair.',
        'High in fiber, which helps regulate digestion.',
      ],
      disadvantages: [
        'Calorically dense, so should be consumed in moderation.',
        'Can be expensive compared to other nut butters.',
      ],
    },
  ];

  return (
    <div className="healthy-fats-page">
      <div className="healthy-fats-container">
        <h2>Top Healthy Fats</h2>

        {healthyFats.map((fat, index) => (
          <div className="healthy-fat-section" key={index}>
            <img src={fat.img} alt={fat.name} className="healthy-fat-image" />
            <div className="healthy-fat-description">
              <h3>{index + 1}. {fat.name}</h3>
              <p>{fat.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {fat.calories} (g)</li>
                <li>Proteins: {fat.proteins} (g)</li>
                <li>Fats: {fat.fats} (g)</li>
                <li>Carbohydrates: {fat.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {fat.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {fat.disadvantages.map((disadv, i) => (
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

export default HealthyFats;
