import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0); // Initialize with index 0 (JerseySTEM)

  const experiences = [
    {
      title: 'JerseySTEM',
      designation: 'Software Developer Intern',
      duration: 'February 2024- Present',
      description: [
        'Developed a data-fetching Chrome extension using JavaScript, OAuth 2.0, Google Sheets API, and Google Cloud Platform services for a 200+ employee organization, streamlining workflows.',
        'Enhanced user experience by developing a centralized bookmark management extension',
      ],
    },
    {
      title: 'Tata Consultancy Services',
      designation: 'Software Engineer',
      duration: 'August 2020 - June 2022',
      description: [
        'Managed the end-to-end design and development of password management features for a 500k employee internal portal using Java web technologies. Optimized user experience and improved security leading to a significant 40% decrease in support tickets.',
        'Achieved 95% test automation and code coverage through Test Driven Development and standardized quality assurance procedures by writing unit tests and integration test plans using JUnit and Mockito.',
        'Established error, latency, and failure metrics for the password module, improving operational responsiveness during on-call shifts. Added failure alarms for quick issue detection and resolution.',
        'Designed a responsive UI for password management using modern CSS techniques and jQuery for enhanced interactivity and cross-device compatibility.',
        'Integrated Spring-based passwordless authentication via RESTful APIs in core apps, alongside with email alerts for locked accounts, resulting in a 30% task time improvement and 27% fewer password reset requests.',
        'Migrated 50+ applications (all environments-DEV/PROD, present on-premise or cloud) from old web servers to SSO access gateways (Siteminder) by configuring gateway settings.',
        'Mentored and led a 6-member Scrum team of junior developers, implementing agile methodologies and providing daily task training and troubleshooting. Achieved a 40% increase in sprint completion rate.',
        'Spearheaded the planning and implementation of disaster recovery strategies as the Business Continuity Planning Representative, successfully executing 4 to 5 comprehensive drills per financial year to maintain smooth operations during disruptions.',
        'Successfully migrated 2 critical applications to access gateway, meeting tight deadlines, earning an On the SPOT AWARD for exceptional performance. Supported the migration of 200+ applications, contributing to the team receiving the Best Team Award.'
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
