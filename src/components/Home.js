import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Ojo Kehinde Monsuru, a passionate software developer focused on building engaging and scalable web applications.
        </p>
        <Link to="/projects" className="btn">
          View My Projects
        </Link>
      </div>
    </section>
  );
};

export default Home;
