'use client';

import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} glass`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoPrefix}>THE</span>
            <span className={styles.logoMain}>PACIFIC</span>
          </Link>
          
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">
                <span>Home</span>
                <span className={styles.linkDot}></span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span>Services</span>
                <span className={styles.linkDot}></span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>About</span>
                <span className={styles.linkDot}></span>
              </Link>
            </li>
          </ul>

          <div className={styles.actions}>
            <Link href="/book" className={styles.buyBtn}>
              Deploy System
            </Link>
          </div>
        </div>
      </nav>
      {/* Subtle Scroll Progress Bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />
    </header>
  );
};

export default Navbar;
