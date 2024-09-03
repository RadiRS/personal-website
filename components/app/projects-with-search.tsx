'use client';

import { ProjectMetaData } from '@/lib/project';
import { Projects, ClientSearch } from '@/components/app';

const ProjectsWithSearch = ({ data }: { data: ProjectMetaData[] }) => {
  return <ClientSearch searchKey='title' data={data} Content={<Projects />} />;
};

export default ProjectsWithSearch;
