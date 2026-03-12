'use client';

import { useState } from 'react';
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className={styles.success}>
        <div className="container">
          <div className={styles.successCard}>
            <h2>Thank You!</h2>
            <p>Your booking request has been received. Our security expert will contact you shortly to confirm the site survey.</p>
            <button onClick={() => setIsSubmitted(false)} className="btn">Book Another Survey</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.booking}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h1>Book Your Free Site Survey</h1>
            <p>Ready to secure your property? Fill out the form below, and we'll send a security professional to your location for a comprehensive assessment.</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h3>Call Us</h3>
                <p>+1 (234) 567-890</p>
              </div>
              <div className={styles.contactItem}>
                <h3>Email</h3>
                <p>surveys@secureeye.com</p>
              </div>
            </div>
          </div>
          
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="address">Installation Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="propertyType">Property Type</label>
                <select 
                  id="propertyType" 
                  name="propertyType" 
                  value={formData.propertyType} 
                  onChange={handleChange}
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Any Special Requirements?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Site Survey'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
