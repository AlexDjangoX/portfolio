import React from 'react';
import { getProjects } from '@/sanity/sanity.query';
import ProjectCard from './ProjectCard';

type Project = {
  _id: string;
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="flex justify-center bg-white-900 px-[1.5rem] dark:bg-black-200 md:px-[5.3rem] md:py-[4.5rem]">
      <div className="flex  max-w-7xl flex-col ">
        <h2 className="mb-[2.5rem] flex justify-center text-[3rem] font-bold leading-tightplus tracking-tightplus text-black-200 dark:bg-black-300 dark:text-white-900">
          Featured
          <div>
            <span className="custom-underline z-10 mx-4">Projects</span>
          </div>
        </h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-[2.5rem]">
          {projects?.map((project: Project, index) => (
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
