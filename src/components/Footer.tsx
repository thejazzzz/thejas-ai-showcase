
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-bold text-xl text-tech-blue">
              Thejas<span className="text-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              © {new Date().getFullYear()} Thejas Thomas Mathew. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/thejazzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tech-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thejas-thomas-5834a0253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-tech-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:thejasthomas2@gmail.com"
              className="text-foreground hover:text-tech-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
