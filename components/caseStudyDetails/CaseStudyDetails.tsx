import { getCaseStudyDetails } from '@/sanity/sanity.query';

const CaseStudyDetails = async () => {
  const studyDetails = await getCaseStudyDetails();

  console.log(studyDetails);
  return <div>CaseStudyDetails</div>;
};

export default CaseStudyDetails;
