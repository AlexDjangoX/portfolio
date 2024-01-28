'use client';

import React, { ReactNode, useState } from 'react';
import { useStore } from '@/app/store';

function ExperienceSlider() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [contentOpacity, setContentOpacity] = useState<number>(1);
  const { setSliderValueGlobal } = useStore();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setContentOpacity(0);
    setTimeout(() => {
      setSliderValueGlobal(newValue);
      setSliderValue(newValue);
      setContentOpacity(1);
    }, 300);
  };
  <em className="text-primary-light dark:text-primary-dark">{` `}</em>;
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
        held by University of Michigin. This was my first experience with
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

  const currentContent = contentMap[sliderValue] || contentMap[3];

  return (
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
  );
}

export default ExperienceSlider;
