'use client';

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.sectionBadge} style={{ color: "#0071e3" }}>
              {section.badge}
            </div>
            <h2>{section.title}</h2>
            <p className={styles.subtitle}>{section.subtitle}</p>
            <p className={styles.description}>{section.description}</p>
            <a href="/services" className="btn btn-outline">
              {section.btnText}
            </a>
          </motion.div>
          
          <motion.div 
            className={styles.imageWrapper}
            style={{ scale, opacity }}
          >
            <img src={section.image} alt={section.title} className={styles.gridImage} />
            <div className={styles.imgOverlay}>
              <Search size={20} /> ANALYZING...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: 1,
      badge: "CCTV SYSTEMS",
      title: "Bio-Vision.",
      subtitle: "Human Intelligence.",
      description: "Advanced thermal and neural recognition tracks targets with 99.9% accuracy, even in total darkness.",
      bgColor: "#000",
      textColor: "#fff",
      btnText: "Learn about AI",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      badge: "FIRE SAFETY",
      title: "Flame-Guard.",
      subtitle: "Total Prevention.",
      description: "Next-generation smoke detection and fire suppression systems designed to protect lives and property.",
      bgColor: "#f5f5f7",
      textColor: "#1d1d1f",
      btnText: "View Fire Range",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 3,
        badge: "REMOTE MONITORING",
        title: "Pacific Connect.",
        subtitle: "Global Access.",
        description: "Securely monitor your assets from anywhere in the world with encrypted real-time video streaming.",
        bgColor: "#ffffff",
        textColor: "#1d1d1f",
        btnText: "Explore Remote Access",
        image: "https://images.unsplash.com/photo-1551709076-89f2499d383b?q=80&w=1200&auto=format&fit=crop"
      }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551709076-89f2499d383b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      <Hero />
      
      <div className={styles.gridContainer}>
        {sections.map((section) => (
          <ScrollSection key={section.id} section={section} />
        ))}
      </div>

      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>The Pacific Ecosystem.</h2>
            <p>Integrated CCTV and Fire Safety solutions for commercial and residential properties.</p>
          </div>
          <div className={styles.galleryGrid}>
            {galleryImages.map((src, idx) => (
              <motion.div 
                key={idx} 
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={src} alt="Pacific Installation" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Protect your legacy.</h2>
            <p>Professional CCTV and Fire Safety deployments. Tailored for you.</p>
            <div className={styles.ctaActions}>
              <a href="/book" className="btn btn-secondary">Get Quote</a>
              <a href="/about" className="btn btn-outline">Learn more</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
