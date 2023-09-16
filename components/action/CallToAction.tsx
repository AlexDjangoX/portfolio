import GeometricBackground from './GeometricBackground';
import CallToActionButton from './CallToActionButton';
import CallToActionHeader from './CallToActionHeader';

const CallToAction = () => {
  return (
    <section className="bg-white-900 px-[1.5rem] py-[3rem] dark:bg-black-300">
      <div className="relative flex min-h-[20.1rem] min-w-[19rem] flex-col justify-center overflow-hidden rounded-3xl bg-[#ffbe62] px-[1.125rem] ">
        <GeometricBackground />
        <div className="z-20 flex flex-col justify-center sm:ml-[4.7rem] sm:flex-row  sm:items-center sm:justify-between">
          <CallToActionHeader />
          <CallToActionButton />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
