import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

import { cn } from '@/lib/utils';
import { Footer, Header, Providers } from '@/components/app';

const myFont = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Radi Rusadi',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          myFont.className,
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
