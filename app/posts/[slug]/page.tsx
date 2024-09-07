import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { formatDate } from '@/lib/utils';
import { getPostById, getPosts } from '@/lib/post';
import { MDXContent } from '@/components/app';

type PostDetailPageProps = {
  params: { slug: string };
};

const EMPTY = 'EMPTY';

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { slug } = params;

  if (slug === EMPTY) return notFound();

  const posts = await getPostById(slug);

  if (!posts) return notFound();

  const { metadata, content } = posts;
  const { title, author, image, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {!!image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              fill
              src={image}
              alt={title || 'img'}
              className='object-cover'
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
};

export const generateStaticParams = async () => {
  const posts = await getPosts();

  // Require to prevent build error for empty content
  if (!posts.length) return [{ slug: EMPTY }];

  const slugs = posts.map(post => ({
    slug: post.slug,
  }));

  return slugs;
};

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const project = await getPostById(slug);

  return {
    title: project?.metadata?.title,
    description: project?.metadata.summary,
    twitter: {
      title: project?.metadata?.title,
      description: project?.metadata.summary,
      images: [project?.metadata.image || ''],
    },
    openGraph: {
      title: project?.metadata?.title,
      description: project?.metadata.summary,
      images: [project?.metadata.image || ''],
    },
  };
}

export default PostDetailPage;
