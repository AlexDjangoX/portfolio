import { getServices } from '@/sanity/sanity.query';
import SkillsCard from '../skills/SkillsCard';
import ServiceHeading from './ServiceHeading';
import { Service } from '@/types';

const Services = async () => {
  const services = await getServices();

  return (
    <section className="flex flex-col items-center justify-center bg-white-800 px-[5.3125rem] py-[4.5rem] dark:bg-black-300">
      <ServiceHeading />
      <div className="flex flex-wrap  justify-center gap-x-4 gap-y-[2.5rem] md:justify-around ">
        {services?.map((card: Service) => (
          <SkillsCard
            key={card?._id}
            heading={card?.heading}
            content={card?.content}
            imgSrcWhite={card?.whiteImage}
            imgSrcBlue={card?.blueImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
