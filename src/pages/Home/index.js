import React from 'react';
import ChooseExpertise from '../../components/ChooseExpertise';
import GlobalNetwork from '../../components/GlobalNetwork';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import HowToUse from '../../components/HowToUse';
import PoweringPartner from '../../components/PowerPartner';
import ProvenExperts from '../../components/ProvenExpers';
import TeachingLab from '../../components/TeachingLab';
import WhatWeDo from '../../components/WhatWeDo';
import WhyVirtuPharma from '../../components/Why';
import WorkingLab from '../../components/WorkingLab';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <WhatWeDo />
        <GlobalNetwork />
        <WorkingLab />
        <ChooseExpertise />
        <PoweringPartner />
        <ProvenExperts />
        <WhyVirtuPharma />
        <TeachingLab />
        <HowToUse />
      </div>
    </div>
  );
};

export default Home;
