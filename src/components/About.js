import React from 'react';
import './About.css'; // Import your CSS file for styling
import profilePic from './-6023773078561079848_121.jpg'; 


const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Ojo Kehinde Monsuru, a passionate software developer with a knack for creating dynamic and engaging web applications. 
            With a background in Front-End Development, I specialize in technologies like React, Node.js, and modern JavaScript frameworks.
          </p>
          <p>
            I'm driven by solving problems and constantly seeking to learn new skills. When I'm not coding, I enjoy Swimming, Reading, Watching Hollywood Movies, Researching on Web3 spaces!
          </p>
          <p>
            <strong>Skills:</strong> JavaScript, React, Node.js, API Integration, CSS3, HTML5, and more.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
