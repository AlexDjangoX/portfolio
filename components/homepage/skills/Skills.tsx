import { notFound } from 'next/navigation';

import { getSkills } from '@/sanity/sanity.query';
import SkillsHeading from './SkillsHeading';
import TechIcons from '@/components/reusable/TechIcons';
import { SkillsType } from '@/types';

const Skills = async () => {
  const skills = await getSkills();
  if (!skills) notFound();

  return (
    <section className="w-full bg-white-900  dark:bg-black-200">
      <div className="px-[1.5rem] py-[3rem] md:px-[5.3125rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <SkillsHeading />
        <div className="flex flex-wrap justify-between gap-x-[2.5rem] gap-y-[3rem] md:gap-x-[3.8rem] md:gap-y-[5.7rem] ">
          {skills?.map((skill: SkillsType, index: number) => (
            <TechIcons
              index={index}
              key={skill._id}
              id={skill._id}
              image={skill.image}
              altText={skill.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
