import { notFound } from 'next/navigation';

import { getServices } from '@/sanity/sanity.query';
import ServiceCard from './ServiceCard';
import ServiceHeading from './ServiceHeading';
import { Service } from '@/types';

const Services = async () => {
  const services = await getServices();

  if (!services) {
    notFound();
  }

  return (
    <section className="flex flex-col items-center justify-center bg-white-800 px-[5.3125rem] py-[4.5rem] dark:bg-black-300">
      <ServiceHeading />
      <div className="flex flex-wrap  justify-center gap-x-4 gap-y-[2.5rem] md:justify-around ">
        {services?.map((card: Service, index: number) => (
          <ServiceCard
            key={card?._id}
            index={index}
            imgSrcWhite={card?.whiteImage ?? '@/public/assets/redux.svg'}
            imgSrcBlue={card?.blueImage ?? '@/public/assets/redux.svg'}
            heading={card?.heading}
            content={card?.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
