/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './MyProjects.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from '../../data/myprojects.json';
import MyProjectCard from './MyProjectCard';

const MyProjects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const myproject = data?.myprojects.map((project) => {
    <MyProjectCard
      key={project.id}
      title={project.title}
      type={project.type}
      github={project.github}
      link={project.link}
    />;
  });

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <Carousel responsive={responsive}>
          {myproject}
        </Carousel>
      </div>
    </section>
  );
};

export default MyProjects;
