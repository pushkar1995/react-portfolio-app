import React from 'react';
import data from '../../data/index.json';
import SocialMediaIcons from '../../data/mysocialmedias.json';
import './AboutMe.css';

const AboutMe = () => (
  <section id="AboutMe" className="about--section">
    <div className="about--section--box">
      <div className="about--section--content">
        <h1 className="aboutme-heading">About Me</h1>
        <p className="about--section-description">
          I&apos;m Pushkar Gautam, a computer engineering graduate and full stack web developer
          passionate about software development and remote collaboration. Skilled in HTML, CSS,
          JavaScript, React, Redux, Ruby, Ruby on Rails, NodeJS and databases. Experienced in
          teamwork, communication, and meeting deadlines. Committed to creating impactful
          and user-friendly web applications.
        </p>
        <p className="connect">LET&apos;S CONNECT</p>
        <div className="socialmedia-container">
          {SocialMediaIcons?.social?.map((item) => (
            <div key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img className="social" src={item.src} alt="skills" />
              </a>
            </div>
          ))}
        </div>
        <a href="https://docs.google.com/document/d/1tCXjdvaEIDCp2MTgUOYkazlYT3atGel-OAcdc5ACp74/edit" className="btn btn-primary" target="_blank" rel="noreferrer">Get My Resume</a>
      </div>
    </div>
    <div className="about--section--img">
      <h2 className="skills-heading">My Skills</h2>
      <p className="tech-skill-title">Languages:</p>
      <div className="skills-container">
        {data?.language?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
      <p className="tech-skill-title">Framework:</p>
      <div className="skills-container">
        {data?.framework?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
      <p className="tech-skill-title">Other Skills:</p>
      <div className="skills-container">
        {data?.otherskills?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutMe;
