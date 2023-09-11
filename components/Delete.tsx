import React from 'react';

type Props = {};

const Delete = (props: Props) => {
  return (
    <div className="mx-[85px] my-[72px] flex  flex-col md:flex-row">
      <div className="m-[72px] h-[593px] max-w-[607px] bg-red-800">
        <div className="relative mb-[105px] ml-[105px] mr-[143px] mt-[152px]">
          <h2 className="mb-[40px] flex flex-col justify-center text-4xlplus font-bold leading-tightplus tracking-tightplus text-white-900 dark:bg-white-800 dark:text-black-200">
            <span>Work</span>
            <span className="flex justify-center">
              <span className="custom-underline z-10">Exper</span>ience
            </span>
          </h2>
          <p className="mt-[35px] h-[87px] w-[320px] break-words text-[18px] font-normal leading-[29px] text-white-500">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <div className="absolute bottom-0 right-0 flex items-center">
            <div
              style={{
                height: '1px',
                backgroundColor: 'black',
                width: `calc(100% - 35px)`,
              }}
            ></div>
            <div className="mr-[8px]">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-1 border-black">
                <div className="h-[44px] w-[44px] rounded-full bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[72px] h-[593px] w-[607px] bg-black-300">
        {cards.map((card, index) => (
          <div
            key={index}
            className="mx-[26px] my-[35px] flex h-[122px] w-[607px] items-center bg-white"
          >
            <Image src={card.imgSrc} width={32} height={32} alt="image" />
            <div className="ml-4">
              <h2 className="text-baseplus font-semibold leading-intermediate text-white-900">
                {card.title}
              </h2>
              <p className="text-base font-normal leading-extraLoose text-white-800">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete;
