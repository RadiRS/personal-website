import Link from 'next/link';

import { getPosts } from '@/lib/post';

import Posts from './posts';

const RecentPosts = async () => {
  const posts = await getPosts(4);

  if (!posts.length) return null;

  return (
    <section className='pb-24'>
      <h1 className='title mb-12'>Recent Posts</h1>
      <Posts data={posts} />
      <Link
        href='/posts'
        className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
      >
        <span>All posts</span>
      </Link>
    </section>
  );
};

export default RecentPosts;
