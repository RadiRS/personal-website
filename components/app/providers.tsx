'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import Toaster from './toaster';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
