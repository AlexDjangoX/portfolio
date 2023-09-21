import Image from 'next/image';

import { getSkills } from '@/sanity/sanity.query';
import SkillsHeading from './SkillsHeading';
import { SkillsType } from '@/types';

const Skills = async () => {
  const skills = await getSkills();

  return (
    <section className="w-full bg-white-900 px-[1.5rem] py-[3rem] dark:bg-black-200 sm:px-[5.3rem]">
      <SkillsHeading />
      <div className="flex flex-wrap justify-center gap-[2.5rem] last:gap-y-0 sm:gap-y-[2.5rem] md:gap-[3.4rem]">
        {skills?.map((skill: SkillsType) => (
          <div key={skill?._id} className="mb-10">
            <div className="relative flex h-[3.3rem] w-[3.3rem] items-center justify-center overflow-hidden rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300 md:mx-6 md:h-[6.25rem] md:w-[6.25rem]">
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
