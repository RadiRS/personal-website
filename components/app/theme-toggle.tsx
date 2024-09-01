'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggleTheme = () => {
    const theme = resolvedTheme === 'dark' ? 'light' : 'dark';

    setTheme(theme);
  };

  return (
    <Button size='sm' variant='ghost' onClick={handleToggleTheme}>
      <span>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
