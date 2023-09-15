import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Project from '@/components/projects/Project';
import Testimonials from '@/components/testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Work />
      <Project />
      <Testimonials />
    </>
  );
};

export default Home;
