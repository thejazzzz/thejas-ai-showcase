
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Career Assistant Multi-Agent System",
      description: "AI-powered system using NLP and ML to provide personalized job recommendations and skill paths based on resumes.",
      image: "/lovable-uploads/ai-driven.png",
      tech: ["AI", "NLP", "Python", "LangChain", "CrewAI"],
      github: "https://github.com/thejazzzz",
    },
    {
      title: "Snacker Vending Machine App",
      description: "A QR-based vending solution improving snack accessibility and transaction speed.",
      image: "/lovable-uploads/snacker.jpg ",
      tech: ["React", "QR Code", "Payment Integration"],
      website: "https://snacker.in.net",
    },
    {
      title: "Rapid Rescue (Sinova'24 Winner)",
      description: "AI healthcare solution that analyzes symptoms for diagnosis and emergency transport support.",
      image: "/lovable-uploads/swift-care.jpg",
      tech: ["AI", "Healthcare", "Python", "ML"],
      github: "https://github.com/thejazzzz/Swift_care",
    },
    {
      title: "ZenWork (Eden 3.0 Runner-up)",
      description: "Task management system built to enhance collaboration and productivity in teams.",
      image: "/lovable-uploads/ZenWork.png",
      tech: ["Task Management", "Collaboration", "Web App"],
      github: "https://github.com/thejazzzz/zenwork-eden-hackathon",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        
        <div className="mb-10">
          <p className="text-lg max-w-3xl">
            Here are some of the projects I've worked on. Each project represents my passion for building AI-driven solutions and web applications that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              website={project.website}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Other Notable Projects</h2>
          <div className="bg-secondary/30 p-8 rounded-lg">
            <p className="text-lg mb-4">
              I'm constantly working on new projects and experimenting with various technologies. Check out my GitHub for more of my work.
            </p>
            <a 
              href="https://github.com/thejazzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background font-medium py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
