'use client';

import Hero from "@/components/Hero";
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const sections = [
    {
      id: 1,
      title: "Privacy.",
      subtitle: "That's The Pacific.",
      description: "Encrypted end-to-end. Only you see what's happening.",
      bgColor: "#f5f5f7",
      textColor: "#1d1d1f",
      btnText: "Learn about privacy",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "4K Clarity.",
      subtitle: "See every detail.",
      description: "Advanced optics and AI processing deliver stunning precision.",
      bgColor: "#000",
      textColor: "#fff",
      btnText: "View the technology",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Hero />
      
      <div className={styles.gridContainer}>
        {sections.map((section) => (
          <section 
            key={section.id} 
            className={styles.gridSection} 
            style={{ backgroundColor: section.bgColor, color: section.textColor }}
          >
            <div className="container">
              <motion.div 
                className={styles.gridContent}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2>{section.title}</h2>
                <p className={styles.subtitle}>{section.subtitle}</p>
                <p className={styles.description}>{section.description}</p>
                <a href="/services" className="btn btn-outline" style={{ color: section.textColor === "#fff" ? "#0071e3" : "#0071e3" }}>
                  {section.btnText}
                </a>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.finalCta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Secure your future.</h2>
            <p>Order The Pacific today and experience security like never before.</p>
            <div className={styles.ctaActions}>
              <a href="/book" className="btn btn-secondary">Buy</a>
              <a href="/about" className="btn btn-outline">Learn more</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
