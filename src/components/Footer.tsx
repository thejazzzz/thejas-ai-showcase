
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 pb-8">
      <div className="container mx-auto">
        <div className="gradient-panel noise-overlay p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-display font-extrabold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-tech-purple via-tech-pink to-tech-blue bg-clip-text text-transparent">
                Thejas
              </span>
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              © {new Date().getFullYear()} Thejas Thomas Mathew. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/thejazzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thejas-thomas-5834a0253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:thejasthomas2@gmail.com"
              className="text-foreground hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
