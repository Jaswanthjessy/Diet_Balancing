// RedMeats.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/RedMeats.css';  // Assuming you have a CSS for Red Meats styles
import beefImage from '../assets/beef.jpg';  // Replace with actual image path
import lambImage from '../assets/lamb.jpg';  // Replace with actual image path
import porkImage from '../assets/pork.jpg';  // Replace with actual image path
import venisonImage from '../assets/venison.jpg';  // Replace with actual image path
import bisonImage from '../assets/bison.jpg';  // Replace with actual image path
import muttonImage from '../assets/mutton.jpg';  // Replace with actual image path
import goatImage from '../assets/goat.jpg';  // Replace with actual image path

const RedMeats = () => {
  const navigate = useNavigate();

  const redMeats = [
    {
      name: 'Beef',
      img: beefImage,
      calories: 250,
      proteins: 26,
      fats: 17,
      carbs: 0,
      description: 'Beef is rich in protein and essential nutrients like iron, zinc, and vitamin B12. It is commonly consumed grilled, roasted, or stewed.',
      advantages: [
        'High in protein, which supports muscle growth and repair.',
        'Rich in iron, supporting healthy red blood cells.',
        'Contains B-vitamins that are important for metabolism.',
      ],
      disadvantages: [
        'High in saturated fats, which may contribute to heart disease if consumed in excess.',
        'Can be tough if not cooked properly.',
      ],
    },
    {
      name: 'Lamb',
      img: lambImage,
      calories: 294,
      proteins: 25,
      fats: 21,
      carbs: 0,
      description: 'Lamb is tender meat with a distinct flavor, commonly roasted or grilled. It is a good source of high-quality protein and essential nutrients.',
      advantages: [
        'Rich in high-quality protein that helps in muscle building.',
        'Contains zinc and iron, which are vital for immune health.',
        'Good source of B-vitamins that support metabolism.',
      ],
      disadvantages: [
        'High in fat, especially saturated fat.',
        'May have a strong flavor that some people don’t like.',
      ],
    },
    {
      name: 'Pork',
      img: porkImage,
      calories: 242,
      proteins: 27,
      fats: 14,
      carbs: 0,
      description: 'Pork is a versatile meat that can be used in many dishes. It is high in protein and provides a rich source of essential vitamins and minerals.',
      advantages: [
        'Great source of protein and essential amino acids.',
        'Contains B-vitamins like thiamine and niacin, which support metabolism.',
        'Good source of selenium and zinc.',
      ],
      disadvantages: [
        'High in fat, especially in processed pork products.',
        'May cause digestive discomfort for some individuals.',
      ],
    },
    {
      name: 'Venison',
      img: venisonImage,
      calories: 158,
      proteins: 30,
      fats: 5,
      carbs: 0,
      description: 'Venison is leaner than most other red meats and is a good source of protein and minerals. It is commonly grilled, roasted, or stewed.',
      advantages: [
        'Low in fat, making it a healthier red meat option.',
        'High in protein, promoting muscle growth and recovery.',
        'Rich in iron and B-vitamins for energy and metabolism.',
      ],
      disadvantages: [
        'Can be tougher than other meats if not cooked properly.',
        'May be difficult to find in some areas.',
      ],
    },
    {
      name: 'Bison',
      img: bisonImage,
      calories: 143,
      proteins: 26,
      fats: 7,
      carbs: 0,
      description: 'Bison is leaner than beef and offers a slightly sweeter taste. It is rich in protein and essential nutrients and is usually grilled, roasted, or made into burgers.',
      advantages: [
        'Low in fat compared to beef, making it a leaner choice.',
        'Rich in iron, zinc, and B-vitamins.',
        'Good source of high-quality protein for muscle growth.',
      ],
      disadvantages: [
        'Can be more expensive than beef.',
        'May not be as widely available as other meats.',
      ],
    },
    {
      name: 'Mutton',
      img: muttonImage,
      calories: 294,
      proteins: 25,
      fats: 21,
      carbs: 0,
      description: 'Mutton is meat from mature sheep, typically tougher and fattier than lamb. It is often stewed or slow-cooked to make it tender.',
      advantages: [
        'High in protein and essential nutrients like iron.',
        'Rich in omega-3 fatty acids, which support heart health.',
        'Contains B-vitamins that promote energy production.',
      ],
      disadvantages: [
        'Tougher and fattier than lamb, requiring slow cooking.',
        'High in saturated fats, which can raise cholesterol levels if over-consumed.',
      ],
    },
    {
      name: 'Goat',
      img: goatImage,
      calories: 143,
      proteins: 27,
      fats: 3,
      carbs: 0,
      description: 'Goat meat is lean and rich in protein. It is widely consumed around the world, often grilled, roasted, or used in stews.',
      advantages: [
        'Low in fat and high in protein, making it a healthy meat option.',
        'Rich in essential minerals like iron and potassium.',
        'Contains fewer calories than most other red meats.',
      ],
      disadvantages: [
        'Can be tougher than beef and may require special preparation.',
        'Not as widely available as other meats in some regions.',
      ],
    },
  ];

  return (
    <div className="red-meats-page">
      <div className="red-meats-container">
        <h2>Red Meats</h2>

        {redMeats.map((meat, index) => (
          <div className="red-meat-section" key={index}>
            <img src={meat.img} alt={meat.name} className="red-meat-image" onClick={() => navigate(`/red-meats/${meat.name.toLowerCase()}`)} />
            <div className="red-meat-description">
              <h3>{index + 1}. {meat.name}</h3>
              <p>{meat.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {meat.calories} (g)</li>
                <li>Proteins: {meat.proteins} (g)</li>
                <li>Fats: {meat.fats} (g)</li>
                <li>Carbohydrates: {meat.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {meat.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {meat.disadvantages.map((disadv, i) => (
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

export default RedMeats;
