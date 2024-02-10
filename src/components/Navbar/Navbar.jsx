import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <h3>Pushkar.dev</h3>
      </div>
      <button
        type="button"
        className={`nav__hamburger ${navActive ? 'active' : ''}`}
        onClick={toggleNav}
        aria-label="Toggle Menu"
      >
        <span className="nav__hamburger__line" />
        <span className="nav__hamburger__line" />
        <span className="nav__hamburger__line" />
      </button>
      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy
              smooth
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
              role="menuitem"
              tabIndex={0}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy
              smooth
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
              role="menuitem"
              tabIndex={0}
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy
              smooth
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
              role="menuitem"
              tabIndex={0}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy
              smooth
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
              role="menuitem"
              tabIndex={0}
            >
              Contact
            </Link>

          </li>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy
            smooth
            offset={-70}
            duration={500}
            to="https://en.wikipedia.org/wiki/Nepal"
            className="navbar--content"
            role="menuitem"
            tabIndex={0}
          >
            <div className="flag-cont">
              <img className="flag" src="./img/nepal-flag.svg" alt="Nepal" />
              Nepal
            </div>
          </Link>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
