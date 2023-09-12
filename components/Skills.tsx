import React from 'react';
import Image from 'next/image';

import { getSkills } from '@/sanity/sanity.query';

type SkillsProps = {
  _id: string;
  image: string;
  altText: string;
};

const Skills: React.FC = async () => {
  const skills = await getSkills();

  return (
    <section className="bg-white-900 px-[5.3125rem] py-[4.5rem] dark:bg-black-200">
      <h2 className="mb-[2.5rem] flex justify-center text-4xlplus font-bold leading-tightplus tracking-tightplus text-black-200 dark:bg-black-200 dark:text-white-900">
        <span className="custom-underline z-10">My Skills</span> <br />
      </h2>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-[2.5rem]">
        {skills?.map((skill: SkillsProps) => (
          <div key={skill?._id} className="mb-10">
            <div className="relative mx-6 flex h-[6.25rem] w-[6.25rem] items-center justify-center overflow-hidden rounded-full bg-white-800 transition-transform duration-150 hover:scale-105 dark:bg-black-300">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={skill?.image}
                  alt={skill?.altText}
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
