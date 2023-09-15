import Carousel from './Carousel';
import { getTestimonials } from '@/sanity/sanity.query';

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="bg-white-800 px-[1.2rem] py-[4.5rem] dark:bg-black-300 md:px-[5.3125rem]">
      <h2 className="mb-[2.25rem] text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[3rem] lg:mb-[4rem] lg:text-[3rem] lg:leading-[3.5rem] lg:tracking-[-0.48px]">
        What{' '}
        <span className="relative  inline-flex items-center">
          <span className="z-20">they say</span>
          <div className="absolute z-10 mt-4 h-[1.02rem] w-full translate-y-[1.6rem] bg-secondary-dark md:-mt-5 md:h-[1.3rem]" />
        </span>{' '}
        about me
      </h2>
      <Carousel testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
