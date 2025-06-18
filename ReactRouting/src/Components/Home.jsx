import React from 'react';
import '../styles/components.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div>
          <h1 className="page-title">Transform Your Career with EduTech</h1>
          <p className="page-text">
            Access premium coding courses, professional certifications, and expert mentorship.
          </p>
          <button style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '1rem',
            cursor: 'pointer'
          }}>
            Browse Courses
          </button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8" 
          alt="Student learning"
          className="feature-image"
          style={{ width: '400px' }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
        <div className="content-section">
          <h3>Web Development</h3>
          <p className="page-text">Master modern web technologies</p>
        </div>
        <div className="content-section">
          <h3>Data Science</h3>
          <p className="page-text">Learn data analysis and ML</p>
        </div>
        <div className="content-section">
          <h3>Mobile Development</h3>
          <p className="page-text">Build iOS and Android apps</p>
        </div>
      </div>
    </div>
  );
};

export default Home;