import { contactLinks } from "../constants";
import { Typography, Card } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen  bg-gradient-to-r from-blue-100 to-purple-50  " id = 
    "contact">
      <Card className="max-w-6xl p-12">
        <div className="text-center">
          <Title level={2} className="mb-8 text-3xl text-gray-800">
            Contact Me!
          </Title>
          <Text className="text-sm italic font-bold mb-4 text-gray-800">
           
          Feel free to reach out to me for inquiries, collaborations, or just to say hello! You can find me at the following contacts
            </Text>
        </div>
        <div className="bg-white rounded-lg shadow-lg border border-gray-300 p-8">
          <Text className="text-lg italic font-bold mb-4 text-gray-800">
            Contact Information
          </Text>
          <br></br>
          <br></br>
          
          <ul className="text-lg text-gray-700 mb-4">
            <li className="flex items-center mb-4">
              <EnvironmentOutlined className="mr-4 text-xl" />
              Seattle, USA
            </li>
            <li className="flex items-center mb-4">
              <MailOutlined className="mr-4 text-xl" />
              <a
                href="mailto:shubhi2818@gmail.com"
                className="hover:underline hover:text-blue-700"
              >
                shubhi2818@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <PhoneOutlined className="mr-4 text-xl" />
              +1 206-601-6528
            </li>
          </ul>
          <div className="flex items-center mt-8">
            {contactLinks.map((el, index) => (
              <a
                key={index}
                href={el.link}
                className="mx-2 text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={el.url}
                  alt={el.name}
                  className="w-8 h-8 hover:scale-110 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
