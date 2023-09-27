import { Header, ApplicationHeroImage, SiteGitLinks, Timeline } from '..';

import { TopContentType } from '@/types';

const TopContent = ({
  headingUnderline,
  heading,
  imageUrl,
  imageAlt,
  demoSite,
  sourceCode,
  myRole,
  startDate,
  endDate,
}: TopContentType) => (
  <div className="overflow:hidden bg-white-800 dark:bg-black-300">
    <Header headingUnderline={headingUnderline} heading={heading} />
    <ApplicationHeroImage imageUrl={imageUrl} imageAlt={imageAlt} />
    <SiteGitLinks demoSite={demoSite} sourceCode={sourceCode} />
    <Timeline myRole={myRole} startDate={startDate} endDate={endDate} />
  </div>
);

export default TopContent;
