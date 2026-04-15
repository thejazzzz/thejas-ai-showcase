
import SkillCategory from "@/components/SkillCategory";

const Skills = () => {
  return (
    <div className="page-shell">
      <div className="container mx-auto">
        <h1 className="text-4xl font-display font-bold mb-12">My Skills</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8">
              My technical expertise has grown through academic study and hands-on project experience. Here's a comprehensive overview of my skills:
            </p>
            
            <SkillCategory
              title="Programming Languages"
              skills={["Python", "Java", "C", "JavaScript", "TypeScript"]}
            />
            
            <SkillCategory
              title="AI & Machine Learning"
              skills={["TensorFlow", "Scikit-Learn", "LangChain", "CrewAI", "NLP", "Multi-Agent Systems", "NLTK", "LLM Integration", "Knowledge Graphs", "LLM Pipelines", "Prompt Engineering"]}
            />
            
            <SkillCategory
              title="Backend & Web Development"
              skills={["FastAPI", "REST APIs", "React.js", "Next.js", "Streamlit", "Firebase"]}
            />
            
            <SkillCategory
              title="Databases & Storage"
              skills={["PostgreSQL", "MySQL", "SQLAlchemy", "Redis", "ChromaDB", "Supabase"]}
            />
          </div>
          
          <div>
            <div className="section-shell mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Development & DevOps</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>LaTeX</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Libraries & Frameworks</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Plotly</li>
                  <li>Requests</li>
                  <li>pyPDF2</li>
                  <li>NetworkX</li>
                </ul>
              </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="section-shell">
                  <h4 className="font-medium mb-2">Problem Solving</h4>
                  <p className="text-foreground/70">
                    Breaking down complex problems and implementing efficient solutions across AI and backend systems.
                  </p>
                </div>
                <div className="section-shell">
                  <h4 className="font-medium mb-2">Team Collaboration</h4>
                  <p className="text-foreground/70">
                    Experience working in diverse teams and implementing Agile methodologies for project success.
                  </p>
                </div>
                <div className="section-shell">
                  <h4 className="font-medium mb-2">Market Research</h4>
                  <p className="text-foreground/70">
                    Understanding market needs and competitive landscapes for product development.
                  </p>
                </div>
                <div className="section-shell">
                  <h4 className="font-medium mb-2">Time Management</h4>
                  <p className="text-foreground/70">
                    Efficient organization and prioritization of tasks across multiple concurrent projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-panel noise-overlay p-6">
              <h3 className="text-xl font-display font-semibold mb-4">Professional Development</h3>
              <p className="text-foreground/80">
                I'm continuously expanding my skill set through hands-on projects and real-world applications. Currently focused on:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-foreground/80">
                <li>Advanced multi-agent system architectures</li>
                <li>Natural Language Processing and LLM integration techniques</li>
                <li>Knowledge graph construction and graph analytics</li>
                <li>Full-stack AI applications with Next.js and FastAPI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
