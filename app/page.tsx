'use client';

import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Activity, Shield, Wifi, Globe, MapPin, Search } from 'lucide-react';
import styles from './page.module.css';

const SecurityDashboard = () => {
  const [activeFeeds, setActiveFeeds] = useState(12);
  const [uptime, setUptime] = useState(99.98);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => Math.min(prev + 0.001, 99.99));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.dashboard}>
      <div className="container">
        <div className={styles.dashboardHeader}>
          <span className={styles.label}>LIVE NETWORK STATUS</span>
          <h2>Pacific Control Center</h2>
        </div>
        
        <div className={styles.dashboardGrid}>
          <div className={styles.statsPanel}>
            <div className={styles.statCard}>
              <Activity size={20} className={styles.green} />
              <div>
                <span className={styles.statLabel}>Active Nodes</span>
                <span className={styles.statValue}>{activeFeeds}k+</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <Wifi size={20} className={styles.blue} />
              <div>
                <span className={styles.statLabel}>Latency</span>
                <span className={styles.statValue}>14ms</span>
              </div>
            </div>
            <div className={styles.statCard}>
              <Shield size={20} className={styles.blue} />
              <div>
                <span className={styles.statLabel}>System Health</span>
                <span className={styles.statValue}>{uptime}%</span>
              </div>
            </div>
          </div>

          <div className={styles.mapVisual}>
            <div className={styles.mapOverlay}>
              <div className={styles.scanner}></div>
              <div className={styles.ping} style={{ top: '30%', left: '40%' }}></div>
              <div className={styles.ping} style={{ top: '60%', left: '70%' }}></div>
              <div className={styles.ping} style={{ top: '20%', left: '80%' }}></div>
            </div>
            <div className={styles.mapLabel}>
              <MapPin size={12} /> SECURED REGIONS ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <div className={styles.sectionBadge} style={{ color: section.textColor === '#fff' ? '#0071e3' : '#000' }}>
              PRO SERIES
            </div>
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
            <div className={styles.imgOverlay}>
              <Search size={20} /> ANALYZING TARGET...
            </div>
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
      title: "Bio-Vision.",
      subtitle: "Human Intelligence.",
      description: "Advanced thermal and neural recognition tracks targets with 99.9% accuracy, even in total darkness.",
      bgColor: "#000",
      textColor: "#fff",
      btnText: "Learn about AI",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Stealth Tech.",
      subtitle: "Invisible Defense.",
      description: "Zero-light sensors and miniature form factor allow for professional, discreet surveillance in any environment.",
      bgColor: "#f5f5f7",
      textColor: "#1d1d1f",
      btnText: "View Stealth Range",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <>
      <Hero />
      <SecurityDashboard />
      
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
            <h2>Deploy your defense.</h2>
            <p>Commercial and Residential high-security deployments available globally.</p>
            <div className={styles.ctaActions}>
              <a href="/book" className="btn btn-secondary">Order Now</a>
              <a href="/about" className="btn btn-outline">About Pacific</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
