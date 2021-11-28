import Link from 'next/link';
const Navbar = () => {
  const menus = [
    { name: 'Home', isActive: true, href: '/' },
    { name: 'Portfolio', isActive: false, href: '#portfolio' },
    { name: 'Abaut', isActive: false, href: '#about' },
    { name: 'Hire Me', isActive: false, href: '#hireme' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Link href="/">
        <a>RADI RUSADI</a>
      </Link>
      <div>
        {menus.map((item) => (
          <Link href={item.href} key={item.href}>
            <a>{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
