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
          <p>Innovating security for a better world.</p>
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
              as clean as our vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
