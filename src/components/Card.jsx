import { Card, Typography, Button } from "antd";

const { Title, Text } = Typography;

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageUrl: "url_of_project_1_image",
      link: "link_to_project_1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "url_of_project_2_image",
      link: "link_to_project_2"
    },
    // Add more projects as needed
  ];

  return (
    <div className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <Title level={2} className="mb-8 text-center">Projects</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hoverable style={{ width: "100%" }} cover={<img alt={project.title} src={project.imageUrl} />}>
              <div className="p-4">
                <Title level={4} className="mb-2">{project.title}</Title>
                <Text className="mb-4">{project.description}</Text>
                <Button type="primary" href={project.link} target="_blank">View Project</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
