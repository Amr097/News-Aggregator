import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(dependencies = []) {
  const elementsRef = useRef([]);

  useEffect(() => {
    if (elementsRef.current.length > 0) {
      // Clear existing triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Animate each element
      elementsRef.current.forEach((element) => {
        if (element) {
          gsap.set(element, { y: 30, opacity: 0 });

          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, dependencies);

  const addToRefs = (el) => {
    if (el) elementsRef.current.push(el);
  };

  const clearRefs = () => {
    elementsRef.current = [];
  };

  return { addToRefs, clearRefs };
}
