'use client';

import styles from './Services.module.css';
import { Camera, Shield, Wrench, Flame, AlertCircle, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: <Camera size={32} />,
      title: "Smart CCTV",
      description: "High-definition 4K surveillance with advanced motion analytics and night vision."
    },
    {
      icon: <Flame size={32} />,
      title: "Fire Protection",
      description: "Comprehensive fire safety audits and high-performance suppression systems."
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Smoke Detection",
      description: "Intelligent smoke and heat sensors that detect potential threats before they escalate."
    },
    {
      icon: <Wrench size={32} />,
      title: "Precision Install",
      description: "Certified engineering teams ensuring your systems are perfectly deployed."
    },
    {
      icon: <Eye size={32} />,
      title: "Remote Access",
      description: "View your properties in real-time from anywhere in the world on any device."
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance",
      description: "Ensuring your property meets all local fire and safety regulations."
    }
  ];

  return (
    <section className={styles.services}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>CCTV & Fire Safety Services.</h1>
          <p>The specialized expertise of The Pacific.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Professional Assessment.</h2>
          <p>Schedule a specialized audit of your CCTV and Fire Safety needs.</p>
          <Link href="/book" className="btn">Get Started</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
