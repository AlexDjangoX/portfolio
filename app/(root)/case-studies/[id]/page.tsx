import React from 'react';
import { ProjectDetailsProps } from '@/types';
import ProjectDetails from '@/components/project-details/ProjectDetails';

const Page: React.FC<ProjectDetailsProps> = async ({ params }) => {
  const projectId = params.id;

  return <ProjectDetails projectId={projectId} />;
};

export default Page;
