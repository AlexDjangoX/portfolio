import React from 'react';

import { getCaseStudyByProjectName } from '@/sanity/sanity.query';

interface StudyDetailProps {
  params: {
    id: string;
  };
}

const Page: React.FC<StudyDetailProps> = async ({ params }) => {
  const { id } = params;

  console.log(id);

  const project = await getCaseStudyByProjectName(id);

  console.log(project);

  return <div>Page</div>;
};

export default Page;
