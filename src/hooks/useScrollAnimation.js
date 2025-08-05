import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered fade-in animations
 *
 * Creates a subtle scroll animation where elements:
 * - Start 30px below their final position and invisible (opacity: 0)
 * - Animate to their normal position and visible when they enter viewport
 * - Animation triggers when element is 85% from top of viewport
 * - Reverses when scrolling back up (elements fade out again)
 *
 * @param {Array} dependencies - Array of values that trigger re-animation (e.g., [data])
 * @returns {Object} { addToRefs, clearRefs } - Functions to manage element references
 */
export function useScrollAnimation(dependencies = []) {
  const elementsRef = useRef([]);

  useEffect(() => {
    if (elementsRef.current.length > 0) {
      // Clean up any existing scroll triggers to prevent conflicts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Set up animation for each element
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

    // Remove all scroll triggers when component unmounts or dependencies change
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, dependencies);

  //Add element to the animation refs array

  const addToRefs = (el) => {
    if (el) elementsRef.current.push(el);
  };

  //Clear all element references

  const clearRefs = () => {
    elementsRef.current = [];
  };

  return { addToRefs, clearRefs };
}
