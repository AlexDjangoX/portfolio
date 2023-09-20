import Link from 'next/link';

import { getProjects } from '@/sanity/sanity.query';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';
import ProjectHeading from './ProjectHeading';
import CustomButton from '../reusable/CustomButton';

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section className="flex justify-center bg-white-900 px-[1.2rem] py-[4.5rem] dark:bg-black-200 md:px-[5.4rem] lg:flex-row">
      <div className="flex max-w-7xl flex-col ">
        <ProjectHeading />
        <div className="flex  flex-wrap justify-center gap-x-4 gap-y-[2.5rem]">
          {projects?.map((project: Project, index: number) => (
            <ProjectCard
              key={project._id}
              heading={project.heading}
              projectName={project.projectName}
              image={project.image}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
        <Link
          className="mx-auto mt-[3rem] flex max-w-[20rem] "
          href="/case-studies"
        >
          <CustomButton title="See more case studies" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
