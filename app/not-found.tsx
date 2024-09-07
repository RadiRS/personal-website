import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <section className='container flex min-h-full justify-center gap-8 pb-24 pt-40'>
      <p className='text-4xl font-bold text-muted-foreground'>404</p>
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-semibold'>Page not found</p>
        <p className='mb-8 text-base text-muted-foreground'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to home</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
