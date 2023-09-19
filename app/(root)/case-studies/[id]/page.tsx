import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getCaseStudyByProjectName } from '@/sanity/sanity.query';
import { git, site, blueArrow } from '@/public/assets/index';

interface StudyDetailProps {
  params: {
    id: string;
  };
}

const Page: React.FC<StudyDetailProps> = async ({ params }) => {
  const { id } = params;

  console.log(id);

  const project = await getCaseStudyByProjectName(id);

  console.log(project);

  return (
    <section className="flex w-full flex-col items-center justify-center ">
      <div className=" flex flex-col justify-center  bg-white-800 md:mt-[6rem]">
        <h3 className=" mb-[0.636rem] mt-[6rem] text-center text-[0.875rem] font-semibold leading-[130%] tracking-[4.2px] text-primary-light md:mb-[1.875rem] md:font-semibold md:leading-[130%] md:tracking-[6px] ">
          WEB DEV PROJECT
        </h3>
        <h2 className=" text-center text-[2.625rem] font-bold leading-[115%] tracking-[-0.42px] text-black-200 dark:bg-black-200 dark:text-white-900  md:text-[4rem] md:leading-[130%] md:tracking-[-0.64px]  ">
          <div className="relative inline-flex ">
            <p className="z-20 ">{project.headingUnderline}</p>
            <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-14  md:h-[1rem]" />
          </div>
          {' - '} {project.heading}
        </h2>
        <div className="mx-auto flex items-center justify-center py-[1.5rem]  md:mt-[3.5rem] md:h-[350px] md:w-[742px]">
          <Image
            className=" md:h-[350px] md:w-[742px]"
            src={project.imageUrl}
            width={345}
            height={163}
            alt={project.imageAlt}
          />
        </div>
        <div className="mt-[1.563rem] flex justify-center">
          <Link
            className="mr-[2.563rem] flex font-semibold text-primary-light md:text-[1.25rem]"
            href={project.demoSite}
            target={'_blank'}
          >
            <Image
              className="mr-2"
              src={site}
              height={20}
              width={20}
              alt="site"
            />
            Demo Site
            <Image
              className="ml-2"
              src={blueArrow}
              height={20}
              width={20}
              alt="site"
            />
          </Link>
          <Link
            className="flex font-semibold text-primary-light md:text-[1.25rem]"
            href={project.sourceCode}
            target={'_blank'}
          >
            <Image
              className="mr-2 "
              src={git}
              height={20}
              width={20}
              alt="site"
            />
            Source Code
            <Image
              className="ml-2"
              src={blueArrow}
              height={20}
              width={20}
              alt="site"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center px-[1.5rem] py-[2.5rem] md:flex-row md:justify-around ">
          <div className="flex-col">
            <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[145%] text-black-400  md:font-[1.125rem] md:leading-[160%]">
              My Role
            </h4>
            <p className="mb-[2.25rem] font-semibold leading-[130%] text-black-200">
              {project.myRole}
            </p>
          </div>
          <div className="flex-col">
            <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[145%] text-black-400  md:font-[1.125rem] md:leading-[160%]">
              Start Date
            </h4>
            <p className="mb-[2.25rem] font-semibold leading-[130%] text-black-200">
              {project.startDate}
            </p>
          </div>
          <div className="flex-col">
            <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[145%] text-black-400  md:font-[1.125rem] md:leading-[160%]">
              End Date
            </h4>
            <p className="mb-[2.25rem] font-semibold leading-[130%] text-black-200">
              {project.endDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
