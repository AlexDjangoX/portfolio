'use client';

import React, { useState } from 'react';
import { useStore } from '@/app/store';

function Slider() {
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

  const contentMap: { [key: number]: string } = {
    0: 'Working as part of a full-time international development team, Team Algo Alliance, building world-class application from Professional Figma Designs. Leveraging the latest Technologies offered by Next JS 14 to create highly performant and scalable applications.',
    1: 'Graduated from Boolean as a Full Stack Software Developer. This was a deep dive into create-react-app along with Node and Express. This was the perfect preparation for the JSMastery course - an agile development experience, building real applications.',
    2: 'Completed a Python Specialization held by University of Michigin. This was my first experience with coding. It was completed over a three month period, and prepared me for the Boolean UK experience. After doing this I decided on the Web Development path.',
    3: 'Up-skilling and Continuos learning. Even though we have submitted our Capestone Assignment for the JS Mastery course, the original team are working on improving and adding features to Hipnode - Social Media Platform. Continuous learning and improvement.',
  };

  const currentContent = contentMap[sliderValue] || contentMap[3];

  return (
    <div className="mx-auto flex h-full w-full flex-col">
      <p
        className="mb-[1rem] mt-[2.2rem] h-fit text-[0.874rem] font-normal leading-[1.8rem] text-white-800 dark:text-white-500 md:text-[1.125rem]"
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
        max={3}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full py-4"
      />
    </div>
  );
}

export default Slider;
