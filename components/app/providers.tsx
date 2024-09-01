'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
