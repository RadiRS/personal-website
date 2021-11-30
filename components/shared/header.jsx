import Link from 'next/link';

const Navbar = () => {
  const menus = [
    { name: 'Home', isActive: true, href: '#' },
    { name: 'Portfolio', isActive: false, href: '#portfolio' },
    { name: 'About', isActive: false, href: '#about' }
    //{ name: 'Hire me', isActive: false, href: '#hireme', custom: true }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/">
          <a className="navbar-brand">RADI RUSADI</a>
        </Link>
        <div className="navbar-nav-right">
          {menus.map((item) => (
            <a className="text-selected-text" key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
          <a href="#hireme">
            <button className="btn box-shadow">Hire me</button>
          </a>
        </div>
      </div>
      <div className="navbar-border" />
    </nav>
  );
};

export default Navbar;
