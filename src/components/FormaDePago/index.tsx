// src/components/PaymentForm.jsx

import React, { useState } from 'react';
import styles from './styles.module.css'; 
import Button from '../Button';

const PaymentForm = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: '',
    bankAccount: '',
    bankRouting: '',
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Determine which fields to validate based on paymentMethod
    let fieldsToValidate = [];
    switch (paymentMethod) {
      case 'creditCard':
        fieldsToValidate = ['cardNumber', 'cardName', 'expiryDate', 'cvv'];
        break;
      case 'paypal':
        fieldsToValidate = ['paypalEmail'];
        break;
      case 'bankTransfer':
        fieldsToValidate = ['bankAccount', 'bankRouting'];
        break;
      default:
        break;
    }

    // Check if any of the required fields are empty
    const isEmpty = fieldsToValidate.some(field => formData[field] === '');
    if (isEmpty) {
      setFormError(true);
      return;
    }

    setFormError(false);
    onSubmit(formData);
  };

  return (
    <form className={styles.paymentForm} onSubmit={handleSubmit}>
      <h2>Payment Details</h2>

      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="bankTransfer"
            checked={paymentMethod === 'bankTransfer'}
            onChange={() => setPaymentMethod('bankTransfer')}
          />
          Bank Transfer
        </label>
      </div>

      {paymentMethod === 'creditCard' && (
        <div>
          <div>
            <label>
              Card Number
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Card Name
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Expiry Date
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              CVV
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div>
          <label>
            PayPal Email
            <input
              type="email"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {paymentMethod === 'bankTransfer' && (
        <div>
          <div>
            <label>
              Bank Account
              <input
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Bank Routing
              <input
                type="text"
                name="bankRouting"
                value={formData.bankRouting}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      )}
      
      {formError && <p className={styles.error}>Please fill out all required fields.</p>}

      <div className={styles.botonComprarContainer}>
        <Button type="submit">Submit Payment</Button>
      </div>

    </form>
  );
};

export default PaymentForm;
