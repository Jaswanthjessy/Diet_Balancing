// WholeMilk.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/WholeMilk.css';  // Assuming you have a CSS for Whole Milk styles
import wholeMilkImage from '../assets/whole-milk.jpg';  // Replace with the actual image path
import almondMilkImage from '../assets/almond-milk.jpg';  // Replace with the actual image path
import soyMilkImage from '../assets/soy-milk.jpg';  // Replace with the actual image path
import oatMilkImage from '../assets/oat-milk.jpg';  // Replace with the actual image path
import riceMilkImage from '../assets/rice-milk.jpg';  // Replace with the actual image path
import coconutMilkImage from '../assets/coconut-milk.jpg';  // Replace with the actual image path
import cashewMilkImage from '../assets/cashew-milk.jpg';  // Replace with the actual image path
import goatMilkImage from '../assets/goat-milk.jpg';  // Replace with the actual image path

const WholeMilk = () => {
  const navigate = useNavigate();

  const milkTypes = [
    {
      name: 'Whole Milk',
      img: wholeMilkImage,
      calories: 150,
      proteins: 8.0,
      fats: 8.0,
      carbs: 12.0,
      description: 'Whole milk is a good source of protein, calcium, and various vitamins. It provides a creamy texture and rich flavor, making it a popular choice for various dishes.',
      advantages: [
        'Rich in calcium for bone health.',
        'Contains high-quality protein for muscle growth.',
        'Provides a good amount of vitamins A, D, and B12.',
      ],
      disadvantages: [
        'Higher in fat compared to other milk options.',
        'Can be hard to digest for lactose-intolerant individuals.',
      ],
    },
    {
      name: 'Almond Milk',
      img: almondMilkImage,
      calories: 60,
      proteins: 1.0,
      fats: 2.5,
      carbs: 8.0,
      description: 'Almond milk is a dairy-free, plant-based milk made from almonds. It is lower in calories and fat than cow\'s milk and is often fortified with vitamins and minerals.',
      advantages: [
        'Low in calories and fat.',
        'Lactose-free, suitable for lactose-intolerant individuals.',
        'Rich in vitamin E, which is beneficial for skin health.',
      ],
      disadvantages: [
        'Low in protein compared to cow\'s milk.',
        'Some almond milks may contain added sugars.',
      ],
    },
    {
      name: 'Soy Milk',
      img: soyMilkImage,
      calories: 100,
      proteins: 7.0,
      fats: 4.0,
      carbs: 6.0,
      description: 'Soy milk is made from soybeans and is one of the most popular plant-based milk alternatives. It is rich in protein and offers a creamy texture similar to whole milk.',
      advantages: [
        'High in protein, similar to cow\'s milk.',
        'Good source of calcium and vitamin D when fortified.',
        'Low in saturated fat and cholesterol-free.',
      ],
      disadvantages: [
        'May have a beany or nutty flavor that some find unappealing.',
        'Contains phytoestrogens, which can affect hormone levels in sensitive individuals.',
      ],
    },
    {
      name: 'Oat Milk',
      img: oatMilkImage,
      calories: 120,
      proteins: 3.0,
      fats: 5.0,
      carbs: 16.0,
      description: 'Oat milk is a creamy, naturally sweet plant-based milk made from oats. It has gained popularity due to its mild flavor and sustainable production.',
      advantages: [
        'Good source of fiber.',
        'Naturally sweet, no added sugars needed.',
        'Dairy-free and lactose-free.',
      ],
      disadvantages: [
        'Higher in carbs compared to other milk alternatives.',
        'Can be higher in calories if sweetened.',
      ],
    },
    {
      name: 'Rice Milk',
      img: riceMilkImage,
      calories: 120,
      proteins: 0.5,
      fats: 2.0,
      carbs: 23.0,
      description: 'Rice milk is made from milled rice and water. It is a popular dairy alternative for those with allergies to soy or nuts.',
      advantages: [
        'Hypoallergenic, suitable for those with nut or soy allergies.',
        'Low in fat.',
        'Naturally sweet without added sugars.',
      ],
      disadvantages: [
        'Very low in protein.',
        'May contain added sugar in some brands.',
      ],
    },
    {
      name: 'Coconut Milk',
      img: coconutMilkImage,
      calories: 90,
      proteins: 0.5,
      fats: 4.5,
      carbs: 6.0,
      description: 'Coconut milk is made from the flesh of coconuts and is commonly used in cooking and baking. It is rich and creamy.',
      advantages: [
        'Dairy-free and lactose-free.',
        'Rich in medium-chain triglycerides (MCTs) that can boost metabolism.',
        'Good for cooking due to its creamy texture.',
      ],
      disadvantages: [
        'Low in protein.',
        'Can be high in saturated fat.',
      ],
    },
    {
      name: 'Cashew Milk',
      img: cashewMilkImage,
      calories: 25,
      proteins: 0.5,
      fats: 2.0,
      carbs: 1.0,
      description: 'Cashew milk is a creamy, plant-based milk made from cashews. It is lower in calories than cow\'s milk and often fortified with vitamins and minerals.',
      advantages: [
        'Low in calories.',
        'Lactose-free and suitable for lactose-intolerant individuals.',
        'Rich in magnesium, which supports bone health.',
      ],
      disadvantages: [
        'Low in protein.',
        'May contain added sugars in some varieties.',
      ],
    },
    {
      name: 'Goat\'s Milk',
      img: goatMilkImage,
      calories: 168,
      proteins: 8.7,
      fats: 10.0,
      carbs: 11.0,
      description: 'Goat\'s milk is an alternative to cow\'s milk and is easier to digest for some individuals due to its different protein structure.',
      advantages: [
        'Easier to digest than cow\'s milk.',
        'Rich in calcium and vitamins.',
        'Good source of protein.',
      ],
      disadvantages: [
        'Higher in fat than cow\'s milk.',
        'Can have a strong flavor that some find unpleasant.',
      ],
    },
  ];

  return (
    <div className="whole-milk-page">
      <div className="whole-milk-container">
        <h2>Milk Types and Alternatives</h2>

        {milkTypes.map((milk, index) => (
          <div className="milk-section" key={index}>
            <img src={milk.img} alt={milk.name} className="milk-image" />
            <div className="milk-description">
              <h3>{index + 1}. {milk.name}</h3>
              <p>{milk.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {milk.calories} (ml)</li>
                <li>Proteins: {milk.proteins} (g)</li>
                <li>Fats: {milk.fats} (g)</li>
                <li>Carbohydrates: {milk.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {milk.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {milk.disadvantages.map((disadv, i) => (
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

export default WholeMilk;
