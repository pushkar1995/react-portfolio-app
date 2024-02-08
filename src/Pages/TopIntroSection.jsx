import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/mysocialmedias.json';

const TopIntroSection = () => (
  <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I&apos;m Pushkar</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Full Stack</span>
          {' '}
          <br />
          Developer
        </h1>
        <p className="hero--section-description">
          Passionate full-stack web developer creating impactful user experiences,
          focused on creating impactful user experiences.
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
        // src="./img/mag.jpg"
        alt="Pushkar Img"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  </section>
);

export default TopIntroSection;
