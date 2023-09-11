import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
    </>
  );
};

export default Home;
