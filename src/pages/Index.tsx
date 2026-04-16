import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, motionAllowed } from "@/lib/gsap";

const Index = () => {
  const root = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!motionAllowed()) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .from("[data-animate='eyebrow']", { y: 18, autoAlpha: 0, duration: 0.45 })
        .from("[data-animate='headline']", { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.18")
        .from("[data-animate='body']", { y: 18, autoAlpha: 0, duration: 0.55, stagger: 0.08 }, "-=0.35")
        .from("[data-animate='cta']", { y: 16, autoAlpha: 0, duration: 0.45, stagger: 0.1 }, "-=0.28")
        .from("[data-animate='social']", { y: 14, autoAlpha: 0, duration: 0.35, stagger: 0.08 }, "-=0.22")
        .from("[data-animate='portrait']", { y: 26, rotate: 5, autoAlpha: 0, duration: 0.8 }, "-=0.68")
        .from("[data-animate='scrollcue']", { y: 12, autoAlpha: 0, duration: 0.4 }, "-=0.2");

      gsap.to("[data-parallax='hero-copy']", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-animate='hero']",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to("[data-parallax='hero-portrait']", {
        yPercent: -10,
        rotate: 4,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-animate='hero']",
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
        },
      });

      gsap.to("[data-parallax='hero-orb-a']", {
        yPercent: -22,
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-animate='hero']",
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.to("[data-parallax='hero-orb-b']", {
        yPercent: 18,
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-animate='hero']",
          start: "top top",
          end: "bottom top",
          scrub: 1.35,
        },
      });

      gsap.to("[data-animate='hero-stage']", {
        scale: 0.96,
        autoAlpha: 0.3,
        transformOrigin: "center top",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-animate='hero']",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='section']").forEach((element) => {
        gsap.from(element, {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='stagger']").forEach((element) => {
        gsap.from(element.children, {
          y: 18,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div ref={root}>
      {/* Hero Section */}
      <section data-animate="hero" className="min-h-screen flex items-center pt-24 pb-12 relative">
        <div className="container mx-auto">
          <div data-animate="hero-stage" className="flex flex-col lg:flex-row items-center gap-10">
            <div data-parallax="hero-copy" className="w-full lg:w-1/2 order-2 lg:order-1">
              <p data-animate="eyebrow" className="inline-flex items-center rounded-full border border-border bg-card/80 px-4 py-1 text-sm font-semibold mb-5">
                AI Engineer • Builder • Problem Solver
              </p>
              <h1 data-animate="headline" className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-tech-purple via-tech-pink to-tech-blue bg-clip-text text-transparent">Thejas Thomas Mathew</span>
              </h1>
              <p data-animate="body" className="text-xl md:text-2xl mt-4 text-foreground/80 max-w-xl">
                A passionate AI and Computer Science enthusiast.
              </p>
              <p data-animate="body" className="mt-6 text-lg text-foreground/70 max-w-xl">
                Final-year B.Tech CSE(AI) student building AI-driven systems and exploring intelligent solutions through modern software.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link data-animate="cta" to="/projects">
                  <Button size="lg">View My Work</Button>
                </Link>
                <Link data-animate="cta" to="/contact">
                  <Button variant="playful" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-5">
                <a data-animate="social" href="https://github.com/thejazzzz" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
                <a data-animate="social" href="https://www.linkedin.com/in/thejas-thomas-5834a0253" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a data-animate="social" href="mailto:thejasthomas2@gmail.com" className="text-foreground/70 hover:text-tech-purple transition-colors rounded-full border border-border/80 bg-card/80 p-2.5" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center order-1 lg:order-2">
              <div data-animate="portrait" data-parallax="hero-portrait" className="relative float-slow">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2.2rem] overflow-hidden border-4 border-tech-purple/50 shadow-xl rotate-2">
                  <img alt="Thejas Thomas Mathew" className="w-full h-full object-cover" src="/lovable-uploads/8b9b41e6-4bbe-46e2-bb4d-31ab9e43cc20.png" />
                </div>
                {/* Decorative elements */}
                <div data-parallax="hero-orb-a" className="absolute -top-4 -right-4 w-20 h-20 bg-tech-purple/30 rounded-full blur-xl"></div>
                <div data-parallax="hero-orb-b" className="absolute -bottom-2 -left-6 w-24 h-24 bg-tech-blue/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
          <div data-animate="scrollcue" className="absolute left-1/2 bottom-8 transform -translate-x-1/2 hidden md:block">
            <button onClick={scrollToAbout} className="flex flex-col items-center text-foreground/60 hover:text-tech-blue transition-colors" aria-label="Scroll to About section">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about-section" data-animate="section" className="py-16">
        <div className="container mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 section-shell">
              <p className="text-lg mb-6">
                Skilled in programming and AI Agent development, I have contributed to projects like a task management system (1st runner-up at Eden 3.0) and an AI-based healthcare solution (winning team at Sinova'24). 
              </p>
              <p className="text-lg mb-6">
                Currently, I am working on a Multi-Agent Career Assistant for AI-driven career guidance and the Snacker Vending Machine App for seamless QR-based vending.
              </p>
              <p className="text-lg">
                Pursuing a B.Tech in Computer Science with AI at Providence College of Engineering (2022–2026), I have a strong foundation in AI, backend development, problem-solving, and teamwork.
              </p>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="playful">Learn More About Me</Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="gradient-panel noise-overlay p-6 rounded-3xl">
                <h3 className="font-semibold text-xl mb-4">Education</h3>
                <div className="mb-6">
                  <p className="font-medium">B.Tech in Computer Science with AI</p>
                  <p className="text-foreground/70">Providence College of Engineering</p>
                  <p className="text-foreground/70">Chengannur, Kerala</p>
                  <p className="text-sm text-foreground/60 mt-1">Expected Graduation: 2026</p>
                </div>

                <h3 className="font-semibold text-xl mb-4">Achievements</h3>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li>Runner-Up at Eden 3.0 (Zenwork, 2024)</li>
                  <li>Winner at Sinova'24 Hackathon (SCMS Kochi, 2024)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section Preview */}
      <section data-animate="section" className="py-16 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div data-animate="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
            <div className="section-shell">
              <h3 className="text-xl font-semibold font-display mb-3">Virtual Research Assistant (VRA)</h3>
              <p className="text-foreground/70 mb-4">
                AI-powered research automation platform that acquires scholarly data, constructs knowledge/citation/author graphs, identifies research gaps, and generates structured reports with interactive approval gates.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">ChromaDB</span>
              </div>
            </div>
            <div className="section-shell">
              <h3 className="text-xl font-semibold font-display mb-3">Rapid Rescue (Sinova'24 Winner)</h3>
              <p className="text-foreground/70 mb-4">
                AI healthcare solution that analyzes symptoms for diagnosis and emergency transport support.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                <span className="skill-tag">Healthcare</span>
                <span className="skill-tag">AI</span>
                <span className="skill-tag">ML</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="playful">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section data-animate="section" className="py-16">
        <div className="container mx-auto">
          <div className="gradient-panel noise-overlay p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Interested in working together?</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <Button variant="neon" size="lg">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;