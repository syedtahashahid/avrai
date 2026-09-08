import './globals.css';
import Header from './components/Header';
import SiteFooter from './components/SiteFooter';

export const metadata = {
  title: 'Avari Hotels & Resorts | Immersive Room Experiences & Showcase',
  description: 'Experience immersive 360-degree room tours, fine dining, grand ballrooms, and luxury amenities for Avari Hotel Lahore and Avari Xpress Gulberg.',
  keywords: 'Avari Hotel Lahore, Avari Xpress Gulberg, immersive room tour, hotel virtual experience, luxury suites, Mall Road, Gulberg Lahore'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#090C12" />
      </head>
      <body>
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
