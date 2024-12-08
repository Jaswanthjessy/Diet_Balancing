import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Sub.css"; // Importing the CSS file

const Sub = () => {
    const navigate = useNavigate();

    const handleSubscription = (plan) => {
        alert(`You selected the ${plan} plan.`);
        // Navigate to the card details page
        navigate("/card-details", { state: { plan } });
    };

    return (
        <div className="subscription-container">
            <h1 className="subscription-header">Choose Your Subscription</h1>
            <div className="subscription-plans">
                {/* Free Plan */}
                <div className="plan free-plan">
                    <h2>Free Plan</h2>
                    <p>₹0 / month</p>
                    <ul>
                        <li>Basic Diet Plan</li>
                        <li>Access to Leafy Greens Info</li>
                        <li>Email Support</li>
                    </ul>
                    <button onClick={() => handleSubscription("Free")} className="plan-button">
                        Select
                    </button>
                </div>

                {/* Paid Plan 1 */}
                <div className="plan paid-plan">
                    <h2>Standard Plan</h2>
                    <p>₹499 / month</p>
                    <ul>
                        <li>Personalized Diet Plans</li>
                        <li>Weekly Progress Tracking</li>
                        <li>Priority Email Support</li>
                    </ul>
                    <button onClick={() => handleSubscription("Standard")} className="plan-button">
                        Select
                    </button>
                </div>

                {/* Paid Plan 2 */}
                <div className="plan premium-plan">
                    <h2>Premium Plan</h2>
                    <p>₹999 / month</p>
                    <ul>
                        <li>All Standard Plan Features</li>
                        <li>One-on-One Diet Consultation</li>
                        <li>Exclusive Recipe Guides</li>
                    </ul>
                    <button onClick={() => handleSubscription("Premium")} className="plan-button">
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sub;
