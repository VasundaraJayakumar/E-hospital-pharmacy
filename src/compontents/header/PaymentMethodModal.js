import React, { useState } from 'react';
import './PaymentMethodModal.css'; // CSS for styling

function PaymentMethodModal({ isOpen, onClose }) {
    const [selectedMethod, setSelectedMethod] = useState('Mastercard'); // Default selected method

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    // Conditional rendering AFTER hooks are called
    if (!isOpen) return null;

    return (
        <div className="paymentModalOverlay">
            <div className="paymentModalContent">
                <h2>Select a Payment Method</h2>
                <div className="payment-options">
                    {['VISA', 'Mastercard', 'Paypal', 'AMEX'].map((method) => (
                        <div
                            key={method}
                            className={`option ${selectedMethod === method ? 'selected' : ''}`}
                            onClick={() => handleMethodSelect(method)} // Allows selection of any method
                        >
                            <img src={`/images/${method.toLowerCase()}.png`} alt={method} />
                            <span>{method}</span>
                        </div>
                    ))}
                </div>
                <button onClick={onClose}>Proceed</button>
            </div>
        </div>
    );
}

export default PaymentMethodModal;
