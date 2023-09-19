import { getCaseStudies } from '@/sanity/sanity.query';
import CaseStudiesHeading from './CaseStudiesHeadingContent';
import CaseStudiesCard from './CaseStudiesCard';
import { CaseStudiesCardProps } from '@/types';
import CallToAction from '../action/CallToAction';
import Link from 'next/link';

const CaseStudies = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <section className="flex w-full flex-col  dark:bg-black-200  ">
      <CaseStudiesHeading />
      <div className="flex  flex-col bg-white-900 dark:bg-black-200">
        <div className="mt-[3rem] flex flex-wrap justify-center gap-[3rem]">
          {caseStudies?.map((study: CaseStudiesCardProps) => (
            <Link key={study._id} href={`/case-studies/${study.projectName}`}>
              <CaseStudiesCard
                _id={study._id}
                heading={study.heading}
                projectName={study.projectName}
                subHeading={study.subHeading}
                image={study.image}
                altText={study.altText}
              />
            </Link>
          ))}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default CaseStudies;
