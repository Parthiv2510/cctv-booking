import SiteScripts from './components/SiteScripts';

const WHATSAPP_SVG_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

function CameraLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8a2 2 0 0 1 2-2h11l5 4v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
      <circle cx="9" cy="11" r="3" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Scroll progress bar */}
      <div id="scrollProgress" className="scroll-progress" />

      {/* Top bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>⚡ 24×7 Emergency Support</span>
          <span className="dot">•</span>
          <a href="tel:+919558830499">📞 +91 95588 30499</a>
          <span className="dot">•</span>
          <a href="https://wa.me/919558830499" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="site-header" id="siteHeader">
        <div className="container nav">
          <a href="#home" className="logo">
            <span className="logo-mark">
              <CameraLogo />
            </span>
            <span className="logo-text">
              The Pacific <small>CCTV</small>
            </span>
          </a>
          <nav id="primaryNav">
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#products">Products</a>
            <a href="#testimonials">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-cta nav-cta" href="#contact">
            Get Free Quote →
          </a>
          <button className="hamburger" id="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-bg-orbs">
          <span className="orb orb-1"></span>
          <span className="orb orb-2"></span>
          <span className="orb orb-3"></span>
        </div>
        <div className="container hero-inner">
          <div className="hero-text" data-animate="fade-up">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> Trusted by 500+ businesses & homes
            </span>
            <h1>
              Smart <span className="gradient-text">Surveillance</span>
              <br />
              for a Safer Tomorrow
            </h1>
            <p className="hero-sub">
              From single doorbell cameras to 32-channel office setups — The Pacific installs,
              repairs and supplies trusted CCTV systems with on-site support across the city.
            </p>
            <div className="hero-cta">
              <a className="btn btn-cta btn-lg" href="#contact">
                Book Free Site Visit →
              </a>
              <a
                className="btn btn-glass btn-lg"
                href="https://wa.me/919558830499?text=Hi%20The%20Pacific%2C%20I%20need%20more%20info%20about%20CCTV%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d={WHATSAPP_SVG_PATH} />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <small>4.9/5 from 200+ happy customers</small>
              </div>
            </div>
          </div>
          <div className="hero-card glass" data-animate="fade-up" data-delay="150">
            <div className="hero-card-top">
              <div className="live-dot"></div>
              <span>Live Monitoring</span>
            </div>
            <div className="hero-card-grid">
              <div className="stat-tile">
                <div className="stat-icon">🎥</div>
                <strong className="counter" data-target="500" data-suffix="+">
                  0
                </strong>
                <span>Sites Secured</span>
              </div>
              <div className="stat-tile">
                <div className="stat-icon">🛠️</div>
                <strong className="counter" data-target="10" data-suffix="+ yrs">
                  0
                </strong>
                <span>Experience</span>
              </div>
              <div className="stat-tile">
                <div className="stat-icon">⚡</div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>
              <div className="stat-tile">
                <div className="stat-icon">⭐</div>
                <strong className="counter" data-target="4.9" data-decimals="1">
                  0
                </strong>
                <span>Customer Rating</span>
              </div>
            </div>
            <div className="hero-card-bottom">
              <span className="badge">✓ Hikvision</span>
              <span className="badge">✓ CP Plus</span>
              <span className="badge">✓ Dahua</span>
              <span className="badge">+ more</span>
            </div>
          </div>
        </div>
        <a href="#brands" className="scroll-cue" aria-label="Scroll down">
          <span></span>
        </a>
      </section>

      {/* Brand strip */}
      <section id="brands" className="brand-strip">
        <div className="container">
          <p className="brand-strip-label">We work with all major brands</p>
          <div className="brand-marquee">
            <div className="brand-track">
              <span>HIKVISION</span>
              <span>CP PLUS</span>
              <span>DAHUA</span>
              <span>UNIVIEW</span>
              <span>HONEYWELL</span>
              <span>BOSCH</span>
              <span>SAMSUNG</span>
              <span>PANASONIC</span>
              <span>HIKVISION</span>
              <span>CP PLUS</span>
              <span>DAHUA</span>
              <span>UNIVIEW</span>
              <span>HONEYWELL</span>
              <span>BOSCH</span>
              <span>SAMSUNG</span>
              <span>PANASONIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">What We Do</span>
            <h2>
              End-to-End CCTV <span className="gradient-text">Solutions</span>
            </h2>
            <p>Three core services. One trusted partner. Total peace of mind.</p>
          </div>
          <div className="grid-3">
            <div className="card service-card" data-animate="fade-up" data-delay="0">
              <div className="card-icon-wrap">
                <div className="card-icon">🛠️</div>
              </div>
              <h3>CCTV Installation</h3>
              <p>
                Professional installation for homes, shops, offices, factories and apartments.
                Wiring, DVR/NVR setup, mobile app & training included.
              </p>
              <ul className="card-list">
                <li>✓ Free site survey</li>
                <li>✓ Same-day setup</li>
                <li>✓ Mobile app config</li>
              </ul>
              <a className="card-link" href="#contact" data-service="Installation">
                Request Installation →
              </a>
            </div>
            <div
              className="card service-card service-card-featured"
              data-animate="fade-up"
              data-delay="100"
            >
              <span className="card-badge">Most Popular</span>
              <div className="card-icon-wrap">
                <div className="card-icon">🔧</div>
              </div>
              <h3>Repair & Maintenance</h3>
              <p>
                Camera not working? DVR not recording? We repair all brands and offer affordable
                AMC packages for hassle-free maintenance.
              </p>
              <ul className="card-list">
                <li>✓ All brands serviced</li>
                <li>✓ On-site visits</li>
                <li>✓ AMC plans available</li>
              </ul>
              <a className="card-link" href="#contact" data-service="Repair">
                Book a Repair →
              </a>
            </div>
            <div className="card service-card" data-animate="fade-up" data-delay="200">
              <div className="card-icon-wrap">
                <div className="card-icon">🛒</div>
              </div>
              <h3>Sales & Supply</h3>
              <p>
                Buy CCTV cameras, DVRs, NVRs, hard disks, cables and accessories at the best
                wholesale prices — with optional installation.
              </p>
              <ul className="card-list">
                <li>✓ Genuine products</li>
                <li>✓ Best wholesale rates</li>
                <li>✓ Brand warranty</li>
              </ul>
              <a className="card-link" href="#products" data-service="Sales">
                View Products →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section section-dark">
        <div className="container">
          <div className="section-head section-head-light" data-animate="fade-up">
            <span className="kicker kicker-light">How It Works</span>
            <h2>
              Simple, Smooth, <span className="gradient-text">Stress-Free</span>
            </h2>
            <p>From your first call to a fully running surveillance system — in 4 steps.</p>
          </div>
          <div className="steps">
            <div className="step" data-animate="fade-up" data-delay="0">
              <div className="step-num">01</div>
              <h4>You Reach Out</h4>
              <p>Call, WhatsApp, or fill the form. Tell us your needs.</p>
            </div>
            <div className="step" data-animate="fade-up" data-delay="100">
              <div className="step-num">02</div>
              <h4>Free Site Survey</h4>
              <p>We visit your location, assess and recommend the right setup.</p>
            </div>
            <div className="step" data-animate="fade-up" data-delay="200">
              <div className="step-num">03</div>
              <h4>Install & Configure</h4>
              <p>Same-day installation. We set up the app and train you.</p>
            </div>
            <div className="step" data-animate="fade-up" data-delay="300">
              <div className="step-num">04</div>
              <h4>Lifetime Support</h4>
              <p>1-year service warranty + AMC plans for ongoing care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section section-alt">
        <div className="container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">Our Catalog</span>
            <h2>
              Popular <span className="gradient-text">Products</span>
            </h2>
            <p>Tap "Enquire on WhatsApp" — your message goes straight to The Pacific.</p>
          </div>
          <div className="grid-3">
            <div className="product" data-animate="fade-up" data-delay="0">
              <div className="product-img">
                📷<span className="product-tag">HD</span>
              </div>
              <h4>2MP HD Dome Camera</h4>
              <p className="muted">Indoor • Night Vision • Wide Angle</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="2MP HD Dome Camera"
              >
                Enquire on WhatsApp
              </button>
            </div>
            <div className="product" data-animate="fade-up" data-delay="60">
              <div className="product-img">
                🎥<span className="product-tag">4MP</span>
              </div>
              <h4>4MP Bullet Camera</h4>
              <p className="muted">Outdoor • Weatherproof • IR 30m</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="4MP Bullet Camera"
              >
                Enquire on WhatsApp
              </button>
            </div>
            <div className="product" data-animate="fade-up" data-delay="120">
              <div className="product-img">
                📡<span className="product-tag">WiFi</span>
              </div>
              <h4>WiFi PTZ Smart Camera</h4>
              <p className="muted">360° • 2-way Audio • Mobile App</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="WiFi PTZ Smart Camera"
              >
                Enquire on WhatsApp
              </button>
            </div>
            <div className="product" data-animate="fade-up" data-delay="180">
              <div className="product-img">
                💽<span className="product-tag">8CH</span>
              </div>
              <h4>8-Channel DVR</h4>
              <p className="muted">H.265+ • HDMI • Mobile View</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="8-Channel DVR"
              >
                Enquire on WhatsApp
              </button>
            </div>
            <div className="product" data-animate="fade-up" data-delay="240">
              <div className="product-img">
                🖥️<span className="product-tag">4K</span>
              </div>
              <h4>16-Channel NVR</h4>
              <p className="muted">IP Cameras • 4K Support</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="16-Channel NVR"
              >
                Enquire on WhatsApp
              </button>
            </div>
            <div className="product" data-animate="fade-up" data-delay="300">
              <div className="product-img">
                📦<span className="product-tag product-tag-hot">COMBO</span>
              </div>
              <h4>4-Camera Combo Kit</h4>
              <p className="muted">DVR + 4 Cameras + Cables + HDD</p>
              <p className="price">Best Price on Request</p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-product="4-Camera Combo Kit"
              >
                Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="section">
        <div className="container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">Why Pacific</span>
            <h2>
              Built on <span className="gradient-text">Trust</span>, Backed by Experience
            </h2>
          </div>
          <div className="grid-4">
            <div className="feature" data-animate="fade-up" data-delay="0">
              <div className="feature-icon">⚡</div>
              <h4>Quick Response</h4>
              <p>Same-day visits, fast quotes.</p>
            </div>
            <div className="feature" data-animate="fade-up" data-delay="80">
              <div className="feature-icon">👨‍🔧</div>
              <h4>Trained Engineers</h4>
              <p>Certified, experienced team.</p>
            </div>
            <div className="feature" data-animate="fade-up" data-delay="160">
              <div className="feature-icon">💰</div>
              <h4>Transparent Pricing</h4>
              <p>No hidden charges, ever.</p>
            </div>
            <div className="feature" data-animate="fade-up" data-delay="240">
              <div className="feature-icon">🛡️</div>
              <h4>Service Warranty</h4>
              <p>1-year warranty on installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section section-alt">
        <div className="container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">Our Work</span>
            <h2>
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p>A glimpse of installations we've completed across the city.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item" data-animate="zoom-in" data-delay="0">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#1976d2,#0a4d8c)' }}
              >
                🏢
              </div>
              <div className="gallery-info">
                <h5>Corporate Office</h5>
                <p>16-camera IP setup, 4K NVR</p>
              </div>
            </div>
            <div className="gallery-item" data-animate="zoom-in" data-delay="100">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#ff6b35,#e55a2b)' }}
              >
                🏠
              </div>
              <div className="gallery-info">
                <h5>Residential Bungalow</h5>
                <p>8 outdoor + 2 indoor cameras</p>
              </div>
            </div>
            <div className="gallery-item" data-animate="zoom-in" data-delay="200">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#0a4d8c,#1976d2)' }}
              >
                🏪
              </div>
              <div className="gallery-info">
                <h5>Retail Showroom</h5>
                <p>4-camera HD with cloud backup</p>
              </div>
            </div>
            <div className="gallery-item" data-animate="zoom-in" data-delay="300">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#073865,#0a4d8c)' }}
              >
                🏭
              </div>
              <div className="gallery-info">
                <h5>Factory & Warehouse</h5>
                <p>32-channel surveillance grid</p>
              </div>
            </div>
            <div className="gallery-item" data-animate="zoom-in" data-delay="400">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#ff8a5b,#ff6b35)' }}
              >
                🏨
              </div>
              <div className="gallery-info">
                <h5>Hotel & Lobby</h5>
                <p>PTZ + audio + lobby coverage</p>
              </div>
            </div>
            <div className="gallery-item" data-animate="zoom-in" data-delay="500">
              <div
                className="gallery-img"
                style={{ background: 'linear-gradient(135deg,#1976d2,#5ba9ee)' }}
              >
                🏫
              </div>
              <div className="gallery-info">
                <h5>School Campus</h5>
                <p>24 cameras, classroom + gate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">Reviews</span>
            <h2>
              What Our <span className="gradient-text">Customers</span> Say
            </h2>
          </div>
          <div className="grid-3">
            <div className="testimonial" data-animate="fade-up" data-delay="0">
              <div className="t-stars">★★★★★</div>
              <p>
                "Pacific installed 8 cameras in our showroom in a single day. Clean wiring, mobile
                app worked perfectly. Highly recommended!"
              </p>
              <div className="t-author">
                <div className="t-avatar">RM</div>
                <div>
                  <strong>Rajesh Mehta</strong>
                  <small>Showroom Owner</small>
                </div>
              </div>
            </div>
            <div className="testimonial" data-animate="fade-up" data-delay="120">
              <div className="t-stars">★★★★★</div>
              <p>
                "Our old DVR died and we lost our recordings. The Pacific team came the same day,
                recovered footage and replaced it. Lifesavers!"
              </p>
              <div className="t-author">
                <div className="t-avatar">PS</div>
                <div>
                  <strong>Priya Shah</strong>
                  <small>Home Owner</small>
                </div>
              </div>
            </div>
            <div className="testimonial" data-animate="fade-up" data-delay="240">
              <div className="t-stars">★★★★★</div>
              <p>
                "We took the AMC package for our 3 office locations. Zero downtime in 1 year. Their
                support is just one WhatsApp away."
              </p>
              <div className="t-author">
                <div className="t-avatar">AK</div>
                <div>
                  <strong>Amit Kumar</strong>
                  <small>Operations Manager</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-alt">
        <div className="container faq-container">
          <div className="section-head" data-animate="fade-up">
            <span className="kicker">Help Center</span>
            <h2>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" data-animate="fade-up" data-delay="0">
              <summary>How long does CCTV installation take?</summary>
              <p>
                For most homes and small shops (4–8 cameras), installation is completed in a single
                day. Larger commercial setups may take 2–3 days. We always confirm a timeline
                upfront after the site survey.
              </p>
            </details>
            <details className="faq-item" data-animate="fade-up" data-delay="60">
              <summary>Do you provide a free site visit?</summary>
              <p>
                Yes. Our site survey is completely free with no obligation. We visit your premises,
                understand your needs, and provide a transparent quote.
              </p>
            </details>
            <details className="faq-item" data-animate="fade-up" data-delay="120">
              <summary>Can I view my CCTV cameras on my mobile?</summary>
              <p>
                Absolutely. Every system we install includes mobile app setup (iOS & Android) so
                you can watch live feed and recordings from anywhere in the world.
              </p>
            </details>
            <details className="faq-item" data-animate="fade-up" data-delay="180">
              <summary>Do you repair cameras you didn't install?</summary>
              <p>
                Yes. We service and repair CCTV systems of all brands — Hikvision, CP Plus, Dahua,
                Honeywell and more — regardless of who installed them originally.
              </p>
            </details>
            <details className="faq-item" data-animate="fade-up" data-delay="240">
              <summary>What warranty do you offer?</summary>
              <p>
                You get the full manufacturer's warranty on all hardware (typically 1–3 years), plus
                a 1-year service warranty from The Pacific on the installation work itself.
              </p>
            </details>
            <details className="faq-item" data-animate="fade-up" data-delay="300">
              <summary>What is an AMC package?</summary>
              <p>
                Annual Maintenance Contract — for a small yearly fee, we handle all servicing,
                troubleshooting and on-site visits for your CCTV system. Perfect for offices and
                businesses that need 100% uptime.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner-inner" data-animate="fade-up">
          <div>
            <h2>Ready to secure your space?</h2>
            <p>Get a free site visit and a no-obligation quote today.</p>
          </div>
          <div className="cta-banner-actions">
            <a className="btn btn-cta btn-lg" href="#contact">
              Book Free Visit
            </a>
            <a className="btn btn-glass btn-lg" href="tel:+919558830499">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container grid-2">
          <div data-animate="fade-up">
            <span className="kicker">Get In Touch</span>
            <h2>
              Let's Build Your <span className="gradient-text">Security Plan</span>
            </h2>
            <p>
              Fill the form and your enquiry is instantly sent to The Pacific WhatsApp. We usually
              reply within minutes.
            </p>
            <ul className="contact-list">
              <li>
                <div className="contact-icon">📞</div>
                <div>
                  <small>Call us</small>
                  <a href="tel:+919558830499">+91 95588 30499</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">💬</div>
                <div>
                  <small>WhatsApp</small>
                  <a href="https://wa.me/919558830499" target="_blank" rel="noopener noreferrer">
                    +91 95588 30499
                  </a>
                </div>
              </li>
              <li>
                <div className="contact-icon">🕒</div>
                <div>
                  <small>Working Hours</small>
                  <span>Mon – Sun, 9:00 AM – 9:00 PM</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">📍</div>
                <div>
                  <small>Service Area</small>
                  <span>City-wide on-site service</span>
                </div>
              </li>
            </ul>
          </div>
          <form
            id="enquiryForm"
            className="form-card"
            noValidate
            data-animate="fade-up"
            data-delay="100"
          >
            <div className="form-row">
              <label>
                Name *
                <input name="name" type="text" required placeholder="Your full name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone *
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  pattern="[0-9+\- ]{7,15}"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Service Required *
                <select name="service" required defaultValue="">
                  <option value="">Select a service</option>
                  <option>CCTV Installation</option>
                  <option>CCTV Repair</option>
                  <option>Buy CCTV / Products</option>
                  <option>AMC / Maintenance</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                Location / Address
                <input name="location" type="text" placeholder="City, area, landmark" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Number of cameras, type of property, etc."
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Send Enquiry via WhatsApp
            </button>
            <p className="form-note">
              🔒 Your details are sent directly to <b>+91 95588 30499</b>. No data is stored on
              this site.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="logo logo-light">
              <span className="logo-mark">
                <CameraLogo />
              </span>
              <span className="logo-text">
                The Pacific <small>CCTV</small>
              </span>
            </a>
            <p>Installation • Repair • Sales</p>
            <p className="muted-light">
              Your trusted security partner for home, shop and office surveillance.
            </p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#products">Products</a>
            <a href="#testimonials">Reviews</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="https://wa.me/919558830499" target="_blank" rel="noopener noreferrer">
              WhatsApp Support
            </a>
          </div>
          <div>
            <h5>Reach Us</h5>
            <a href="tel:+919558830499">📞 +91 95588 30499</a>
            <a href="https://wa.me/919558830499" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Chat
            </a>
            <p className="muted-light">Mon – Sun, 9:00 AM – 9:00 PM</p>
          </div>
        </div>
        <div className="copyright">
          © <span id="year"></span> The Pacific CCTV. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Bot */}
      <div id="waBot" className="wa-bot">
        <button id="waToggle" className="wa-toggle" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d={WHATSAPP_SVG_PATH} />
          </svg>
          <span className="wa-pulse"></span>
          <span className="wa-badge">1</span>
        </button>
        <div id="waPanel" className="wa-panel" hidden>
          <div className="wa-header">
            <div className="wa-avatar">📹</div>
            <div>
              <strong>The Pacific CCTV</strong>
              <small>
                <span className="online-dot"></span> Online — replies instantly
              </small>
            </div>
            <button className="wa-close" id="waClose" aria-label="Close">
              ✕
            </button>
          </div>
          <div className="wa-body">
            <div className="wa-msg">
              👋 Hi there! Welcome to The Pacific CCTV.
              <br />
              How can we help you today?
            </div>
            <div className="wa-quick">
              <button
                type="button"
                data-msg="Hi, I want to install CCTV cameras. Please share details."
              >
                🛠️ I want CCTV Installation
              </button>
              <button
                type="button"
                data-msg="Hi, my CCTV camera/DVR is not working. Need repair service."
              >
                🔧 I need Repair Service
              </button>
              <button
                type="button"
                data-msg="Hi, I want to buy CCTV cameras. Please share product list and price."
              >
                🛒 I want to Buy CCTV
              </button>
              <button type="button" data-msg="Hi, I want a free site visit and quote.">
                📍 Book Free Site Visit
              </button>
            </div>
            <a
              id="waOpenChat"
              className="btn btn-primary btn-block"
              href="https://wa.me/919558830499"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Open WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button id="backToTop" className="back-to-top" aria-label="Back to top">
        ↑
      </button>

      <SiteScripts />
    </>
  );
}
