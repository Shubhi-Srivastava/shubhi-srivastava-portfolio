import { useState } from 'react';
import { GithubOutlined, CloseOutlined } from '@ant-design/icons'; // Import the CloseOutlined icon
import { serviceData } from '../constants';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [moreContent, setMoreContent] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (content, project) => {
    setMoreContent(content);
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMoreContent('');
    setSelectedProject(null);
  };

  return (
    <div className="pb-20 bg-gradient-to-r from-blue-100 to-purple-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20" id="services">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-black mb-10">Projects</h2>
        {serviceData.map((project, index) => (
          <div key={index} className="flex mb-10">
            <div className="w-1/2 pr-8">
              <img src={project.img} alt={project.name} className="w-full h-auto rounded-lg shadow-lg" style={{ maxHeight: '400px' }} />
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.desc}</p>
              
              {/* Move the Read More button up and style it */}
              {project.more && (
                <button onClick={() => handleReadMore(project.more, project)} className="mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1">
                  <span className="mr-2">Read More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              )}
              
              <div className="flex flex-wrap mb-4">
                {/* Display small boxes for each technology used */}
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-300 rounded-full px-3 py-1 mr-2 mb-2 text-sm text-gray-800 font-semibold border border-gray-400">
                    {tech.name}
                  </div>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
                <GithubOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for displaying more content */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 "></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-gray rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-gradient-to-r from-blue-100 to-purple-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-black" id="modal-headline">
                      <b> {selectedProject.name}</b> 
                    </h3>
                    <div className="mt-2">
                      <h4 className="text-xl font-semibold text-black">Key Features:</h4>
                      <ul className="list-disc list-inside">
                        {moreContent.title && moreContent.points.map((point, index) => (
                          <li key={index} className="text-sm text-gray-900">{point}</li>
                        ))}
                      </ul>
                      <h4 className="text-xl font-semibold text-black mt-4">Technical Implementation:</h4>
                      <ul className="list-disc list-inside">
                        {selectedProject.technicalImplementation.points.map((point, index) => (
                          <li key={index} className="text-sm text-gray-900">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Close button with cross icon */}
                  <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={handleCloseModal}>
                    <CloseOutlined style={{ fontSize: '24px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
