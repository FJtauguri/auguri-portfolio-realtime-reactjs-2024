import React, { useState, useEffect } from 'react';
import './projects.css';
import proj1 from '../../collateral/services/programming.jpg';
import proj2 from '../../collateral/services/programming.jpg';
import proj3 from '../../collateral/services/programming.jpg';
import proj4 from '../../collateral/services/programming.jpg';

const projectsdata = [
  {
    id: 1,
    image: proj1,
    title: "Programming",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    image: proj2,
    title: "Technical Support",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: proj3,
    title: "UI/UX Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //     if(isModalOpen) {
  //       document.body.style.overflow = 'hidden';
  //       document.body.style.filter = 'blur(10px)';
  //     } else {
  //       document.body.style.overflow = '';
  //       document.body.style.filter = '';
  //     }
  //   }, [isModalOpen]
  // );

  

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="projects section">
      <h2 className="projects-section-title">Projects <span className="projects-section-title-line"></span></h2>
      <div className="projects-container">
        {projectsdata.map((project) => (
          <div className="projects-card-id" key={project.id} onClick={() => openModal(project)}>
            <img className="projects-image" src={project.image} alt=''/>
            <h3 className="projects-title">{project.title}</h3>
            <p className="projects-description">{project.desc1}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-image" src={selectedProject.image} alt=''/>
            <h2 className='modal-title'>{selectedProject.title}</h2>
            <p className='modal-description'>{selectedProject.desc2}</p>
          </div>
        </div>

      )}
    </section>
  );
}

export default Projects;
