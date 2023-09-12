import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Work from '@/components/Work';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Work />
    </>
  );
};

export default Home;
