import Link from 'next/link';

import {
  CaseStudiesHeading,
  CaseStudiesCard,
  getCaseStudies,
  CallToAction,
} from '.';
import { CaseStudiesCardType } from '@/types';

const CaseStudies = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <section className="flex w-full flex-col  dark:bg-black-200  ">
      <CaseStudiesHeading />

      <div className="flex  flex-col bg-white-900 dark:bg-black-200">
        <div className="mt-[3rem] flex flex-wrap justify-center gap-[3rem]">
          {caseStudies?.map((study: CaseStudiesCardType) => (
            <Link key={study._id} href={`/case-studies/${study.projectName}`}>
              <CaseStudiesCard {...study} />
            </Link>
          ))}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default CaseStudies;
