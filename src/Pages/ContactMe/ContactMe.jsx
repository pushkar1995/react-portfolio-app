import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactMe.css';

const ContactMe = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/mvonenav', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      // const result = await response.json();
      // console.log(result);
      if (response.ok) {
        toast.success('Thanks for contacting!');
        e.target.reset();
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      // console.error(error);
    }
  };
  return (
    <>
      <h2 className="contact-head">Get In Touch</h2>
      <div>
        <p className="text-lg">
          I&apos;m always intrested in hearing about new projects,
          so if you&apos;d like to chat please get in touch.
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <section id="Contact" className="contact--section">
        <div className="contact-section-topdiv">
          <img className="us-img" src="./img/ContactMeSectionImage.png" alt="me" />
          <div className="contact-form-first-div">
            <p>
              <img className="contact-social" src="https://img.icons8.com/?size=96&id=13826&format=png" alt="email-icon" />
              {' '}
              gautampushkar4@gmail.com
            </p>
            <p>
              <img className="contact-social" src="https://img.icons8.com/?size=96&id=13800&format=png" alt="location-icon" />
              {' '}
              Address: O KM, Pokhara-05, Nepal
            </p>
          </div>
        </div>

        <div className="contact-second-div">
          <form className="contact--form--container" onSubmit={handleFormSubmit} method="POST">
            <div className="container">
              <input
                type="text"
                className="contact--input text-md"
                name="full-name"
                id="full-name"
                placeholder="Full Name"
                required
              />
              <br />
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
            <div>
              <button className="btn btn-primary contact--form--btn" type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactMe;
