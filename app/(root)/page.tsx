import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Services from '@/components/service/Services';
import Work from '@/components/work/Work';
import Project from '@/components/projects/Project';
import Testimonials from '@/components/testimonials/Testimonials';
import CallToAction from '@/components/action/CallToAction';
import Footer from '@/components/footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Work />
      <Project />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
