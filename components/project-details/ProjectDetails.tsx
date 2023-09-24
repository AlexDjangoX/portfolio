import { notFound } from 'next/navigation';

import { getCaseStudyByProjectName } from '@/sanity/sanity.query';
import {
  ProjectDetailsTopContent,
  ProjectDetailsDescription,
  ProjectDetailsTechStack,
  ProjectDetailsProblemStatement,
  FigmaDesign,
  ProjectDetailsProcess,
  ChallengesLearnings,
  OtherCaseStudies,
  CallToAction,
} from '.';

const ProjectDetails = async ({ projectId }: { projectId: string }) => {
  const project = await getCaseStudyByProjectName(projectId);

  if (!project) {
    notFound();
  }

  return (
    <section className="flex w-full flex-col">
      <ProjectDetailsTopContent
        headingUnderline={project?.headingUnderline}
        heading={project?.heading}
        imageUrl={project?.imageUrl}
        imageAlt={project?.imageAlt}
        demoSite={project?.demoSite}
        sourceCode={project?.sourceCode}
        myRole={project?.myRole}
        startDate={project?.startDate}
        endDate={project?.endDate}
      />
      <ProjectDetailsTechStack techStack={project?.techStack} />
      <ProjectDetailsDescription description={project?.description} />
      <ProjectDetailsProblemStatement
        problemStatement={project?.problemStatement}
        problemStatementImageUrl={project?.problemStatementImageUrl}
        problemStatementImageAlt={project?.problemStatementImageAlt}
      />
      <FigmaDesign
        figmaDesignUrl={project?.figmaDesignUrl}
        figmaDesignAlt={project?.figmaDesignAlt}
      />
      <ProjectDetailsProcess myProcess={project?.myProcess} />
      <ChallengesLearnings
        challenges={project?.challenges}
        learnings={project?.learnings}
      />
      <OtherCaseStudies otherCaseStudies={project?.otherCaseStudies} />
      <CallToAction />
    </section>
  );
};

export default ProjectDetails;
