import React from 'react';
import data from '../../data/mysocialmedias.json';
import './Footer.css';

const Footer = () => (
  <footer className="footer--container">
    <div className="footer--link--container">
      <div>
        <h3>Pushkar.dev</h3>
      </div>
      <div className="footer--social--icon">
        <div className="skills-container">
          {data?.social?.map((item) => (
            <div key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer"><img className="social" src={item.src} alt="skills" /></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
