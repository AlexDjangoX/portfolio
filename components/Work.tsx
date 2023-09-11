import WorkCard from './WorkCard';

type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const Work = () => {
  const cards: CardProps[] = [
    // Add your card data here.
  ];

  return (
    <div className="flex h-[737px] flex-col px-[85px] py-[72px] pt-32 md:flex-row">
      <div className="flex max-w-[607px] shrink-0 grow flex-col justify-center rounded-lg bg-black-200 dark:bg-white-800">
        <div className="mb-[105px] ml-[105px] mr-[143px] mt-[152px]">
          <h2 className="mb-[40px] flex flex-col justify-center text-[48px] font-bold leading-tightplus tracking-tightplus text-white-900 dark:bg-white-800 dark:text-black-200">
            <span>Work</span>
            <div>
              <span className="custom-underline z-10">Experi</span>ence
            </div>
          </h2>
          <p className="mt-[35px] h-[87px] w-[320px] break-words text-[18px] font-normal leading-[29px] text-white-800 dark:text-white-500">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <div className="mt-6 flex items-center">
            <div
              style={{
                height: '1px',
                backgroundColor: 'black',
                width: `calc(100% - 35px)`,
              }}
            />
            <div className="mr-[8px]">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-1 text-white-900 dark:border-black">
                <div className="h-[44px] w-[44px] rounded-full bg-white-900 dark:bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[607px] shrink-0 grow bg-slate-500">
        <div className="mb-[105px] ml-[105px] mr-[143px] mt-[152px]">
          <div className="bg-red-200">Element 1</div>
          <div className="mt-4 bg-blue-200">Element 2</div>
          <div className="mt-4 bg-green-200">Element 3</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
