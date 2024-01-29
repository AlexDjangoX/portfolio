import Hero from '@/components/homepage/hero/Hero';
import Skills from '@/components/homepage/skills/Skills';
import Services from '@/components/homepage/service/Services';
import Experience from '@/components/homepage/experience/Experience';
import Project from '@/components/homepage/projects/Project';
import Testimonials from '@/components/homepage/testimonials/Testimonials';
import CallToAction from '@/components/shared-components/action/CallToAction';

const Home = () => (
  <>
    <Hero />
    <Skills />
    <Services />
    <Experience />
    <Project />
    <Testimonials />
    <CallToAction />
  </>
);

export default Home;
