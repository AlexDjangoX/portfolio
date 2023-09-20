import { getCaseStudyByProjectName } from '@/sanity/sanity.query';

import ProjectDetailsDescription from './ProjectDetailsDescription';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsImage from './ProjectDetailsImage';
import ProjectDetailsLinks from './ProjectDetailsLinks';
import ProjectDetailsTechStack from './ProjectDetailsTechStack';
import ProjectRoleTimeline from './ProjectRoleTimeline';
import ProjectDetailsProblemStatement from './ProjectDetailsProblemStatement';
import FigmaDesign from './FigmaDesign';
import ProjectDetailsProcess from './ProjectDetailsProcess';
import ChallengesLearnings from './ChallengesLearnings';
import CallToAction from '../action/CallToAction';
import OtherCaseStudies from './OtherCaseStudies';

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
