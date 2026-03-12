import styles from './Services.module.css';
import { Camera, Monitor, Shield, Cloud, Settings, Wrench } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      icon: <Camera size={40} />,
      title: "CCTV Installation",
      description: "Professional installation of high-definition security cameras for homes and businesses. We ensure optimal coverage and seamless integration."
    },
    {
      icon: <Monitor size={40} />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring services to detect and respond to security threats in real-time. Stay protected even when you're away."
    },
    {
      icon: <Shield size={40} />,
      title: "Security Audits",
      description: "Comprehensive site surveys and risk assessments to identify vulnerabilities and recommend the best security solutions for your property."
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Storage",
      description: "Secure cloud backup for your video footage. Access your recordings anytime, anywhere with encrypted cloud storage solutions."
    },
    {
      icon: <Settings size={40} />,
      title: "System Integration",
      description: "Connect your CCTV system with other smart home devices and security alarms for a fully integrated security ecosystem."
    },
    {
      icon: <Wrench size={40} />,
      title: "Maintenance & Repair",
      description: "Regular maintenance checks and prompt repair services to ensure your security system is always functioning at its best."
    }
  ];

  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h1>Our Security Services</h1>
          <p>We offer a wide range of professional security solutions to protect what matters most to you.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Need a Custom Solution?</h2>
          <p>Contact our experts today for a tailored security package that fits your specific requirements.</p>
          <Link href="/book" className="btn">Get a Custom Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
