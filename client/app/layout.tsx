// These styles apply to every route in the application
import './globals.css';

import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Radi Rusadi - Personal Website',
  description: 'These Website use for showcase portfolio & blogs'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
