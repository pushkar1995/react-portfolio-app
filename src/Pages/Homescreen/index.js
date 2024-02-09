import React from 'react';
import TopIntroSection from '../TopIntroSection/TopIntroSection';
import MyProjects from '../MyProjects/MyProjects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../../components/Footer/Footer';

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
