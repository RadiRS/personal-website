import React from 'react';
import Link from 'next/link';

import styles from '../../styles/main.module.scss';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {title} = props;

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>

      <p>{title}</p>
    </div>
  );
};

export default Header;
