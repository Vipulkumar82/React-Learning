import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components.css';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NavLink to="/" 
          className={({isActive}) => isActive ? "nav-brand active-link" : "nav-brand"}
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}>
          EduTech
        </NavLink>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <NavLink to="/" 
            className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/courses" 
            className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
            Courses
          </NavLink>
          <NavLink to="/about" 
            className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/dashboard" 
            className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;