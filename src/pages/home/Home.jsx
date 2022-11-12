import React from 'react';

import './Home.scss';

import { Header, Welcome, Features, RecentProjects } from './container';

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Features />
      <RecentProjects />
    </>
  )
}

export default Home