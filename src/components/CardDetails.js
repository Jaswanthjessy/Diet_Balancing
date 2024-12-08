import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/CardDetails.css"; // Importing the CSS file

const CardDetails = () => {
    const { state } = useLocation();
    const { plan } = state || {};
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Card number format function (For example: 1234 5678 9012 3456)
    const formatCardNumber = (value) => {
        return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
    };

    // Expiry date formatting (MM/YY)
    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length <= 2) {
            value = value.replace(/(\d{2})/, '$1'); // Add slash after month
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{2})/, '$1/$2'); // Format as MM/YY
        }
        setExpiryDate(value);
    };

    const handleCardDetailsSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset errors

        // Basic validation
        if (!cardNumber || !expiryDate || !cvv) {
            setError("Please fill out all fields.");
            return;
        }
        if (cardNumber.replace(/\s/g, "").length !== 16) {
            setError("Card number must be 16 digits.");
            return;
        }
        if (cvv.length !== 3) {
            setError("CVV must be 3 digits.");
            return;
        }

        setIsSubmitted(true);
        setTimeout(() => {
            alert(`You selected the ${plan} plan. Card details submitted!`);
            // You can perform additional actions here, like navigating to a success page or resetting the form.
        }, 1000);
    };

    return (
        <div className="card-details-container">
            <h1 className="card-details-header">Enter Card Details for {plan} Plan</h1>
            {isSubmitted && (
                <div className="success-message">Submitting...</div>
            )}
            {error && (
                <div className="error-message">{error}</div>
            )}
            <form onSubmit={handleCardDetailsSubmit}>
                <div className="input-group">
                    <label htmlFor="cardNumber" className="label">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        className="input"
                        placeholder="Enter your card number"
                        maxLength="19"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="expiryDate" className="label">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        className="input expiry-input"
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="cvv" className="label">CVV</label>
                    <input
                        type="password"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="input"
                        placeholder="Enter your CVV"
                        maxLength="3"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default CardDetails;
