import { useState } from 'react';
import Link from 'next/link';

import user from '../../static/data/user';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menus = [
    { name: 'Home', isActive: true, href: '#' },
    { name: 'Portfolio', isActive: false, href: '#portfolio' },
    { name: 'About', isActive: false, href: '#about' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <a className="navbar-brand">{user.name}</a>
          </Link>
          <div className="navbar-nav-right">
            {menus.map((item) => (
              <a key={item.href} href={item.href}>
                {item.name}
              </a>
            ))}
            <a href="#hireme">
              <button className="btn box-shadow">Hire me</button>
            </a>
          </div>

          <button
            type="button"
            className={`hamburger ${isVisible ? 'open' : ''}`}
            id="menu-btn"
            onClick={() => setIsVisible(!isVisible)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="navbar-border" />
      </nav>

      <div className={`mobile-menu ${isVisible ? '' : 'hidden'}`} id="menu">
        {menus.map((item) => (
          <div key={item.href} onClick={() => setIsVisible(!isVisible)}>
            <a href={item.href}>{item.name}</a>
          </div>
        ))}
        <div onClick={() => setIsVisible(!isVisible)}>
          <a href="#hireme">
            <button className="btn box-shadow">Hire me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
