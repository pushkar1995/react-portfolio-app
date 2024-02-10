import React from 'react';
import data from '../../data/myprojects.json';
import './MyProjects.css';

const MyProjects = () => (
  <section className="portfolio--section" id="MyPortfolio">
    <div className="portfolio--container-box">
      <div className="portfolio--container">
        <h2 className="section--heading">My Projects</h2>
      </div>
    </div>
    <div className="portfolio--section--container">
      {data?.myprojects?.map((item) => (
        <div key={item.id} className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt="Project" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <div className="date-type">
                <h4>{item.type}</h4>
                <h4>
                  ●
                  {item.date}
                </h4>
              </div>
              <p className="text-md">{item.description}</p>
            </div>

            <div className="github-live">
              <p className="text-sm portfolio--link">
                <a className="live-link" href={item.github} target="_blank" rel="noreferrer">
                  View in GitHub
                  <img className="right-arrow" src="./img/right-arrow.png" alt="Right Arrow" />
                </a>
              </p>
              <p className="text-sm portfolio--link">
                {' '}
                <a className="live-link" href={item.link} target="_blank" rel="noreferrer">
                  View Live
                  {' '}
                  <img className="right-arrow" src="./img/right-arrow.png" alt="Right Arrow" />
                </a>
                {' '}

              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MyProjects;
