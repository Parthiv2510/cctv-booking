'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Book.module.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: 'residential',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(true); // Changed from false to true to prevent double submission
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section className={styles.success}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.successCard}
          >
            <h2>Thank You.</h2>
            <p>Your request for The Pacific has been received. A specialist will contact you soon.</p>
            <button onClick={() => setIsSubmitted(false)} className="btn">Book Another</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.booking}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Complete your order.</h1>
          <p>Get a custom site survey for your property.</p>
        </motion.div>
        
        <motion.div 
          className={styles.formCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="propertyType">Property Type</label>
              <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange}>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Place Request'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingPage;
