import React from 'react';
import '../styles/components.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div>
          <h1 className="page-title">About Us</h1>
          <p className="page-text">
            We are a team of passionate individuals dedicated to creating amazing experiences.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
          alt="Team photo"
          className="feature-image"
          style={{ width: '400px' }}
        />
      </div>
      <div className="content-section">
        <h2>Our Mission</h2>
        <p className="page-text">
          To provide innovative solutions that make a difference in people's lives.
        </p>
      </div>
    </div>
  );
};

export default About;