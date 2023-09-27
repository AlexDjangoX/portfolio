import { Header, DetailsImage, DetailsLinks, Timeline } from '..';

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
  <>
    <Header headingUnderline={headingUnderline} heading={heading} />
    <DetailsImage imageUrl={imageUrl} imageAlt={imageAlt} />
    <DetailsLinks demoSite={demoSite} sourceCode={sourceCode} />
    <Timeline myRole={myRole} startDate={startDate} endDate={endDate} />
  </>
);

export default TopContent;
