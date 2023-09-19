import { getCaseStudyDetails } from '@/sanity/sanity.query';

const CaseStudyDetails = async () => {
  const studyDetails = getCaseStudyDetails();

  console.log(studyDetails);
  return <div>CaseStudyDetails</div>;
};

export default CaseStudyDetails;
