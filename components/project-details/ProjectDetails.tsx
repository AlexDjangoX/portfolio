import { getCaseStudyByProjectName } from '@/sanity/sanity.query';

import ProjectDetailsDescription from './ProjectDetailsDescription';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsImage from './ProjectDetailsImage';
import ProjectDetailsLinks from './ProjectDetailsLinks';
import ProjectDetailsTechStack from './ProjectDetailsTechStack';
import ProjectRoleTimeline from './ProjectRoleTimeline';

const ProjectDetails = async ({ projectId }: { projectId: string }) => {
  const project = await getCaseStudyByProjectName(projectId);

  return (
    <section className="flex w-full flex-col">
      <ProjectDetailsHeader
        headingUnderline={project?.headingUnderline}
        heading={project?.heading}
      />
      <ProjectDetailsImage
        imageUrl={project?.imageUrl}
        imageAlt={project?.imageAlt}
      />
      <ProjectDetailsLinks
        demoSite={project?.demoSite}
        sourceCode={project?.sourceCode}
      />
      <ProjectRoleTimeline
        myRole={project?.myRole}
        startDate={project?.startDate}
        endDate={project?.endDate}
      />
      <ProjectDetailsTechStack techStack={project?.techStack} />
      <ProjectDetailsDescription description={project?.description} />
    </section>
  );
};

export default ProjectDetails;
