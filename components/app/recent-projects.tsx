import Link from 'next/link';

import Projects from './projects';
import { getProjects } from '@/lib/project';

const RecentProjects = async () => {
  const projects = await getProjects(4);

  return (
    <section className='pb-24'>
      <h1 className='title mb-12'>Recent Projects</h1>
      <Projects data={projects} />
      <Link
        href='/projects'
        className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
      >
        <span>All projects</span>
      </Link>
    </section>
  );
};

export default RecentProjects;
