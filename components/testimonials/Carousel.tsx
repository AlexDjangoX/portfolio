'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import StarComponent from './Star';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRightIcon from './ArrowRightIcon';

type Testimonial = {
  _id: string;
  headingName: string;
  subheadingName: string;
  content: string;
  testimonialImage: string;
  altText: string;
};

type CarouselProps = {
  testimonials: Testimonial[];
};

const Carousel = ({ testimonials }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(true);

  const nextSlide = () => {
    setShow(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setShow(true);
    }, 300);
  };

  const prevSlide = () => {
    setShow(false);
    setTimeout(() => {
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setShow(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const data = testimonials[activeIndex];
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div
        onClick={prevSlide}
        className="hidden h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-white-900 dark:bg-black-200 md:flex"
      >
        <ArrowLeftIcon />
      </div>

      <div
        className={`flex w-full justify-between transition-opacity duration-300 ease-in-out md:mr-0 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          className="rounded-md md:mr-[2rem] md:min-h-[250px] md:min-w-[250px]"
          style={{
            objectFit: 'cover',
          }}
          src={data.testimonialImage}
          alt={data.altText}
          height={200}
          width={200}
        />

        <div className="flex gap-[1rem] md:hidden">
          <div
            onClick={prevSlide}
            className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-white-900 dark:bg-black-200"
          >
            <ArrowLeftIcon />
          </div>
          <div
            onClick={nextSlide}
            className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-white-900 dark:bg-black-200"
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col transition-opacity duration-300 ease-in-out ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <StarComponent count={5} />
        <p className="mb-[1.5rem] mt-[1rem] text-[1.125rem] font-normal leading-[1.95rem] text-white-500 dark:text-white-800">
          {data.content}
        </p>
        <p className="text-[1.125rem] font-semibold leading-[1.8rem] text-black-300 dark:text-white-900">
          {data.headingName}
        </p>
        <p className="text-[1.125rem] font-semibold leading-[1.8rem] text-white-500 dark:text-white-800">
          {data.subheadingName}
        </p>
      </div>

      <div
        onClick={nextSlide}
        className="hidden h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-white-900 dark:bg-black-200 md:flex"
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Carousel;
