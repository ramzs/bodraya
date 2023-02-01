import Rellax from 'rellax';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger);

export const paralax = () => {
  document.querySelectorAll(".parallax").forEach((i) => {
    const anim = gsap.to(i, {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    });

    ScrollTrigger.create({
      trigger: i,
      animation: anim,
      // Uncomment these to see how they affect the ScrollTrigger
      // markers: true,
      start: "top 70%",
      invalidateOnRefresh: true,
      // scrub: true,
      // markers: true,
      // end: "top 100px",
      // toggleClass: "active",
      // pin: true,
      // onUpdate: self => {
      //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
      // }
    });
  });

  // const onVisible = (element) => {
  //   gsap.to(element, {
  //     opacity: 1,
  //     duration: 1.5,
  //     ease: "power3.out"
  //   });
  // }
  //
  // const observerElements = document.querySelectorAll('.parallax');
  // const observerOptions = {
  //   root: null,
  //   rootMargin: '0px 0px -15% 0px',
  //   threshold: 0
  // };
  // const Observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach(entry => {
  //       // animation targets
  //       if (entry.intersectionRatio > 0) {
  //         // Run GSAP animation tween.
  //         onVisible(entry.target);
  //         // remove the observer after it's triggered
  //         Observer.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   observerOptions
  // );
  //
  // observerElements.forEach(el => {
  //   Observer.observe(el);
  //
  //   window.addEventListener("resize", () => {
  //     Observer.observe(el);
  //   })
  // });


  document.querySelectorAll(".parallax-mouse").forEach((i) => {
    document.addEventListener("mousemove", parallaxMouse);
    function parallaxMouse(event) {
      const position = 3;
      const mouseX = (window.innerWidth - event.screenX * position) / 90;
      const mouseY = (window.innerHeight - event.screenY * position) / 90;

      gsap.to(i, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power1.easeOut"
      });
    }
  });

  const rellax = new Rellax('.parallax-scroll', {
    speed: 3,
    center: true,
    // wrapper: null,
    // round: true,
    // vertical: true,
    // horizontal: false
  });

}



