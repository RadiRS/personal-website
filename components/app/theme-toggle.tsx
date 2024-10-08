'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const handleToggleTheme = () => {
    const theme = isDark ? 'light' : 'dark';

    setTheme(theme);
  };

  return (
    <Button size='sm' variant='ghost' onClick={handleToggleTheme}>
      {isDark ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
