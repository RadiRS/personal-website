'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import ThemeToggle from './theme-toggle';

const paths = [
  {
    href: '/posts',
    label: 'Posts',
  },
  {
    href: '/projects',
    label: 'Projects',
  },

  {
    href: '/contact',
    label: 'Contect',
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='text-2xl font-bold'>
            {`<R.>`}
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          {paths.map(path => (
            <li
              key={path.href}
              className={cn('transition-colors hover:text-foreground', {
                'text-foreground': pathname === path.href,
              })}
            >
              <Link href={path.href}>{path.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
