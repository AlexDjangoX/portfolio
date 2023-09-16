import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Project from '@/components/projects/Project';
import CallToAction from '@/components/action/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Work />
      <Project />
      <CallToAction />
    </>
  );
};

export default Home;
