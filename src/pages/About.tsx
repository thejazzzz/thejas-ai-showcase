import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
            <p className="text-lg mb-6">
              I'm Thejas Thomas Mathew, a final-year B.Tech Computer Science (AI) student at Providence College of Engineering with a passion for building AI-driven systems and intelligent solutions.
            </p>
            <p className="text-lg mb-6">
              My technical journey is driven by a curiosity about how artificial intelligence can solve real-world problems. I specialize in programming and AI Agent development, having contributed to various projects ranging from task management systems to healthcare solutions.
            </p>
            <p className="text-lg mb-6">
              I enjoy tackling complex problems with creative solutions, constantly learning new technologies and methodologies to improve my skills. My approach combines technical expertise with strong teamwork abilities, allowing me to collaborate effectively on innovative projects.
            </p>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
              <div className="bg-secondary/40 p-6 rounded-lg">
                <div className="mb-6">
                  <h4 className="font-medium text-lg">B.Tech in Computer Science with AI</h4>
                  <p className="text-foreground/70">Providence College of Engineering</p>
                  <p className="text-foreground/70">Chengannur, Kerala</p>
                  <p className="text-sm text-foreground/60 mt-1">2022 - 2026 (Expected)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Notable Achievements</h3>
              <div className="space-y-6">
                <div className="bg-secondary/40 p-6 rounded-lg">
                  <h4 className="font-medium text-lg">Runner-Up at Eden 3.0</h4>
                  <p className="text-foreground/70">Zenwork</p>
                  <p className="text-sm text-foreground/60">2024</p>
                  <p className="mt-2">
                    Led development of TeamSync, a task management system focused on enhancing team collaboration and productivity.
                  </p>
                </div>
                
                <div className="bg-secondary/40 p-6 rounded-lg">
                  <h4 className="font-medium text-lg">Winner at Sinova'24 Hackathon</h4>
                  <p className="text-foreground/70">SCMS Kochi</p>
                  <p className="text-sm text-foreground/60">2024</p>
                  <p className="mt-2">
                    Developed Rapid Rescue, an AI healthcare solution that analyzes symptoms for diagnosis and emergency transport support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-tech-blue shadow-xl">
                    <img alt="Thejas Thomas Mathew" className="w-full h-full object-cover" src="/lovable-uploads/acb094cc-a801-4be9-8a62-a60198f2bd60.jpg" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-tech-purple/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-6 w-24 h-24 bg-tech-blue/20 rounded-full blur-xl"></div>
                </div>
              </div>
              
              <div className="bg-secondary/40 p-6 rounded-lg mt-6">
                <h3 className="font-semibold text-lg mb-4">Personal Details</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Name:</span> Thejas Thomas Mathew
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Mavelikkara, Kerala, India
                  </li>
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:thejasthomas2@gmail.com" className="text-tech-blue hover:underline">
                      thejasthomas2@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span>{" "}
                    <a href="tel:+919496195654" className="text-tech-blue hover:underline">
                      +91 9496195654
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="w-full">Get In Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-16 text-center">
          <h2 className="text-2xl font-bold mb-6">What I'm Currently Working On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Multi-Agent Career Assistant</h3>
              <p className="text-foreground/70">
                Developing an AI-powered system that uses NLP and ML to provide personalized job recommendations and skill paths based on resumes.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Snacker Vending Machine App</h3>
              <p className="text-foreground/70">
                Creating a QR-based vending solution to improve snack accessibility and transaction speed at snacker.in.net.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;