import './globals.css';
import Header from './components/Header';
import SiteFooter from './components/SiteFooter';
import LuxuryLoader from './components/LuxuryLoader';

export const metadata = {
  title: 'Avari Hotels & Resorts | Immersive Room Experiences & Showcase',
  description: 'Experience immersive 360-degree room tours, fine dining, grand ballrooms, and luxury amenities for Avari Hotel Lahore and Avari Xpress Gulberg.',
  keywords: 'Avari Hotel Lahore, Avari Xpress Gulberg, immersive room tour, hotel virtual experience, luxury suites, Mall Road, Gulberg Lahore'
};

export default function RootLayout({ children }) {
  const currentTheme = process.env.NEXT_PUBLIC_THEME || 'obsidian-gold';

  return (
    <html lang="en" data-theme={currentTheme}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#090C12" />
      </head>
      <body>
        <LuxuryLoader />
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
