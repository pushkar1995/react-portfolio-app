/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyProjectModal from './MyProjectModal';

const MyProjectCard = ({ myproject }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div key={myproject.id} onClick={() => setShowModal(true)} className="portfolio--section--card">
      <div className="portfolio--section--img">
        <img src={myproject.src} alt="Project" />
      </div>
      <div className="portfolio--section--card--content">
        <div>
          <h3 className="portfolio--section--title">{myproject.title}</h3>
          <div className="date-type">
            <h4>{myproject.type}</h4>
          </div>
        </div>

        <div className="github-live">
          <p className="text-sm portfolio--link">
            <a className="live-link" href={myproject.github} target="_blank" rel="noreferrer">
              View in GitHub
              <img className="right-arrow" src="./img/right-arrow.png" alt="Right Arrow" />
            </a>
          </p>
          <p className="text-sm portfolio--link">
            {' '}
            <a className="live-link" href={myproject.link} target="_blank" rel="noreferrer">
              View Live
              {' '}
              <img className="right-arrow" src="./img/right-arrow.png" alt="Right Arrow" />
            </a>
            {' '}

          </p>
        </div>
      </div>
      {
            showModal && (
            <MyProjectModal myproject={myproject} onClose={() => setShowModal(false)} />
            )
        }
    </div>
  );
};

export default MyProjectCard;
