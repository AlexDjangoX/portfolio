'use client';

import Image from 'next/image';

import { CarouselType } from '@/types';
import TestimonialDetails from './TestimonialDetails';
import ArrowLeftControl from './ArrowLeftControl';
import ArrowRightControl from './ArrowRightControl';
import useCarousel from '@/hooks/useCarousel';

const Carousel = ({ testimonials }: CarouselType) => {
  const { activeIndex, show, nextSlide, prevSlide, carouselRef } = useCarousel(
    testimonials.length
  );
  const data = testimonials[activeIndex];

  return (
    <article
      ref={carouselRef}
      className="flex flex-col justify-center lg:flex-row lg:items-center"
    >
      <ArrowLeftControl onClick={prevSlide} />
      <section className="flex w-full flex-col justify-start lg:flex-row">
        <div
          className={`flex justify-between transition-opacity duration-300 ease-in-out md:mr-0 ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            className="h-[12.5rem] w-[12.5rem] rounded-md md:mr-[2rem] lg:min-h-[20.5rem] lg:min-w-[20.5rem]"
            src={data?.testimonialImage}
            alt={data?.altText}
            height={200}
            width={200}
          />

          <div className="flex gap-[1rem] lg:hidden">
            <ArrowLeftControl onClick={prevSlide} isHiddenOnLg />
            <ArrowRightControl onClick={nextSlide} isHiddenOnLg />
          </div>
        </div>

        <TestimonialDetails
          content={data?.content}
          headingName={data?.headingName}
          subheadingName={data?.subheadingName}
          show={show}
        />
      </section>
      <ArrowRightControl onClick={nextSlide} />
    </article>
  );
};

export default Carousel;
