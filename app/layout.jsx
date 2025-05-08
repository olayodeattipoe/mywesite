import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pasmen Pasara - Modern POS System for Your Business',
  description: 'Streamline your business with Pasara POS - the all-in-one point of sale system for retail stores, restaurants, and service businesses.',
  icons: {
    icon: [
      { url: '/images/logos/PasaraLogoV1.jpg', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/images/logos/PasaraLogoV1.jpg', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/logos/PasaraLogoV1.jpg" />
        <link rel="apple-touch-icon" href="/images/logos/PasaraLogoV1.jpg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
} 