import { RefObject, useLayoutEffect } from "react";
import { gsap, motionAllowed, ScrollTrigger } from "@/lib/gsap";

export const useScrollReveal = (root: RefObject<HTMLElement>) => {
  useLayoutEffect(() => {
    if (!motionAllowed() || !root.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-animate='section']");
      const cards = gsap.utils.toArray<HTMLElement>("[data-animate='card']");
      const staggers = gsap.utils.toArray<HTMLElement>("[data-animate='stagger']");

      // Batch reveals: fewer ScrollTriggers = smoother scroll on long pages.
      if (sections.length) {
        ScrollTrigger.batch(sections, {
          start: "top 86%",
          once: true,
          onEnter: (batch) => {
            gsap.from(batch, {
              y: 28,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.06,
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      }

      if (cards.length) {
        ScrollTrigger.batch(cards, {
          start: "top 90%",
          once: true,
          onEnter: (batch) => {
            gsap.from(batch, {
              y: 24,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.05,
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      }

      staggers.forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 86%",
          once: true,
          onEnter: () => {
            gsap.from(element.children, {
              y: 18,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.075,
              ease: "power2.out",
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      });
    }, root);

    return () => {
      // Ensure we don't leave ScrollTriggers behind for this page subtree.
      const container = root.current;
      if (container) {
        ScrollTrigger.getAll().forEach((t) => {
          const trigger = t.trigger as Element | null;
          if (trigger && container.contains(trigger)) {
            t.kill(false);
          }
        });
      }
      ctx.revert();
    };
  }, [root]);
};
