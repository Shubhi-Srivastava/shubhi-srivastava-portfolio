import { Typography } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import grad from '../assets/grad.png'; // Importing the icon/logo image

const { Title, Text } = Typography;

const Education = () => {
  return (
    <div className="pb-20  bg-gradient-to-r from-blue-100 to-purple-50 "  id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20">
        <div className="flex items-center justify-center mb-8">
          <Title level={2} className="font-bold text-black mb-0">Education</Title>
        </div>
        <div className="education-container">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '24px', color: 'black', marginRight: '8px' }} />
              <Title level={4} className="font-semibold text-gray-800">
                <b>Master of Science in Computer Science and Engineering</b>
              </Title>
            </div>
            <Text className="text-gray-700 italic">
              University at Buffalo, The State University of New York
            </Text>
            <Text className="text-gray-700 italic">
              August 2022 - January 2024
            </Text>
            <Text className="text-gray-700 italic font-semibold">
              Courses Undertaken: Distributed Systems, Data Models Query Language, Analysis Of Algorithms, Algorithms for Modern Computing Systems, Software Project Development, Fundamentals of Programming Language, Introduction to Machine Learning 
            </Text>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '24px', color: 'black', marginRight: '8px' }} />
              <Title level={4} className="font-semibold text-gray-800">
                <b>Bachelor of Technology in Information Technology</b>
              </Title>
            </div>
            <Text className="text-gray-700 italic">
              SRM Institute of Science and Technology 
            </Text>
            <Text className="text-gray-700 italic">
              August 2016 - May 2020
            </Text>
            <Text className="text-gray-700 italic font-semibold">
              Courses Undertaken: Data Structures and Algorithms, Operating Systems, Cloud Computing, Cryptography, Web Development, Computer Networks, Object Oriented Programming, Database Management Systems
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
