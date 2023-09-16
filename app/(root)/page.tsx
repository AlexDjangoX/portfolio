import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Services from '@/components/service/Services';
import Work from '@/components/work/Work';
import Project from '@/components/projects/Project';
import Testimonials from '@/components/testimonials/Testimonials';
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
      <Footer />
    </>
  );
};

export default Home;
