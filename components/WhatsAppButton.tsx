'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // User should replace this with their actual number
  const message = "Hi! I'm interested in a CCTV installation from The Pacific. Can I get a quote?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 2 }}
    >
      <MessageCircle size={32} />
      <span className={styles.tooltip}>Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
