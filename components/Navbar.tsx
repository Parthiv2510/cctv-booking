import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.nav} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span>The Pacific</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/book">Book</Link></li>
        </ul>
        <Link href="/book" className={styles.ctaLink}>Buy Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
