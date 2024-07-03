// src/components/PaymentTabs.tsx

import React, { useState } from 'react';
import styles from './styles.module.css';
import PaymentForm from '../FormaDePago'; 

const PaymentTabs = ({ onSubmit, onMethodChange, paymentMethod, onAddressChange, shippingAddress }) => {
  const [activeTab, setActiveTab] = useState('payment'); 
  const handlePaymentSubmit = (formData) => {
    console.log('Payment data submitted:', formData);
    if (activeTab === 'address') {
      onAddressChange(formData); 
    } else if (activeTab === 'payment') {
      onMethodChange(formData.paymentMethod); 
      onSubmit(formData); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'address' ? styles.active : ''}`}
          onClick={() => setActiveTab('address')}
        >
          Shipping Details
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'payment' ? styles.active : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          Payment Method
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'address' && (
          <div className={styles.shippingForm}>
            <h3>Enter Shipping Details</h3>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) => onAddressChange({ ...shippingAddress, address: e.target.value })}
              placeholder="Address"
              className={styles.addressInput}
            />
            <input
              type="text"
              value={shippingAddress.city}
              onChange={(e) => onAddressChange({ ...shippingAddress, city: e.target.value })}
              placeholder="City"
              className={styles.addressInput}
            />
          </div>
        )}
        {activeTab === 'payment' && (
          <PaymentForm
            onSubmit={handlePaymentSubmit}
            onMethodChange={onMethodChange}
            paymentMethod={paymentMethod}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentTabs;
