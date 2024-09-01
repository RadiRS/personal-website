import React from 'react';
import Image from 'next/image';

import profileImg from '../public/images/profile.png';

const Intro = () => {
  return (
    <section className='flex flex-row items-start gap-x-10 gap-y-4'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&apos;m Radi.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&apos;m a software engineer based in Jakarta, Indonesia.
        </p>
      </div>
      <div className='relative'>
        <Image
          priority
          alt='Radi Rusadi'
          width={175}
          height={175}
          className='flex-1 rounded-lg grayscale'
          src={profileImg}
        />
      </div>
    </section>
  );
};

export default Intro;
