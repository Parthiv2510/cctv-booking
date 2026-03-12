'use client';

import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './page.module.css';

const ScrollSection = ({ section }: { section: any }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={ref}
      className={styles.gridSection} 
      style={{ backgroundColor: section.bgColor, color: section.textColor }}
    >
      <div className="container">
        <div className={styles.gridWrapper}>
          <motion.div 
            className={styles.gridContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>{section.title}</h2>
            <p className={styles.subtitle}>{section.subtitle}</p>
            <p className={styles.description}>{section.description}</p>
            <a href="/services" className="btn btn-outline" style={{ color: "#0071e3" }}>
              {section.btnText}
            </a>
          </motion.div>
          
          <motion.div 
            className={styles.imageWrapper}
            style={{ scale, opacity }}
          >
            <img src={section.image} alt={section.title} className={styles.gridImage} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const sections = [
    {
      id: 1,
      title: "Privacy.",
      subtitle: "That's The Pacific.",
      description: "Encrypted end-to-end. Only you see what's happening. Your data never leaves your devices.",
      bgColor: "#f5f5f7",
      textColor: "#1d1d1f",
      btnText: "Learn about privacy",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "4K Clarity.",
      subtitle: "See every detail.",
      description: "Advanced optics and neural processing deliver stunning precision, day or night.",
      bgColor: "#000",
      textColor: "#fff",
      btnText: "View the technology",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Intelligence.",
      subtitle: "Smarter alerts.",
      description: "AI that knows the difference between a person, a pet, and a passing car.",
      bgColor: "#ffffff",
      textColor: "#1d1d1f",
      btnText: "Explore AI features",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <>
      <Hero />
      
      <div className={styles.gridContainer}>
        {sections.map((section) => (
          <ScrollSection key={section.id} section={section} />
        ))}
      </div>

      <section className={styles.finalCta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
