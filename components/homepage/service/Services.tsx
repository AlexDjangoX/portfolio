import { notFound } from 'next/navigation';

import { getServices } from '@/sanity/sanity.query';
import ServiceCard from './ServiceCard';
import ServiceHeading from './ServiceHeading';
import { Service } from '@/types';

const Services = async () => {
  const services = await getServices();

  if (!services) notFound();

  return (
    <section className="flex flex-col items-stretch justify-around bg-white-800 px-[1.5rem] py-[3rem] dark:bg-black-300 md:px-[5.3125rem] md:py-[4.5rem]">
      <ServiceHeading />

      <div className="flex flex-wrap  justify-between gap-x-4 gap-y-[2.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        {services?.map((card: Service, index: number) => (
          <ServiceCard
            key={card?._id}
            index={index}
            imgSrcWhite={card?.whiteImage ?? '/assets/redux.svg'}
            imgSrcBlue={card?.blueImage ?? '/assets/redux.svg'}
            blueImagePrimaryDark={
              card?.blueImagePrimaryDark ?? '/assets/redux.svg'
            }
            heading={card?.heading}
            content={card?.content}
            _id={card?._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
