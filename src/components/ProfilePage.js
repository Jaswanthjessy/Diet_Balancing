import React, { useState } from 'react';
import '../style/ProfilePage.css';
import AddDetailsModal from './AddDetailsModal'; // Import the modal
import MenImage from '../assets/men.jpg'; // Import the image

const ProfilePage = () => {
  // Example user data
  const [user, setUser] = useState({
    username: 'Kon',
    email: 'kon@gmail.com',
    weight: '70 kg',
    height: '175 cm',
    age: 30,
    gender: 'Male',
    bmi: '22.9', // Example BMI
    phone: '+1 234-567-8901',
    dietPreferences: 'Vegetarian',
    activityLevel: 'Moderate',
    allergies: 'None',
    bloodType: 'O+',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveDetails = (newDetails) => {
    setUser((prevUser) => ({ ...prevUser, ...newDetails }));
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Left side - Profile Image and Basic Info */}
        <div className="profile-left">
          <div className="profile-image-container">
            {/* Add the imported image here */}
            <img src={MenImage} alt="men" className="profile-image" />
          </div>
          <div className="profile-details">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>

        {/* Right side - Additional Info */}
        <div className="profile-right">
          <h2>Additional Details</h2>
          <div className="additional-details">
            <p><strong>Weight:</strong> {user.weight}</p>
            <p><strong>Height:</strong> {user.height}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>BMI:</strong> {user.bmi}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Diet Preferences:</strong> {user.dietPreferences}</p>
            <p><strong>Activity Level:</strong> {user.activityLevel}</p>
            <p><strong>Allergies:</strong> {user.allergies}</p>
            <p><strong>Blood Type:</strong> {user.bloodType}</p>
          </div>
          <button onClick={openModal} className="edit-details-btn">Edit Details</button>
        </div>

        {/* Logout Button */}
        <button className="profile-logout-btn">Logout</button>
      </div>

      {/* Modal for editing details */}
      <AddDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveDetails}
        user={user} // Pass the user data to the modal for pre-filling
      />
    </div>
  );
};

export default ProfilePage;
