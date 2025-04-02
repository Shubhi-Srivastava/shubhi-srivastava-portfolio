import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0); // Initialize with index 0 (JerseySTEM)

  const experiences = [
    {
      title: 'JerseySTEM',
      designation: 'Software Developer',
      duration: 'February 2024- January 2025',
      description: [
        'Developed a React dashboard with TypeScript to centralize volunteer and sponsor data, managing 5,000+ profiles with real-time search and filtering, reducing search and profile access time by 85% and streamlining outreach workflows.',
        'Built a RESTful API using Java (Spring Boot), integrating with a MySQL database populated by RPA bots to enable real-time,automated data retrieval and seamless dashboard interaction.',
        'Developed and deployed Automation Anywhere bots to extract data from LinkedIn, Handshake, and iCIMS, reducing manual effort by 80% and feeding the centralized recruitment dashboard.',
        'Created and launched a Chrome Extension using JavaScript and OAuth 2.0, automating bookmark management for 200+ employees and integrating with Google Sheets API for efficient data handling via Google Cloud Platform.',
        
      ],
    },
    {
      title: 'Tata Consultancy Services',
      designation: 'Software Engineer',
      duration: 'August 2020 - June 2022',
      description: [
        'Engineered scalable, distributed password management features for a 500k-employee internal portal using Java and Spring Framework, improving security and user experience, resulting in a 40% reduction in support tickets.',
        'Developed RESTful APIs and microservices using Spring Boot, Spring MVC, and Redis for passwordless authentication,reducing reset requests by 27% with secure TOTP validation.',
        'Achieved 95% test automation and code coverage through Test-Driven Development (TDD), implementing standardized QA procedures with JUnit and Mockito. Ensured well-tested, maintainable code, supporting CI/CD best practices.',
        'Developed error, latency and failure metrics for critical services, reducing operational debugging time by approximately 60%',
        'Drove the adoption of a Jenkins-based CI/CD pipeline, integrating automated code reviews with SonarQube and Git for version control, streamlining workflows and reducing deployment time.',
        'Migrated 50+ applications (all environments-DEV/PROD, present on-premise or cloud) from legacy web servers to Single Sign-On (SSO) access gateways (Siteminder), ensuring seamless integration within a distributed architecture..',
        'Mentored and led a 6-member Scrum team of junior developers, implementing agile methodologies and providing daily tasktraining and troubleshooting. Achieved a 40% increase in sprint completion rate within an agile environment.',
        'Spearheaded the planning and implementation of disaster recovery strategies as the Business Continuity Planning Representative, successfully executing 4 to 5 comprehensive drills per financial year to maintain smooth operations during disruptions.'
      ],
    },
    {
      title: 'Oil and Natural Gas Corporation Limited',
      designation: 'Software Developer Intern',
      duration: 'June 2018 – July 2018',
      description: [
        'Analyzed the networking system of ONGC Ahmedabad Asset, including Supervisory Control and Data Acquisition, Broadband Wireless Access, and IT Networks. Gained insights into the IT Systems Maintenance Management System and built a real-time dashboard to visualize network health and performance metrics, utilizing data analysis and visualization libraries such as Pandas and Matplotlib.',
      ],
    },
  ];

  const handleExperienceClick = (index) => {
    setSelectedExperience(index);
  };

  return (
    <div className="pb-20  bg-gradient-to-r from-blue-100 to-purple-50 " id="experience" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20">
        <Title level={1} className="text-center mb-8 font-bold text-black-600">
          Work Experience
        </Title>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className="bg-white p-8 rounded-lg shadow-md border border-black">
              {experiences.map((experience, index) => (
                <div
                  className={`border border-black p-6 rounded-lg shadow-md mb-6 cursor-pointer ${
                    selectedExperience === index ? 'bg-purple-20' : 'hover:bg-purple-20'
                  }`}
                  onClick={() => handleExperienceClick(index)}
                  key={index}
                >
                  <div className="flex justify-between items-center mb-2">
                    <Title level={4} className={`font-semibold ${selectedExperience === index ? 'text-black' : ''}`} style={{ display: 'inline-block', width: '80%' }}>
                      <b>{experience.title}</b>
                    </Title>
                    <Text className={`${selectedExperience === index ? 'text-black' : 'text-black-600'} italic bold`}>{experience.duration}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16}>
            <div className="bg-white rounded-lg shadow-md">
              <div className="border border-gray-300">
                {selectedExperience !== null && (
                  <div className="p-6 bg-white-50">
                    <Title level={4} className="font-semibold text-black-600">
                      <b>
                        {experiences[selectedExperience].title},{' '}
                        <span style={{ fontSize: 'inherit', fontStyle: 'italic' }}>
                          {experiences[selectedExperience].designation}
                        </span>
                      </b>
                    </Title>
                    <ul className="text-gray-800 font-semibold list-disc pl-5">
                      {experiences[selectedExperience].description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ExperienceSection;
