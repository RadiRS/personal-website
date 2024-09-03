'use client';

import { ProjectMetaData } from '@/lib/project';

import Projects from './projects';
import ClientSearch from './client-search';

const ProjectsWithSearch = ({ data }: { data: ProjectMetaData[] }) => {
  return <ClientSearch searchKey='title' data={data} Content={<Projects />} />;
};

export default ProjectsWithSearch;
