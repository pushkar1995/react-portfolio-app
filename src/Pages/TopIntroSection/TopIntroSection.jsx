import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/mysocialmedias.json';

const TopIntroSection = () => (
  <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I&apos;m Pushkar</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Solution Oriented</span>
          {' '}
          <br />
          Certified Full-stack Developer
        </h1>
        <p className="top--section-subtitle">| React | MERN | Software Engineer | Can manage a project from idea to an end product |</p>
        <p className="hero--section-description">
          I can help you build a product, feature or website Look through some of my work
          and experience! If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
      </div>
      <div className="skills-container">
        {data?.social?.map((item) => (
          <div key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img className="social" src={item.src} alt="skills" />
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="hero--section--img">
      <motion.img
        src="./img/PuskarPhoto.png"
        alt="Pushkar Img"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  </section>
);

export default TopIntroSection;
