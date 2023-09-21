import {
  ProjectDetailsHeader,
  ProjectDetailsImage,
  ProjectDetailsLinks,
  ProjectRoleTimeline,
} from '.';

import { ProjectDetailsTopType } from '@/types';

const ProjectDetailsTopContent = ({
  headingUnderline,
  heading,
  imageUrl,
  imageAlt,
  demoSite,
  sourceCode,
  myRole,
  startDate,
  endDate,
}: ProjectDetailsTopType) => (
  <>
    <ProjectDetailsHeader
      headingUnderline={headingUnderline}
      heading={heading}
    />
    <ProjectDetailsImage imageUrl={imageUrl} imageAlt={imageAlt} />
    <ProjectDetailsLinks demoSite={demoSite} sourceCode={sourceCode} />
    <ProjectRoleTimeline
      myRole={myRole}
      startDate={startDate}
      endDate={endDate}
    />
  </>
);

export default ProjectDetailsTopContent;
