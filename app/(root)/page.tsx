import Hero from '@/components/homepage/hero/HeroImage';
import Skills from '@/components/homepage/skills/Skills';
import Services from '@/components/homepage/service/Services';
import Work from '@/components/homepage/work/Work';
import Project from '@/components/homepage/projects/Project';
import Testimonials from '@/components/homepage/testimonials/Testimonials';
import CallToAction from '@/components/shared-components/action/CallToAction';

const Home = () => (
  <>
    <Hero />
    <Skills />
    <Services />
    <Work />
    <Project />
    <Testimonials />
    <CallToAction />
  </>
);

export default Home;
