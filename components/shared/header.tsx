import {useState} from 'react';
import Link from 'next/link';

import user from '../../static/data/user';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menus = [
    {name: 'Home', isActive: true, href: '/'},
    {name: 'About', isActive: false, href: '/about'},
    {name: 'Portfolio', isActive: false, href: '/portfolio'}
  ];

  const onToggleNav = () => {
    setIsVisible(!isVisible);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/">
            <a className="navbar-brand uppercase">{user.name}</a>
          </Link>
          <div className="navbar-nav-right">
            {menus.map(item => (
              <Link key={item.href} href={item.href}>
                <a>{item.name}</a>
              </Link>
            ))}
            <Link href="/contact">
              <a>
                <button className="btn box-shadow">Hire me</button>
              </a>
            </Link>
          </div>

          <button
            type="button"
            className={`hamburger ${isVisible ? 'open' : ''}`}
            id="menu-btn"
            onClick={onToggleNav}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="navbar-border" />
      </nav>

      <div className={`mobile-menu ${isVisible ? '' : 'hidden'}`} id="menu">
        {menus.map(item => (
          <div key={item.href} onClick={onToggleNav}>
            <a href={item.href}>{item.name}</a>
          </div>
        ))}
        <div onClick={onToggleNav}>
          <a href="#hireMe">
            <button className="btn box-shadow">Hire me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
