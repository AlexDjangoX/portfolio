import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProjects } from '@/sanity/sanity.query';
import ProjectCard from './ProjectCard';
import { ProjectCardProps } from '@/types';
import ProjectHeading from './ProjectHeading';
import CustomButton from '@/components/reusable/CustomButton';

const Projects = async () => {
  const projects = await getProjects();

  if (!projects) notFound();

  return (
    <section className="flex justify-center bg-white-900 px-[1.2rem] py-[4.5rem] dark:bg-black-200 md:px-[5.4rem] lg:flex-row">
      <div className="flex max-w-[80rem] flex-col ">
        <ProjectHeading />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-[2.5rem]">
          {projects?.map((project: ProjectCardProps, index: number) => (
            <ProjectCard key={project._id} {...project} index={index} />
          ))}
        </div>
        <Link
          className="mx-auto mt-[3rem] flex max-w-[20rem]"
          href="/case-studies"
        >
          <CustomButton title="See more case studies" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
