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
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={styles.content}
        >
          <motion.h1>The Pacific</motion.h1>
          <motion.p className={styles.tagline}>
            Vision. Reimagined.
          </motion.p>
          <motion.p className={styles.description}>
            The most advanced security system ever. Pure, powerful, and private.
          </motion.p>
          <motion.div 
            className={styles.actions}
          >
            <Link href="/book" className="btn">Order Now</Link>
            <Link href="/services" className="btn btn-outline">Learn more</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
