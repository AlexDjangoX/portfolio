import CallToActionButton from './CallToActionButton';
import CallToActionHeader from './CallToActionHeader';

const CallToAction = () => {
  return (
    <section className=" px-[1.5rem] py-[3rem] dark:bg-black-300  ">
      <div className="flex min-h-[20.1rem] min-w-[19rem] flex-col justify-center overflow-hidden rounded-3xl bg-secondary-dark  bg-BGSmall px-[1.125rem]   ">
        <div className="flex flex-col justify-center sm:ml-[4.7rem] sm:flex-row sm:items-center  sm:justify-between lg:px-[5.3125rem]">
          <CallToActionHeader />
          <CallToActionButton />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
