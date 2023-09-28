import { notFound } from 'next/navigation';

import { getServices } from '@/sanity/sanity.query';
import ServiceCard from './ServiceCard';
import ServiceHeading from './ServiceHeading';
import { Service } from '@/types';

const Services = async () => {
  const services = await getServices();

  if (!services) notFound();

  return (
    <section className="flex flex-col items-center justify-center bg-white-800 px-[1.5rem] py-[3rem] dark:bg-black-300 md:px-[5.3125rem] md:py-[4.5rem]">
      <ServiceHeading />
      <div className="flex flex-wrap  justify-center gap-x-4 gap-y-[2.5rem]  md:justify-around ">
        {services?.map((card: Service, index: number) => (
          <ServiceCard
            key={card?._id}
            index={index}
            imgSrcWhite={card?.whiteImage ?? '@/public/assets/redux.svg'}
            imgSrcBlue={card?.blueImage ?? '@/public/assets/redux.svg'}
            blueImagePrimaryDark={
              card?.blueImagePrimaryDark ?? '@/public/assets/redux.svg'
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
