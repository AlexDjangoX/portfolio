import React from 'react';

import { getProfile } from '@/sanity/sanity.query';

type Props = {};

const Home = async (props: Props) => {
  const { profile } = await getProfile();

  console.log(profile);

  return <div>Home</div>;
};

export default Home;
