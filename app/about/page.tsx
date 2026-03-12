import styles from './About.module.css';

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <h1>About SecureEye CCTV</h1>
          <p>Your safety is our priority. Since 2010, we have been providing top-notch security solutions.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              At SecureEye, our mission is to provide peace of mind through advanced surveillance technology. 
              We believe that everyone deserves to feel safe and secure in their homes and businesses.
            </p>
            <p>
              We combine years of expertise with the latest innovations in CCTV and AI-powered monitoring 
              to deliver security systems that are reliable, easy to use, and highly effective.
            </p>
            
            <h2>Why We're Different</h2>
            <ul>
              <li><strong>Expert Team:</strong> Our technicians are fully certified and highly experienced.</li>
              <li><strong>Quality Hardware:</strong> We only use industry-leading cameras and recording equipment.</li>
              <li><strong>Local Support:</strong> We provide ongoing support and maintenance to our local community.</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees, just honest and competitive pricing.</li>
            </ul>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>5000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3>12000+</h3>
              <p>Cameras Installed</p>
            </div>
            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
