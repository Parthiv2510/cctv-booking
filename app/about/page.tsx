'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>The story of The Pacific.</h1>
          <p>Vision. Reimagined. Security perfected.</p>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Design and Purpose.</h2>
            <p>
              We believe that security should be powerful yet invisible. 
              The Pacific was founded with a single mission: to create a 
              surveillance ecosystem that respects privacy as much as it 
              protects your environment.
            </p>
            <p>
              Every line of code and every hardware component is engineered 
              with a focus on absolute reliability. We don't just build cameras; 
              we build peace of mind.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Engineering Excellence.</h2>
            <p>
              Our systems utilize the latest in neural processing and 
              optical engineering. By combining 4K resolution with 
              AI-driven analytics, The Pacific delivers a level of 
              detail and intelligence that was previously impossible.
            </p>
            <p>
              From thermal imaging to advanced fire suppression, our 
              technology is designed to perform in the most demanding 
              environments, ensuring your assets are always protected.
            </p>
          </motion.div>

          <motion.div 
            className={styles.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Commitment.</h2>
            <p>
              The Pacific is dedicated to providing specialized security 
              solutions that adapt to your unique needs. Whether it's a 
              private residence or a large-scale industrial facility, 
              we bring the same level of precision and care to every deployment.
            </p>
            <p>
              Our certified engineers handle everything from site survey 
              to final installation, ensuring your Pacific system is 
              perfectly integrated and ready to protect.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Sustainability.</h2>
            <p>
              Our hardware is designed to last. We use recycled materials 
              and energy-efficient processing to ensure our footprint is 
              as clean as our vision. We are committed to a future where 
              security and sustainability go hand in hand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
