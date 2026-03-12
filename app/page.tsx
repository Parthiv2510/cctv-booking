'use client';

import Hero from "@/components/Hero";
import { Shield, Smartphone, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Secure Protection",
      description: "Advanced encryption and physical security for your peace of mind."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Remote Access",
      description: "View your cameras from anywhere in the world on your smartphone."
    },
    {
      icon: <Zap size={40} />,
      title: "Instant Alerts",
      description: "Get real-time notifications on your device when motion is detected."
    },
    {
      icon: <Settings size={40} />,
      title: "Smart Analytics",
      description: "AI-powered detection for people, vehicles, and pets."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Hero />
      
      <section className={styles.features}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose SecureEye?</h2>
            <p>We provide the most advanced security solutions tailored to your needs.</p>
          </motion.div>
          
          <motion.div 
            className={styles.featureGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} className={styles.featureCard} variants={itemVariants}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Secure Your Property?</h2>
            <p>Join thousands of satisfied customers who trust SecureEye for their security needs.</p>
            <motion.a 
              href="/book" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Site Survey Today
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
