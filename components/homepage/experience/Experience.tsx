'use client';

import { ReactNode, useEffect, useState, ChangeEvent } from 'react';

import { getWork } from '@/sanity/sanity.query';
import { WorkCardType } from '@/types';
import ExperienceCard from './ExperienceCard';
import ExperienceHeader from './ExperienceHeader';

const Experience = () => {
  const [experience, setExperience] = useState<WorkCardType[]>([]);
  const [contentOpacity, setContentOpacity] = useState<number>(1);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setContentOpacity(0);
    setTimeout(() => {
      setSliderValue(newValue);
      setContentOpacity(1);
    }, 300);
  };

  useEffect(() => {
    (async () => {
      const experience = await getWork();
      setExperience(experience);
    })();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoSliding) {
        setSliderValue((prev) => (prev === 4 ? 0 : prev + 1));
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [isAutoSliding]);

  const pauseSlider = () => setIsAutoSliding(false);
  const resumeSlider = () => setIsAutoSliding(true);

  const contentMap: { [key: number]: ReactNode } = {
    0: (
      <>
        <p>
          <em className="text-primary-light dark:text-primary-dark">
            Milestones and achievements {` `}
          </em>
          along the way. I wrote my first line of code in early 2020 at the age
          of 49. I have been on a steep learning curve ever since.
        </p>
      </>
    ),
    1: (
      <>
        <p>
          <em className="text-primary-light dark:text-primary-dark">
            JSMastery Summer Cohort 2023: {`  `}
          </em>
          A dynamic, mentor-led, project-driven course. Our Agile Dev Team
          crafted four stunning, full-stack applications, each uniquely
          showcased on this remarkable portfolio website, all expertly
          constructed based on original designs from Figma.
        </p>
      </>
    ),
    2: (
      <p>
        Graduated from{' '}
        <em className="text-primary-light dark:text-primary-dark">
          Boolean UK {`  `}
        </em>{' '}
        as a Full Stack Software Developer. This was a deep dive into
        create-react-app along with Node and Express. This was the perfect
        preparation for the JSMastery course - an agile development experience,
        building real applications.
      </p>
    ),
    3: (
      <p>
        Completed a{' '}
        <em className="text-primary-light dark:text-primary-dark">
          Python Specialization{`  `}
        </em>{' '}
        held by University of Michigan. This was my first experience with
        coding. It was completed over a three month period, and prepared me for
        the Boolean UK experience. After doing this I decided on the Web
        Development path.
      </p>
    ),
    4: (
      <p>
        <em className="text-primary-light dark:text-primary-dark">
          Up-skilling and Continuos learning: {`  `}
        </em>{' '}
        by working on my own project creating a Polish Verb Conjugation
        Application. A project that I am passionate about and has the interest
        of my Polish teacher and other students.
      </p>
    ),
  };

  const currentContent = contentMap[sliderValue];

  return (
    <section className="flex h-full w-full flex-col  justify-center  bg-white-800 px-[1.2rem] py-[4.5rem] dark:bg-black-200 md:px-[5.4rem] xl:flex-row">
      <div
        onMouseEnter={pauseSlider}
        onMouseLeave={resumeSlider}
        className="flex w-full max-w-[80rem] flex-col items-center  xl:flex-row"
      >
        <div
          onMouseEnter={pauseSlider}
          onMouseLeave={resumeSlider}
          className="my-2 flex h-full w-full max-w-3xl flex-col items-center justify-start rounded-lg bg-black-200 px-[2.375rem] pb-[2.375rem] pt-[3.5rem] shadow-cardShadowSmallBlue dark:bg-white-800 dark:shadow-cardShadowSmall md:p-[2rem] xl:mr-4"
        >
          <div className="flex h-full w-full flex-col">
            <ExperienceHeader />
            <div className="mx-auto flex h-full w-full flex-col">
              <p
                className="mb-[1rem] mt-[2.2rem] h-fit min-h-[9rem] text-[0.874rem] font-normal leading-[1.8rem] text-white-800 dark:text-white-500 md:text-[1.125rem]"
                style={{ opacity: contentOpacity, transition: 'opacity 0.3s' }}
              >
                {currentContent}
              </p>
              <p className="mb-3 py-4 text-[0.874rem] font-normal leading-[1.8rem] text-white-800 dark:text-white-500 md:text-[1.125rem]">
                👉 Slide the bar to reveal details of my web experience.
              </p>
              <input
                type="range"
                min={0}
                max={4}
                step={1}
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full py-4"
              />
            </div>
          </div>
        </div>
        <div
          onMouseEnter={pauseSlider}
          onMouseLeave={resumeSlider}
          className="mt-4 flex w-full max-w-3xl flex-col  justify-around space-y-4 bg-white-800 dark:bg-black-200"
        >
          {experience.map((workItem: WorkCardType, index: number) => (
            <ExperienceCard
              key={workItem._id}
              title={workItem.title}
              subtitle={workItem.subtitle}
              description={workItem.description}
              certificateLink={workItem.certificateLink}
              certified={workItem.certified}
              index={index}
              imgSrc={workItem.imgSrc}
              _id={workItem._id}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
