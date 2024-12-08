import React, { useState, useEffect } from 'react';
import '../style/AddDetailsModal.css';

const AddDetailsModal = ({ isOpen, onClose, onSave, user }) => {
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [bmi, setBmi] = useState(user.bmi);
  const [phone, setPhone] = useState(user.phone);
  const [dietPreferences, setDietPreferences] = useState(user.dietPreferences);
  const [activityLevel, setActivityLevel] = useState(user.activityLevel);
  const [allergies, setAllergies] = useState(user.allergies);
  const [bloodType, setBloodType] = useState(user.bloodType);

  // Update form fields whenever the user data changes
  useEffect(() => {
    setWeight(user.weight);
    setHeight(user.height);
    setAge(user.age);
    setGender(user.gender);
    setBmi(user.bmi);
    setPhone(user.phone);
    setDietPreferences(user.dietPreferences);
    setActivityLevel(user.activityLevel);
    setAllergies(user.allergies);
    setBloodType(user.bloodType);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height && age && gender && bmi && phone && dietPreferences && activityLevel && bloodType) {
      // Save the new details (this can be extended to save to a server or context)
      onSave({
        weight,
        height,
        age,
        gender,
        bmi,
        phone,
        dietPreferences,
        activityLevel,
        allergies,
        bloodType,
      });
      onClose(); // Close the modal after saving
    } else {
      alert('Please fill in all the required fields!');
    }
  };

  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Additional Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input
              id="gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bmi">BMI:</label>
            <input
              id="bmi"
              type="text"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dietPreferences">Diet Preferences:</label>
            <input
              id="dietPreferences"
              type="text"
              value={dietPreferences}
              onChange={(e) => setDietPreferences(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="activityLevel">Activity Level:</label>
            <input
              id="activityLevel"
              type="text"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="allergies">Allergies:</label>
            <input
              id="allergies"
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodType">Blood Type:</label>
            <input
              id="bloodType"
              type="text"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDetailsModal;
