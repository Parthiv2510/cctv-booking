import Hero from "@/components/Hero";
import { Shield, Smartphone, Zap, Settings } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const features = [
    {
      icon: <Shield size={48} />,
      title: "Secure Protection",
      description: "Advanced encryption and physical security for your peace of mind."
    },
    {
      icon: <Smartphone size={48} />,
      title: "Remote Access",
      description: "View your cameras from anywhere in the world on your smartphone."
    },
    {
      icon: <Zap size={48} />,
      title: "Instant Alerts",
      description: "Get real-time notifications on your device when motion is detected."
    },
    {
      icon: <Settings size={48} />,
      title: "Smart Analytics",
      description: "AI-powered detection for people, vehicles, and pets."
    }
  ];

  return (
    <>
      <Hero />
      
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose SecureEye?</h2>
            <p>We provide the most advanced security solutions tailored to your needs.</p>
          </div>
          
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Secure Your Property?</h2>
            <p>Join thousands of satisfied customers who trust SecureEye for their security needs.</p>
            <a href="/book" className="btn btn-secondary">Book Your Site Survey Today</a>
          </div>
        </div>
      </section>
    </>
  );
}
