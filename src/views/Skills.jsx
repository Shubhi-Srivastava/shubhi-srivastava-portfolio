import { motion } from "framer-motion";
import tools from '../assets/tools.png';
import db from '../assets/db.png';
import cloud from '../assets/cloud.png';
import languages from '../assets/languages.png';
import web from '../assets/web.png';

const skillsData = [
  {
    title: "Language and Frameworks",
    skills: [
      "Java", "Python", "C", "C++", "Golang", "SQL", "Shell Script", 
       "JUnit", "Mockito","OAuth2.0", "Google App Scripts", "Java Spring Framework",
    ],
    img: languages

  },
  {
    title: "Web Development",
    skills: [
      "React", "AngularJS", "HTML", "CSS", "JavaScript", "jQuery", 
      "JSP", "C#", "XML", "Java Servlets", "JSON", ".NET Core"
    ],
    img : web
  },
  {
    title: "Cloud",
    skills: [
      "AWS - EC2", "S3", "Amazon RDS", 
      "Elastic Container Registry", "Google Cloud Platform"
    ],
    img : cloud
  },
  
  {
    title: "Database/Operating Systems",
    skills: [
      "PostgreSQL", "MYSQL", "Relational Databases", "Linux", 
      "MacOS", "Windows"
    ],
    img : db

  },
 
  {
    title: "Developer Tools",
    skills: [
      "Docker", "Jenkins", "CI/CD", "GitHub", "Postman", "Jira"
    ],
    img: tools
  },
];

const SkillsSection = ({ title, skills, img }) => {
    return (
    
      <div className="bg-gradient-to-bl from-gray-800 to-gray-900 p-8 rounded-lg mb-8 " id="skills">
        <div className="flex items-center justify-start mb-4"> {/* Adjusted justify-start */}
          <img src={img} alt={`Image for ${title}`} className="h-10 w-10 object-contain mr-4" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 py-2 px-4 text-white font-semibold rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
     
    );
  };
  



  
  const Skills = () => {
    return (
      <div className= "bg-gradient-to-r from-blue-100 to-purple-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Tech Stack & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((section, index) => (
              <SkillsSection key={index} title={section.title} skills={section.skills} img={section.img} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Skills;
