"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

 const handleClick = () => {
  if (rippleRef.current) {
    rippleRef.current.classList.remove("animate-ripple");
    void rippleRef.current.offsetWidth;
    rippleRef.current.classList.add("animate-ripple");
  }
};


    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", () => setClicking(true));
    window.addEventListener("mouseup", () => setClicking(false));
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", () => setClicking(true));
      window.removeEventListener("mouseup", () => setClicking(false));
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const follow = () => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate(${position.x - 16}px, ${position.y - 16}px)`;
        dotRef.current.style.transform = `translate(${position.x - 4}px, ${position.y - 4}px)`;
        rippleRef.current!.style.transform = `translate(${position.x - 16}px, ${position.y - 16}px)`;
      }
      requestAnimationFrame(follow);
    };
    follow();
  }, [position]);

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block">
      {/* Outer Ring */}
      <div
        ref={cursorRef}
        className={`w-8 h-8 rounded-full mix-blend-difference transition-all duration-300 ease-out 
        ${hovering ? "scale-150 bg-white/30" : "scale-100 bg-white/10"} 
        ${clicking ? "scale-75" : ""} backdrop-blur-[2px]`}
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 w-2 h-2 rounded-full bg-white transition-all duration-150`}
      />

      {/* Ripple Animation */}
      <div
        ref={rippleRef}
        className="absolute top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full opacity-40 pointer-events-none animate-ripple scale-100"
      />
    </div>
  );
};

export default CustomCursor;
