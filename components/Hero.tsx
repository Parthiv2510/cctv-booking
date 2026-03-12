import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>Advanced Surveillance for Your Peace of Mind</h1>
          <p>
            Secure your home and business with state-of-the-art CCTV systems. 
            Professional installation, 24/7 remote access, and crystal clear 4K imaging.
          </p>
          <div className={styles.actions}>
            <Link href="/book" className="btn">Book Free Site Survey</Link>
            <Link href="/services" className="btn btn-outline">Explore Our Systems</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
