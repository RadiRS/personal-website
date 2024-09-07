import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

import user from '@/lib/user';

const {
  socials,
  skill: { tools, programming, framework },
} = user;

const skills = [...programming, ...framework, ...tools];

const Intro = () => {
  return (
    <section className='flex flex-col items-start gap-10 pb-24 md:flex-row'>
      <div className='flex-1'>
        <h1 className='text-4xl font-bold'>{user.intro}</h1>
        <p className='mt-3 text-lg'>{user.description}</p>
        <div className='mt-5'>
          <h2 className='text-xl font-semibold'>Skills</h2>
          <div className='mt-2 flex flex-wrap gap-2'>
            {skills.map(item => (
              <span
                key={item}
                className='rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-10 flex gap-2'>
          <Link target='_blank' href={socials.linkedin}>
            <LinkedInLogoIcon width={30} height={30} />
          </Link>
          <Link target='_blank' href={socials.github}>
            <GitHubLogoIcon width={30} height={30} />
          </Link>
          <Link target='_blank' href={socials.instagram}>
            <InstagramLogoIcon width={30} height={30} />
          </Link>
          <Link target='_blank' href={user.link_cv} className='ml-3'>
            <p className='text-lg font-semibold'>Get CV</p>
          </Link>
        </div>
      </div>
      <div className='relative hidden md:block'>
        <Image
          priority
          alt='Radi Rusadi'
          width={175}
          height={175}
          src={user.avatar}
        />
      </div>
    </section>
  );
};

export default Intro;
