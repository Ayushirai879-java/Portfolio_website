import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Add custom cursor class to body for CSS pointer overriding
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Outer circle spring follow physics
  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease calculation for smooth spring lag
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      {/* Small Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-600 dark:bg-rose-500 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        }}
      />
      {/* Outer Halo ring with Spring Trail */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-indigo-500/10 border-indigo-500/40 blur-[1px] dark:bg-rose-500/15 dark:border-rose-400/40'
            : 'w-6 h-6 border-indigo-400/60 dark:border-rose-400/50'
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.2 : 1})`,
        }}
      />
    </>
  );
}
