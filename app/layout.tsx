import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SecureEye CCTV | Professional Security Camera Installation",
  description: "Protect your home and business with SecureEye CCTV solutions. Professional installation, 24/7 monitoring, and high-quality cameras. Book a site survey today.",
  keywords: "CCTV installation, security cameras, home security, business security, surveillance systems, book CCTV survey",
  openGraph: {
    title: "SecureEye CCTV | Professional Security Camera Installation",
    description: "Expert CCTV installation and maintenance for residential and commercial properties.",
    type: "website",
    locale: "en_US",
    url: "https://secureeye-cctv.vercel.app",
    siteName: "SecureEye CCTV",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureEye CCTV | Security Camera Experts",
    description: "Reliable surveillance solutions for your peace of mind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'SecureEye CCTV',
    'image': 'https://secureeye-cctv.vercel.app/logo.png',
    'description': 'Professional CCTV installation and monitoring services.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Security St',
      'addressLocality': 'Secure City',
      'addressRegion': 'SC',
      'postalCode': '12345',
      'addressCountry': 'US'
    },
    'telephone': '+1234567890',
    'url': 'https://secureeye-cctv.vercel.app',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
