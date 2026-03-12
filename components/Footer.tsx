import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>The Pacific</h3>
            <p>Vision. Reimagined.</p>
          </div>
          <div className={styles.links}>
            <div>
              <h4>Shop and Learn</h4>
              <ul>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/book">Buy</Link></li>
              </ul>
            </div>
            <div>
              <h4>About The Pacific</h4>
              <ul>
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/book">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Copyright &copy; {new Date().getFullYear()} The Pacific Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
