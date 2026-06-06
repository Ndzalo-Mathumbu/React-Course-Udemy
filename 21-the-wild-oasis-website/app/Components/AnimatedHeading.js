"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

function AnimatedText() {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const setup = () => {
      splitRef.current?.revert?.();

      splitRef.current = SplitText.create(textRef.current, {
        type: "words",
      });

      // RUN ANIMATION ONLY AFTER SPLIT IS READY
      animationRef.current?.revert?.();

      animationRef.current = gsap.from(splitRef.current.words, {
        x: 90,
        opacity: 0,
        rotation: "30",
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.3,
      });
    };

    setup();
    window.addEventListener("resize", setup);

    return () => window.removeEventListener("resize", setup);
  }, []);

  return (
    <div className="text-center">
      <h1 ref={textRef}>The Wild Oasis. Welcome to paradise.</h1>
    </div>
  );
}

export default AnimatedText;
