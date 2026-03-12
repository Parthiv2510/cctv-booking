import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "The Pacific | Vision. Reimagined.",
  description: "The most advanced security system ever. Pure, powerful, and private. Protect what matters with The Pacific.",
  keywords: "The Pacific CCTV, security cameras, home security, business security, surveillance systems, buy CCTV",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "The Pacific | Vision. Reimagined.",
    description: "Expert CCTV installation and maintenance with a focus on privacy and clarity.",
    type: "website",
    locale: "en_US",
    url: "https://the-pacific-cctv.vercel.app",
    siteName: "The Pacific",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pacific | Security Reimagined",
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
    'name': 'The Pacific',
    'image': 'https://the-pacific-cctv.vercel.app/logo.png',
    'description': 'Advanced security and surveillance systems.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Security St',
      'addressLocality': 'Secure City',
      'addressRegion': 'SC',
      'postalCode': '12345',
      'addressCountry': 'US'
    },
    'telephone': '+1234567890',
    'url': 'https://the-pacific-cctv.vercel.app',
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
