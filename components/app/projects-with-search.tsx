'use client';

import { Metadata } from '@/lib/content';

import Projects from './projects';
import ClientSearch from './client-search';

const ProjectsWithSearch = ({ data }: { data: Metadata[] }) => {
  return <ClientSearch searchKey='title' data={data} Content={<Projects />} />;
};

export default ProjectsWithSearch;
