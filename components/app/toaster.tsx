'use client';

import { useTheme } from 'next-themes';
import { Toaster as SonToaster, ToasterProps } from 'sonner'; // Ensure ToasterProps is imported if needed

const Toaster = () => {
  const { theme } = useTheme();

  return <SonToaster theme={theme as ToasterProps['theme']} />;
};

export default Toaster;
