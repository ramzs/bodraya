import Rellax from 'rellax';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export const paralax = () => {
  const rellax = new Rellax('.parallax', {
    speed: 3,
    center: true,
    // wrapper: null,
    // round: true,
    // vertical: true,
    // horizontal: false
  });

  const onVisible = (element) => {
    gsap.to(element, {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    });
  }

  const observerElements = document.querySelectorAll('.parallax');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  };
  const Observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // animation targets
        if (entry.intersectionRatio > 0) {
          // Run GSAP animation tween.
          onVisible(entry.target);
          // remove the observer after it's triggered
          Observer.unobserve(entry.target);
        }
      });
    },
    observerOptions
  );

  observerElements.forEach(el => {
    Observer.observe(el);
  });
}



