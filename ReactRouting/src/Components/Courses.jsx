import React from 'react';
import '../styles/components.css';

const Courses = () => {
  const courses = [
    {
      title: "Complete Web Development",
      price: "$99",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Data Science Bootcamp",
      price: "$129",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      title: "Mobile App Development",
      price: "$89",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Our Courses</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {courses.map((course, index) => (
          <div key={index} className="content-section">
            <img src={course.image} alt={course.title} className="feature-image" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
            <h3>{course.title}</h3>
            <p className="page-text">Duration: {course.duration}</p>
            <p className="page-text">Price: {course.price}</p>
            <button style={{
              backgroundColor: '#2c3e50',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              marginTop: '1rem'
            }}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
