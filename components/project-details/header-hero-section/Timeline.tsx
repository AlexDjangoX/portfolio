import { TimelineType } from '@/types';

const Timeline = ({ myRole, startDate, endDate }: TimelineType) => (
  <div className="flex w-full flex-col justify-center bg-white-900 px-[1.5rem] py-[2.5rem] dark:bg-black-200 md:flex-row md:justify-around md:px-[10.5rem] ">
    <div className="flex-col">
      <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[1.269rem] text-black-400 dark:text-white-500  md:font-[1.125rem] md:leading-[1.8rem]">
        My Role
      </h4>
      <p className="mb-[2.25rem] font-semibold leading-[1.95rem] text-black-200 dark:text-white-900">
        {myRole}
      </p>
    </div>
    <div className="flex-col">
      <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[1.269rem] text-black-400 dark:text-white-500 md:font-[1.125rem] md:leading-[1.8rem]">
        Start Date
      </h4>
      <p className="mb-[2.25rem] font-semibold leading-[1.95rem] text-black-200 dark:text-white-900">
        {startDate}
      </p>
    </div>
    <div className="flex-col">
      <h4 className="mb-[0.625rem] text-[0.874rem] font-semibold leading-[1.269rem] text-black-400 dark:text-white-500 md:font-[1.125rem] md:leading-[1.8rem]">
        End Date
      </h4>
      <p className=" font-semibold leading-[1.95rem] text-black-200 dark:text-white-900">
        {endDate}
      </p>
    </div>
  </div>
);

export default Timeline;
