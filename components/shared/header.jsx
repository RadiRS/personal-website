import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menus = [
    { name: 'Home', isActive: true, href: '#' },
    { name: 'Portfolio', isActive: false, href: '#portfolio' },
    { name: 'About', isActive: false, href: '#about' }
    //{ name: 'Hire me', isActive: false, href: '#hireme', custom: true }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <a className="navbar-brand">RADI RUSADI</a>
          </Link>
          <div className="navbar-nav-right">
            {menus.map((item) => (
              <a
                //className="text-selected-text"
                key={item.href}
                href={item.href}
              >
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
          <div key={item.href}>
            <a href={item.href}>{item.name}</a>
          </div>
        ))}
        <div>
          <a href="#hireme">
            <button className="btn box-shadow">Hire me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
