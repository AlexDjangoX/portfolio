import { notFound } from 'next/navigation';

import Carousel from './Carousel';
import { getTestimonials } from '@/sanity/sanity.query';
import TestimonialsHeading from './TestimonialsHeading';
import WrapperDark200 from '@/HOC/WrapperDark200';

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  if (!testimonials) notFound();

  return (
    <WrapperDark200>
      <TestimonialsHeading />
      <Carousel testimonials={testimonials} />
    </WrapperDark200>
  );
};

export default Testimonials;
