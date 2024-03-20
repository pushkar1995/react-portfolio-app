import React from 'react';
import data from '../../data/myprojects.json';
import './MyProjects.css';
import MyProjectCard from './MyProjectCard';

const MyProjects = () => (
  <section className="portfolio--section" id="MyPortfolio">
    <div className="portfolio--container-box">
      <div className="portfolio--container">
        <h2 className="section--heading">My Projects</h2>
      </div>
    </div>
    <div className="portfolio--section--container">
      {data?.myprojects?.map((project) => (
        <MyProjectCard key={project.id} myproject={project} />
      ))}
    </div>
  </section>
);

export default MyProjects;
