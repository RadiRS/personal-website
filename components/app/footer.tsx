import user from '@/lib/user';

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigations.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='text-sm'>{item.name}</span>
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Pace Programmer. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const navigations = [
  {
    name: 'LinkedIn',
    href: user.socials.linkedin,
  },
  {
    name: 'Github',
    href: user.socials.github,
  },
  {
    name: 'Instagram',
    href: user.socials.instagram,
  },
];

export default Footer;
