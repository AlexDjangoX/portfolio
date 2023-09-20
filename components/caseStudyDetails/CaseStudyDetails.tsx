import { getCaseStudyDetails } from '@/sanity/sanity.query';

const CaseStudyDetails = async () => {
  const studyDetails = await getCaseStudyDetails();

  return <div>CaseStudyDetails</div>;
};

export default CaseStudyDetails;
