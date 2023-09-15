import { getProjects } from '@/sanity/sanity.query';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="flex justify-center bg-white-900 px-[1.2rem] py-[4.5rem] dark:bg-black-200 md:px-[5.4rem] lg:flex-row">
      <div className="flex max-w-7xl flex-col ">
        <h2 className="mb-[2.5rem] text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px]  text-black-200 dark:bg-black-200 dark:text-white-900 md:text-[3rem] lg:leading-[3.45rem] lg:tracking-[-0.48px]">
          Featured{' '}
          <div className="relative inline-flex ">
            <p className="z-20 ">Projects</p>
            <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1rem]" />
          </div>
        </h2>
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
      </div>
    </section>
  );
};

export default Projects;
