import { notFound } from 'next/navigation';

import WorkCard from './ExperienceCard';
import { getWork } from '@/sanity/sanity.query';
import { WorkCardType } from '@/types';
import WorkHeader from './ExperienceHeader';
import Slider from './ExperienceSlider';

const Experience = async () => {
  const experience = await getWork();

  if (!experience) notFound();

  return (
    <section className="flex h-full w-full flex-col  justify-center  bg-white-800 px-[1.2rem] py-[4.5rem] dark:bg-black-200 md:px-[5.4rem] xl:flex-row">
      <div className="flex w-full max-w-[80rem] flex-col items-center  xl:flex-row">
        <div className="my-2 flex h-full w-full max-w-3xl flex-col items-center justify-start rounded-lg bg-black-200 px-[2.375rem] pb-[2.375rem] pt-[3.5rem] shadow-cardShadowSmallBlue dark:bg-white-800 dark:shadow-cardShadowSmall md:p-[2rem] xl:mr-4">
          <div className="flex h-full w-full flex-col">
            <WorkHeader />
            <Slider />
          </div>
        </div>
        <div className="mt-4 flex w-full max-w-3xl flex-col  justify-around space-y-4 bg-white-800 dark:bg-black-200">
          {experience.map((workItem: WorkCardType, index: number) => (
            <WorkCard
              key={workItem._id}
              title={workItem.title}
              subtitle={workItem.subtitle}
              description={workItem.description}
              certificateLink={workItem.certificateLink}
              certified={workItem.certified}
              index={index}
              imgSrc={workItem.imgSrc}
              _id={workItem._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
