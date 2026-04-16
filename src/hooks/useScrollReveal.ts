import { RefObject, useLayoutEffect } from "react";
import { gsap, motionAllowed } from "@/lib/gsap";

export const useScrollReveal = (root: RefObject<HTMLElement>) => {
  useLayoutEffect(() => {
    if (!motionAllowed() || !root.current) {
      return;
    }

    const ctx = gsap.context(() => {
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

      gsap.utils.toArray<HTMLElement>("[data-animate='card']").forEach((element) => {
        gsap.from(element, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
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
  }, [root]);
};
