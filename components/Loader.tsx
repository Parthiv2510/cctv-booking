'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <motion.div 
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.cameraWrapper}>
        <motion.div
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Camera size={80} className={styles.cameraIcon} />
        </motion.div>
        <div className={styles.lens}>
          <motion.div 
            className={styles.recordLight}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <motion.div 
          className={styles.scanLine}
          animate={{ top: ['20%', '80%', '20%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.loadingText}
      >
        INITIALIZING PACIFIC SECURE SYSTEMS...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
