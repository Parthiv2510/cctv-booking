import Link from 'next/link';
import { Camera } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Camera size={32} color="var(--primary)" />
          <span>SecureEye CCTV</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/book">Book Now</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
        <Link href="/book" className="btn btn-secondary">Get a Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
