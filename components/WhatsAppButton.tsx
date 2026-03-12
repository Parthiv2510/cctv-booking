'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = "919558830499";
  const message = "SECURE LINE: Requesting Pacific technical specs and installation quote.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.container}>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={styles.iconWrapper}>
          <MessageCircle size={28} />
          <span className={styles.onlineBadge}></span>
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.label}>SECURE LINE</span>
          <span className={styles.sublabel}>Specialist Online</span>
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
