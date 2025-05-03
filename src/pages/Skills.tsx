
import SkillCategory from "@/components/SkillCategory";

const Skills = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">My Skills</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8">
              My technical expertise has grown through academic study and hands-on project experience. Here's a comprehensive overview of my skills:
            </p>
            
            <SkillCategory
              title="Programming Languages"
              skills={["Python", "Java", "C", "HTML", "CSS", "JavaScript"]}
            />
            
            <SkillCategory
              title="AI & Machine Learning"
              skills={["TensorFlow", "Scikit-Learn", "LangChain", "CrewAI", "NLTK", "Multi-Agent Systems"]}
            />
            
            <SkillCategory
              title="Web Development"
              skills={["HTML", "CSS", "JavaScript", "React.js", "Streamlit"]}
            />
            
            <SkillCategory
              title="Databases"
              skills={["MySQL", "Supabase"]}
            />
          </div>
          
          <div>
            <div className="bg-secondary/30 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Development Tools</h4>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Jupyter Notebook</li>
                    <li>Google Colab</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Libraries & Frameworks</h4>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    <li>Plotly</li>
                    <li>Requests</li>
                    <li>pyPDF2</li>
                    <li>React.js</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Problem Solving</h4>
                  <p className="text-foreground/70">
                    Ability to break down complex problems and find efficient solutions.
                  </p>
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Teamwork</h4>
                  <p className="text-foreground/70">
                    Experience collaborating in diverse teams to achieve project goals.
                  </p>
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Market Research</h4>
                  <p className="text-foreground/70">
                    Understanding market needs for product development.
                  </p>
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Time & Activity Management</h4>
                  <p className="text-foreground/70">
                    Efficient organization of tasks and deadlines.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
              <p className="text-foreground/80">
                I'm continuously expanding my skill set through online courses, hackathons, and personal projects. Currently focusing on deepening my knowledge in:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-foreground/80">
                <li>Advanced AI agent architectures</li>
                <li>Natural Language Processing techniques</li>
                <li>Full-stack development with React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
