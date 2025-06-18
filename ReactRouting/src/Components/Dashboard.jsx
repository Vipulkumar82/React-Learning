import React from 'react';
import '../styles/components.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Student Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div className="content-section">
          <h3>My Courses</h3>
          <p className="page-text">Enrolled Courses: 3</p>
          <p className="page-text">In Progress: 2</p>
          <p className="page-text">Completed: 1</p>
        </div>
        <div className="content-section">
          <h3>Learning Progress</h3>
          <div style={{ backgroundColor: '#e0e0e0', borderRadius: '10px', height: '20px' }}>
            <div style={{ width: '60%', backgroundColor: '#2c3e50', height: '100%', borderRadius: '10px' }}></div>
          </div>
          <p className="page-text">60% Complete</p>
        </div>
        <div className="content-section">
          <h3>Upcoming Deadlines</h3>
          <p className="page-text">Project submission - 3 days</p>
          <p className="page-text">Quiz - 1 week</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;