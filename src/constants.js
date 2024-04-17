
import eventImage from './assets/event.png';
import restaurant from './assets/restaurant.png';
import document from './assets/document.png';
import raft from './assets/raft.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const contactLinks = [{ name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/Shubhi-Srivastava'},
{ name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/shubhi-srivastava28/'}
]



export const serviceData = [
  {
    name: 'Consentize Event Platfom',
    desc: `The Consentize Event Platform is a specialized multi-user event management portal crafted exclusively for Consentize Inc. Admins, representing the Consentize Inc team, have the tools to oversee event logistics, encompassing the creation, planning, and management of events from start to finish. Artists, who will participate in events organized by the team, utilize the platform to manage their participation and portfolios. Attendees, eager to join the events, can effortlessly engage with activities through the platform. Tailored interfaces and functionalities cater to the unique needs of each user group, ensuring a streamlined experience for all stakeholders.`,
    more: {
      title: 'Key Features:',
      points: [
        'Multi-Event Management: The platform handles multiple events simultaneously with a dynamic landing page that updates in real time, showing pertinent information for each selected event.',
        'Dual Role Registration: It offers a dual registration capability where Artists and Attendees can register as both participants and spectators. This feature is facilitated through an intuitive interface that ensures a seamless user experience.',
        'Portfolio and Approval Management: Artists can manage their portfolios for each event and submit requests for participation, which are processed by the Admin team for approval.',
        'Digital Interaction and Rewards: The platform enables digital interactions by allowing Attendees to provide a wallet address for receiving digital goodies. QR codes for each booth facilitate tracking of visits, enabling the Admin team to monitor engagement and distribute rewards effectively.',
        'Real-Time Notifications: Users receive real-time notifications to stay informed and engaged, improving the overall event participation experience.',
        'Event-Specific Spaces: Each event is allocated a dedicated section within the application, which allows for efficient and focused management.'
      ]
    },
    technicalImplementation: {
      title: 'Technical Implementation:',
      points: [
        'The platform leverages cutting-edge technologies including Angular for a responsive frontend, and C# for robust backend operations.',
        'Deployment is facilitated through Docker multi-level images on AWS EC2, ensuring scalability and reliability.',
        'Media resources are efficiently managed using AWS S3 buckets, guaranteeing efficient storage and retrieval of images and videos.',
        'Optimal database performance is achieved through the utilization of an AWS RDS MySQL instance, delivering reliable and efficient data operations.'
      ]
    },
    img: eventImage,
    technologies:[
      { name: "Angular" },
      { name: "C#" },
      { name: "Docker" },
      { name: "MYSQL" },
      { name: "AWS" }
    ],
    githubLink:"https://github.com/Shubhi-Srivastava/Consentize-Event-Platform",
  },
  
  {
    name: 'FDA Approved Restaurants Recommender System',
    desc: 'The FDA Approved Restaurant Search Web Application is a comprehensive restaurant search and recommendation system designed to empower users with essential information about restaurant hygiene standards. Customers can effortlessly search for top-rated restaurants based on their FDA ratings, hygiene practices, and preferred cuisines. Meanwhile, Health Inspectors can efficiently access and manage restaurant inspection details, including scores, violations, and risk categories. This user-friendly platform enhances transparency and accountability in the food service industry, ensuring both diners and regulators can make informed decisions.',
    more: {
      title: 'Key Features:',
      points: [
        'Search Functionality: Users can search for restaurants based on FDA ratings, hygiene standards, and cuisine preferences.',
        'Customer Recommendations: The application provides recommendations for top-rated restaurants based on user preferences and ratings.',
        'Health Inspector Access: Health inspectors can securely access and manage restaurant inspection details, including scores, violations, and risk categories.',
        'Real-time Updates: The platform offers real-time updates on restaurant inspection data, ensuring the information is accurate and up-to-date.',
        'Administrative Privileges: Health inspectors have administrative privileges to modify, insert, and delete inspection details as needed.',
        'User-friendly Interface: The application features an intuitive and user-friendly interface for seamless navigation and enhanced user experience.'
      ]
    },
    technicalImplementation: {
      title: 'Technical Implementation:',
      points: [
        'Utilized PostgreSQL as the database management system for storing and managing the "Restaurant Scores" dataset.',
        'Established relationships between database tables using keys and constraints to ensure data integrity and consistency.',
        'Optimized database performance by creating indexes and triggers, enhancing query efficiency and data retrieval speed.',
        'Developed the web interface using Angular for frontend development, providing customers with a responsive and intuitive user experience.',
        'Implemented Node.js for backend development, facilitating seamless communication with the database and efficient data processing.'
      ]
    },
    img: restaurant, 
    technologies: [
      { name: "PostGreSQL" },
      { name: "Angular" },
      { name: "Node.js" }
    ],
    githubLink:"https://github.com/Shubhi-Srivastava/FDA-Approved-Restaurants-Recommender-System",
  },
  

  {
    name: 'MapReduce in Go',
    desc: `Developed a MapReduce solution in Go for efficient word count and inverted index processing. Utilized custom Map and Reduce functions, Goroutines, and channels to optimize data processing and concurrency management. Integrated RPCs for seamless inter-worker communication, enhancing system scalability and performance. Implemented fault tolerance mechanisms to gracefully handle worker failures, ensuring uninterrupted processing and improved overall efficiency. Rigorous testing procedures were conducted to validate the accuracy and reliability of the custom Map and Reduce functions, guaranteeing robustness and stability in real-world deployment scenarios.`,
   
    img: document,
    technologies : [
      { name: "Go" },
      {name: "Distributed Systems"}
    ]
  },
  {
    name: 'Backend Development',
    desc: `Developed an implementation of the Raft distributed consensus algorithm in Go, focusing on leader election and log consensus agreement features. Designed for high availability and robust fault tolerance, the system comprises a set of Raft peers that communicate to maintain replicated logs and efficiently handle server and network failures. This implementation ensures consistency and reliability in distributed systems, making it suitable for a wide range of applications requiring consensus among multiple nodes.`,
    img: raft,
    technologies: [
      { name: "Go" },
      {name: "Distributed Systems"}
      
    ]
  }

  

]
