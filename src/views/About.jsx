import { Card } from 'antd';

import about from '../assets/aboutme.png'

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: '#020617', textAlign: 'left' }} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-0 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-white">
          About Me
        </h2>
        <br></br>
        <div className="flex justify-between bg-gray-300">
          <Card style={{ width: 1400 }} >
           
            <p className="mt-4 text-xl text-justify text-black italic font-bold">
            I'm a recent Computer Science graduate from the State University of New York at Buffalo, With over two years of hands-on experience, I specialize in full-stack development, object-oriented programming, design patterns, and distributed systems. 
I'm passionate about leveraging technology to address real-world challenges and foster positive change in society.
Feel free to explore my portfolio to learn more about my skills and experience. I'm always interested in connecting with other  developers and exploring new opportunities. Let's collaborate on meaningful ventures!
            </p>
          </Card>
      
        </div>
      </div>
    </div>
  );
};

export default About;
