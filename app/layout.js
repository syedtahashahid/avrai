import './globals.css';

export const metadata = {
  title: 'Avari Hotels & Resorts | Interactive 3D Virtual Tours & Showcase',
  description: 'Experience 3D 360-degree virtual room tours, fine dining, grand ballrooms, and luxury amenities for Avari Hotel Lahore and Avari Xpress Gulberg.',
  keywords: 'Avari Hotel Lahore, Avari Xpress Gulberg, 3D room tour, hotel virtual tour, luxury suites, Mall Road, Gulberg Lahore'
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
        {children}
      </body>
    </html>
  );
}
