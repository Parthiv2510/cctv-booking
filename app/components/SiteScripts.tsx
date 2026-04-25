'use client';

import { useEffect } from 'react';

const WHATSAPP_NUMBER = '919558830499';

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

export default function SiteScripts() {
  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const cleanups: Array<() => void> = [];
    const addListener = <K extends keyof HTMLElementEventMap>(
      el: EventTarget | null,
      type: K | string,
      handler: EventListenerOrEventListenerObject,
      options?: AddEventListenerOptions
    ) => {
      if (!el) return;
      el.addEventListener(type as string, handler, options);
      cleanups.push(() => el.removeEventListener(type as string, handler, options));
    };

    // ===== Contact form -> WhatsApp =====
    const form = document.getElementById('enquiryForm') as HTMLFormElement | null;
    addListener(form, 'submit', (e) => {
      e.preventDefault();
      if (!form) return;
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const service = (data.get('service') || '').toString().trim();
      const location = (data.get('location') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      if (!name || !phone || !service) {
        alert('Please fill Name, Phone and Service.');
        return;
      }
      const lines = [
        '*New Enquiry — The Pacific CCTV*',
        '',
        `*Name:* ${name}`,
        `*Phone:* ${phone}`,
        `*Service:* ${service}`,
      ];
      if (location) lines.push(`*Location:* ${location}`);
      if (message) lines.push(`*Message:* ${message}`);
      lines.push('', `_Sent from website on ${new Date().toLocaleString()}_`);
      openWhatsApp(lines.join('\n'));
    });

    // ===== Service card pre-fill =====
    document.querySelectorAll<HTMLElement>('.card-link[data-service]').forEach((link) => {
      addListener(link, 'click', () => {
        const svc = link.dataset.service;
        const select = form?.querySelector<HTMLSelectElement>('select[name="service"]');
        if (!select) return;
        if (svc === 'Installation') select.value = 'CCTV Installation';
        else if (svc === 'Repair') select.value = 'CCTV Repair';
        else if (svc === 'Sales') select.value = 'Buy CCTV / Products';
      });
    });

    // ===== Product enquire buttons =====
    document.querySelectorAll<HTMLElement>('button[data-product]').forEach((btn) => {
      addListener(btn, 'click', () => {
        const product = btn.dataset.product;
        openWhatsApp(
          `Hi The Pacific, I want to enquire about *${product}*. Please share more details and price.`
        );
      });
    });

    // ===== WhatsApp Chatbot =====
    const waToggle = document.getElementById('waToggle');
    const waPanel = document.getElementById('waPanel') as HTMLElement | null;
    const waClose = document.getElementById('waClose');
    const waBadge = waToggle?.querySelector<HTMLElement>('.wa-badge');

    const setPanel = (open: boolean) => {
      if (!waPanel) return;
      waPanel.hidden = !open;
      if (open && waBadge) waBadge.style.display = 'none';
    };

    addListener(waToggle, 'click', () => setPanel(!!waPanel?.hidden));
    addListener(waClose, 'click', () => setPanel(false));

    document.querySelectorAll<HTMLElement>('.wa-quick button').forEach((btn) => {
      addListener(btn, 'click', () => {
        openWhatsApp(btn.dataset.msg || '');
        setPanel(false);
      });
    });

    addListener(document.getElementById('waOpenChat'), 'click', () => setPanel(false));

    addListener(document, 'click', (e) => {
      const target = e.target as HTMLElement | null;
      if (!waPanel?.hidden && target && !target.closest('#waBot')) setPanel(false);
    });

    const autoOpenTimer = window.setTimeout(() => {
      if (!sessionStorage.getItem('waBotShown')) {
        setPanel(true);
        sessionStorage.setItem('waBotShown', '1');
      }
    }, 6000);
    cleanups.push(() => window.clearTimeout(autoOpenTimer));

    // ===== Mobile menu =====
    const hamburger = document.getElementById('hamburger');
    const primaryNav = document.getElementById('primaryNav');
    addListener(hamburger, 'click', () => {
      hamburger?.classList.toggle('open');
      primaryNav?.classList.toggle('open');
    });
    primaryNav?.querySelectorAll('a').forEach((a) => {
      addListener(a, 'click', () => {
        hamburger?.classList.remove('open');
        primaryNav?.classList.remove('open');
      });
    });

    // ===== Sticky header on scroll =====
    const header = document.getElementById('siteHeader');
    const onScrollHeader = () => {
      if (window.scrollY > 30) header?.classList.add('scrolled');
      else header?.classList.remove('scrolled');
    };
    addListener(window, 'scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    // ===== Scroll progress bar =====
    const scrollProgress = document.getElementById('scrollProgress') as HTMLElement | null;
    const onScrollProgress = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      if (scrollProgress) scrollProgress.style.width = pct + '%';
    };
    addListener(window, 'scroll', onScrollProgress, { passive: true });

    // ===== Back to top =====
    const backToTop = document.getElementById('backToTop');
    addListener(
      window,
      'scroll',
      () => {
        if (window.scrollY > 500) backToTop?.classList.add('visible');
        else backToTop?.classList.remove('visible');
      },
      { passive: true }
    );
    addListener(backToTop, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ===== Scroll-triggered animations =====
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            window.setTimeout(() => el.classList.add('in-view'), delay);
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => animObserver.observe(el));
    cleanups.push(() => animObserver.disconnect());

    // ===== Animated counters =====
    const animateCounter = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.target || '0');
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      };
      requestAnimationFrame(tick);
    };
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>('.counter').forEach((c) => counterObserver.observe(c));
    cleanups.push(() => counterObserver.disconnect());

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
