import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { formatDate } from '@/lib/utils';
import { getProjectById, getProjects } from '@/lib/project';
import { MDXContent } from '@/components/app';

type ProjectDetailPage = {
  params: { slug: string };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPage) => {
  const { slug } = params;

  const project = await getProjectById(slug);

  if (!project) return notFound();

  const { metadata, content } = project;
  const { title, author, image, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
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
  const projects = await getProjects();

  const slugs = projects.map(project => ({
    slug: project.slug,
  }));

  return slugs;
};

export default ProjectDetailPage;
