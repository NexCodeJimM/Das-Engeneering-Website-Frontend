import React from 'react';

import './Home.scss';

import { Header, Features, RecentProjects } from './container';

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <RecentProjects />
    </>
  )
}

export default Home