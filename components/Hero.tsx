'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Advanced Surveillance for Your Peace of Mind
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Secure your home and business with state-of-the-art CCTV systems. 
            Professional installation, 24/7 remote access, and crystal clear 4K imaging.
          </motion.p>
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/book" className="btn">Book Free Site Survey</Link>
            <Link href="/services" className="btn btn-outline">Explore Our Systems</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
