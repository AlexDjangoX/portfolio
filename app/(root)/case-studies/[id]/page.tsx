import { ProjectDetailsInterface } from '@/types';
import ProjectDetails from '@/components/project-details/ProjectDetails';

const CaseStudiesDynamic = async ({ params }: ProjectDetailsInterface) => {
  const projectId = params.id;

  return <ProjectDetails projectId={projectId} />;
};

export default CaseStudiesDynamic;
