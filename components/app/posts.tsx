import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import { Metadata } from '@/lib/content';

type PostsProps = {
  data?: Metadata[];
};

const Posts = ({ data }: PostsProps) => {
  return (
    <ul className='flex flex-col gap-8'>
      {data?.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            {!!post.image && (
              <Image
                alt={post.slug}
                src={post.image}
                width={200}
                height={200}
                className='rounded-lg'
              />
            )}
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{post.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
              {!!post.publishedAt && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
