import React from 'react';
import TopIntroSection from '../TopIntroSection';
import MyProjects from '../MyProjects';
import AboutMe from '../AboutMe';
import ContactMe from '../ContactMe';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <TopIntroSection />
    <MyProjects />
    <AboutMe />
    <ContactMe />
    <Footer />
  </>
);

export default Home;
