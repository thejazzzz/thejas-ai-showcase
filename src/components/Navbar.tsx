import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/75 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-display font-extrabold text-xl tracking-tight">
          <span className="bg-gradient-to-r from-tech-purple via-tech-pink to-tech-blue bg-clip-text text-transparent">
            Thejas
          </span>
          <span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 rounded-full border border-border/70 bg-card/75 px-3 py-2 shadow-[0_14px_32px_-20px_rgba(109,40,217,0.7)] backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="nav-link hover:text-tech-purple transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <Button variant="playful" size="sm">Download CV</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-xl border border-border/70 bg-card/80 p-2.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 animate-fade-in px-4 pb-4">
          <div className="container mx-auto rounded-3xl border border-border/70 bg-card/95 backdrop-blur-xl py-4 flex flex-col space-y-2 shadow-[0_24px_50px_-24px_rgba(109,40,217,0.8)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 px-4 hover:bg-secondary/70 rounded-xl transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="playful" className="w-full">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
