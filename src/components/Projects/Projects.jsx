import React, { useState, useEffect } from 'react';
import TypewriterWithDelay from '../Effects/TypewriterWithDelay';
import axios from 'axios';
import './projects.css';
import proj1 from '../../collateral/services/programming.jpg';
import proj2 from '../../collateral/services/programming.jpg';
import proj3 from '../../collateral/services/programming.jpg';
import proj4 from '../../collateral/services/programming.jpg';

// Content data
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
  },
  {
    id: 5,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 6,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 7,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 8,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 9,
    image: proj4,
    title: "Graphic Design",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing ....",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(4);
  const [loading, setLoading] = useState(false);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        // Fetching data from a local file (projects.json)
        // Replace with your actual endpoint URL if fetching from an API
        const response = await axios.get('/path/to/your/api');
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProject = projectsdata.slice(indexOfFirstProject, indexOfLastProject);

  const pagination = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Modal functions
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="projects section">
      <h2 className="projects-section-title">Projects <span className="projects-section-title-line"></span></h2>
      <div className="projects-container">
        {currentProject.map((project) => (
          <div className="projects-card-id" key={project.id} onClick={() => openModal(project)}>
            <img className="projects-image" src={project.image} alt=''/>
            <h3 className="projects-title">{project.title}</h3>
            <p className="projects-description">{project.desc1}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-button">
        {Array.from({ length: Math.ceil(projectsdata.length / projectsPerPage) }).map((_, index) => (
          <button className='pagination-buttons' key={index} onClick={() => pagination(index + 1)}>{index + 1}</button>
        ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>Minimize</span>
              <div className="modal-content-main">
                <img className="modal-image" src={selectedProject.image} alt=''/>
                <div className="modal-content-text">
                  <h2 className='modal-title'>{selectedProject.title}</h2>
                  <TypewriterWithDelay className="modal-description" text={selectedProject.desc2} speed={100} delay={500} style={{ color: 'red', fontSize: '20px' }}/>
                  {/* <p className='modal-description'>{selectedProject.desc2}</p> */}
                </div>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
