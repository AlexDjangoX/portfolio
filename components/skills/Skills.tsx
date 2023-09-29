import { notFound } from 'next/navigation';

import { getSkills } from '@/sanity/sanity.query';
import SkillsHeading from './SkillsHeading';
import SkillCard from './SkillCard';
import { SkillsType } from '@/types';

const Skills = async () => {
  const skills = await getSkills();

  if (!skills) {
    notFound();
  }

  return (
    <section className=" w-full bg-white-900 px-[1.5rem] py-[3rem] dark:bg-black-200 sm:px-[5.3rem]">
      <SkillsHeading />
      <div className="flex flex-wrap justify-center gap-[2.5rem] last:gap-y-0 sm:gap-y-[2.5rem] md:gap-[3.4rem]">
        {skills?.map((skill: SkillsType, index: number) => (
          <SkillCard
            index={index}
            key={skill._id}
            _id={skill._id}
            image={skill.image}
            altText={skill.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
