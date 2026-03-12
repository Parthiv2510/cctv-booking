'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video Layer */}
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
        <div className={styles.topStatus}>
          <motion.div 
            className={styles.statusIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className={styles.pulse}></span>
            SYSTEMS LIVE: GLOBAL REACH
          </motion.div>
        </div>

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
            <Shield size={14} /> MILITARY-GRADE ENCRYPTION
          </motion.div>
          
          <motion.h1>The Pacific</motion.h1>
          <motion.p className={styles.tagline}>
            Absolute Vision. Total Privacy.
          </motion.p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <Eye size={20} /> <span>4K Neural Vision</span>
            </div>
            <div className={styles.featureItem}>
              <Lock size={20} /> <span>Biometric Secure</span>
            </div>
          </div>

          <motion.div className={styles.actions}>
            <Link href="/book" className="btn">Deploy System</Link>
            <Link href="/services" className="btn btn-outline">Technical Specs</Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Scanning Line */}
      <motion.div 
        className={styles.scanningLine}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
