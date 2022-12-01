import React from 'react';

import './Home.scss';

import { Header, Features, CTA, RecentProjects, FAQ } from './container';

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      {/* <RecentProjects /> */}
      <FAQ />
      <CTA />
    </>
  )
}

export default Home