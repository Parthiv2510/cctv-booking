'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Camera, Flame } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <div className={styles.overlay}></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className={styles.video}
          poster="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://cdn.pixabay.com/video/2019/12/12/30114-379685934_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={styles.content}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Shield size={14} /> CERTIFIED PROTECTION
          </motion.div>
          
          <motion.h1>The Pacific</motion.h1>
          <motion.p className={styles.tagline}>
            CCTV & Fire Safety. Perfected.
          </motion.p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <Camera size={20} /> <span>Smart CCTV</span>
            </div>
            <div className={styles.featureItem}>
              <Flame size={20} /> <span>Fire Prevention</span>
            </div>
          </div>

          <motion.div className={styles.actions}>
            <Link href="/book" className="btn">Get Free Quote</Link>
            <Link href="/services" className="btn btn-outline">View Services</Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scanningLine}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
