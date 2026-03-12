import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3>SecureEye CCTV</h3>
            <p>Your trusted partner in modern security solutions.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/book">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: info@secureeye.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} SecureEye CCTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
