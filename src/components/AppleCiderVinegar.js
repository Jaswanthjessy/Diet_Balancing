// AppleCiderVinegar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AppleCiderVinegar.css';  // Assuming you have a CSS for Apple Cider Vinegar styles
import appleCiderVinegarImage from '../assets/apple-cider-vinegar.jpg';  // Replace with the actual image path
import organicACVImage from '../assets/organic-acv.jpg';  // Replace with the actual image path
import rawACVImage from '../assets/raw-acv.jpg';  // Replace with the actual image path
import filteredACVImage from '../assets/filtered-acv.jpg';  // Replace with the actual image path

const AppleCiderVinegar = () => {
  const navigate = useNavigate();

  const appleCiders = [
    {
      name: 'Apple Cider Vinegar',
      img: appleCiderVinegarImage,
      calories: 3,
      proteins: 0.0,
      fats: 0.0,
      carbs: 0.8,
      description: 'Apple cider vinegar is made from fermented apple juice and is known for its health benefits, including aiding digestion and promoting weight loss.',
      advantages: [
        'Helps improve digestion and gut health.',
        'May aid in weight loss by reducing appetite.',
        'Supports blood sugar control and lowers cholesterol levels.',
      ],
      disadvantages: [
        'Can be too acidic and may cause throat irritation if consumed undiluted.',
        'Excessive consumption can lead to digestive discomfort.',
      ],
    },
    {
      name: 'Organic Apple Cider Vinegar',
      img: organicACVImage,
      calories: 3,
      proteins: 0.0,
      fats: 0.0,
      carbs: 0.8,
      description: 'Organic apple cider vinegar is made from organically grown apples and is free from any chemicals or preservatives.',
      advantages: [
        'Rich in beneficial bacteria and enzymes that support digestion.',
        'No harmful chemicals or additives, making it a healthier option.',
        'Supports healthy skin and reduces acne breakouts.',
      ],
      disadvantages: [
        'Can be expensive compared to regular apple cider vinegar.',
        'May have a strong taste that some people find difficult to tolerate.',
      ],
    },
    {
      name: 'Raw Apple Cider Vinegar',
      img: rawACVImage,
      calories: 3,
      proteins: 0.0,
      fats: 0.0,
      carbs: 0.8,
      description: 'Raw apple cider vinegar is unfiltered and unpasteurized, containing "the mother," a colony of beneficial bacteria.',
      advantages: [
        'Contains beneficial probiotics that aid in digestion.',
        'Helps balance the body’s pH levels.',
        'May boost the immune system and reduce inflammation.',
      ],
      disadvantages: [
        'The strong taste may be off-putting to some.',
        'Not suitable for people with sensitive stomachs due to its acidity.',
      ],
    },
    {
      name: 'Filtered Apple Cider Vinegar',
      img: filteredACVImage,
      calories: 3,
      proteins: 0.0,
      fats: 0.0,
      carbs: 0.8,
      description: 'Filtered apple cider vinegar is processed to remove the "mother" and other impurities, resulting in a clear liquid.',
      advantages: [
        'Milder taste compared to raw ACV.',
        'Has a longer shelf life due to filtration.',
        'Ideal for culinary use as a flavor enhancer in recipes.',
      ],
      disadvantages: [
        'Lacks the beneficial probiotics found in raw apple cider vinegar.',
        'May not provide the same health benefits as unfiltered versions.',
      ],
    },
  ];

  return (
    <div className="apple-cider-vinegar-page">
      <div className="apple-cider-vinegar-container">
        <h2>Apple Cider Vinegar</h2>

        {appleCiders.map((appleCider, index) => (
          <div className="apple-cider-vinegar-section" key={index}>
            <img src={appleCider.img} alt={appleCider.name} className="apple-cider-vinegar-image" />
            <div className="apple-cider-vinegar-description">
              <h3>{index + 1}. {appleCider.name}</h3>
              <p>{appleCider.description}</p>
              <p><strong>Nutritional Information:</strong></p>
              <ul>
                <li>Calories: {appleCider.calories} (g)</li>
                <li>Proteins: {appleCider.proteins} (g)</li>
                <li>Fats: {appleCider.fats} (g)</li>
                <li>Carbohydrates: {appleCider.carbs} (g)</li>
              </ul>
              <h4>Advantages:</h4>
              <ul>
                {appleCider.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
              <h4>Disadvantages:</h4>
              <ul>
                {appleCider.disadvantages.map((disadv, i) => (
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

export default AppleCiderVinegar;
