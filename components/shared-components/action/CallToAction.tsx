import { CallToActionButton, CallToActionHeader } from '.';

const CallToAction = () => (
  <section className="flex justify-center px-6 py-12 dark:bg-black-300 sm:py-[4.5rem] md:px-[5.3rem]">
    <div className="w-full max-w-[80rem]">
      <div className="flex flex-col  rounded-3xl bg-secondary-dark bg-BGSmall  bg-contain bg-no-repeat pl-4.5 pt-[4.875rem] sm:bg-BGLarge sm:pl-[4.655rem] plusLarge:flex-row plusLarge:items-end plusLarge:justify-between">
        <CallToActionHeader />
        <div className="pb-[5.4rem] pr-7 sm:max-w-[28rem] plusLarge:pr-[4.688rem]">
          <CallToActionButton />
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
