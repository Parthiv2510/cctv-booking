'use client';

import styles from './Services.module.css';
import { Camera, Shield, Cloud, Wrench, Smartphone, Monitor } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: <Camera size={32} />,
      title: "Vision Pro",
      description: "Next-generation 4K cameras with advanced neural engines."
    },
    {
      icon: <Shield size={32} />,
      title: "Pacific Care",
      description: "24/7 dedicated monitoring and rapid response teams."
    },
    {
      icon: <Cloud size={32} />,
      title: "The Cloud",
      description: "End-to-end encrypted storage for your peace of mind."
    },
    {
      icon: <Wrench size={32} />,
      title: "Pro Install",
      description: "Precision installation by certified Pacific engineers."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Control Center",
      description: "Manage your entire security ecosystem from one app."
    },
    {
      icon: <Monitor size={32} />,
      title: "Enterprise",
      description: "Scalable solutions for massive industrial deployments."
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
          <h1>The Services of The Pacific.</h1>
          <p>Everything you need to secure your world.</p>
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
          <h2>Custom Solutions.</h2>
          <p>Talk to a Pacific specialist for a tailored enterprise package.</p>
          <Link href="/book" className="btn">Contact Sales</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
