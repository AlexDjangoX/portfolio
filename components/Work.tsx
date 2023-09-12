import WorkCard from './WorkCard';
import { getWork } from '@/sanity/sanity.query';

type CardProps = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
};

const Work = async () => {
  const work = await getWork();
  return (
    <section className=" flex h-auto flex-col  justify-center bg-white-800 px-[5.3rem] py-[4.5rem] dark:bg-black-200 md:flex-row">
      <div className="flex flex-1  grow flex-col items-center justify-center rounded-lg bg-black-200 dark:bg-white-800">
        <div className="flex max-w-[22rem] flex-col">
          <h2 className="mb-[1.486rem] flex flex-col justify-center text-[2.25rem] font-bold leading-lineHeight_64 tracking-letterSpacing_64 text-white-900 dark:bg-white-800 dark:text-black-200 md:mb-[2.4rem] md:text-[3rem]">
            <span>Developer</span>
            <div>
              <span className="custom-underline z-10">Experi</span>ence
            </div>
          </h2>
          <p className="mt-[2.2rem] h-[5.4rem] w-[20rem] break-words text-[0.874rem] font-normal leading-[1.8rem] text-white-800 dark:text-white-500 md:text-[1.125rem]">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <div className="mt-6 flex items-center">
            <div
              style={{
                height: '1px',
                backgroundColor: 'black',
                width: `calc(100% - 2.19rem)`,
              }}
            />
            <div className="mr-[0.5rem]">
              <div className="flex h-[3.625rem] w-[3.625rem] items-center justify-center rounded-full border-1 text-white-900 dark:border-black md:h-[4.375rem] md:w-[4.375rem]">
                <div className="h-[2.125rem] w-[2.125rem] rounded-full bg-white-900 dark:bg-black md:h-[2.75rem] md:w-[2.75rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between  bg-white-800 dark:bg-black-200">
        {work.map((workItem: CardProps) => (
          <WorkCard
            key={workItem._id}
            title={workItem.title}
            subtitle={workItem.subtitle}
            description={workItem.description}
            imageSrc={workItem.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
