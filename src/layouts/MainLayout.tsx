
import { useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { gsap, motionAllowed } from "@/lib/gsap";

const MainLayout = () => {
  const location = useLocation();
  const root = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useLayoutEffect(() => {
    if (!motionAllowed() || !root.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to("[data-parallax='orb-left']", {
        yPercent: 20,
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to("[data-parallax='orb-right']", {
        yPercent: -14,
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!contentRef.current || !motionAllowed()) {
      return;
    }

    gsap.fromTo(
      contentRef.current,
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out", clearProps: "transform,opacity,visibility" }
    );
  }, [location.pathname]);

  return (
    <div ref={root} className="flex flex-col min-h-screen relative">
      <div data-parallax="orb-left" className="decor-orb w-72 h-72 bg-tech-purple/20 -top-16 -left-16" />
      <div data-parallax="orb-right" className="decor-orb w-80 h-80 bg-tech-blue/20 top-1/3 -right-20" />
      <Navbar />
      <main ref={contentRef} className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
