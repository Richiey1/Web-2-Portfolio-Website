import React from 'react';
import './Projects.css';  

const projects = [
  {
    id: 1,
    title: 'Video Fetching App',
    description: 'An application that fetches videos using APIs and presents them to the user.',
    techStack: ['React', 'Node.js', 'API'],
    githubLink: 'https://github.com/Richiey1/Web-2-VideoBox-App',
    liveDemo: 'https://web-2-video-box-app.vercel.app/',
  },
  {
    id: 2,
    title: 'Linkedin Website',
    description: 'A fully responsive Linkedin platform with Feedpost, Profile, comments and likes.',
    techStack: ['React', 'Node.js', 'TailwindCSS'],
    githubLink: 'https://github.com/Richiey1/Assignment-Linkedin',
    liveDemo: 'https://web-2-advance-project-b9vj.vercel.app/',
  },
  {
    id: 3,
    title: 'Meme Generator',
    description: 'A fully responsive Meme Generator webpage with fetching Memes, downloading and sharing on other platforms.',
    techStack: ['React', 'Node.js', 'API'],
    githubLink: 'https://github.com/Richiey1/Web-2-Meme-Assignment',
    liveDemo: 'https://web-2-meme-assignment.vercel.app/',
  },
  {
    id: 4,
    title: 'To Do List',
    description: 'A fully responsive To do list  with add new task, delete button, and save button.',
    techStack: ['React', 'Node.js', 'TailwindCSS'],
    githubLink: 'https://github.com/Richiey1/Web-2-Todo-list-React-project-',
    liveDemo: 'https://web-2-todo-list-react-project.vercel.app/',
  }, 

];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
