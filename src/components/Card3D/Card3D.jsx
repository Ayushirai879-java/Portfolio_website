import React, { useRef } from 'react';

export default function Card3D({ children, className = '' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates of mouse cursor on card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Center point coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculations (Max 12 degrees rotation)
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    // Set style transforms
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Feed mouse values to dynamic spotlight variables
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    
    // Reset tilt and transformation values
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-200 ease-out will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      {/* Gloss reflection shimmer overlay */}
      <div 
        className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 80%)`
        }}
      />
      <div style={{ transform: 'translateZ(10px)' }} className="h-full">
        {children}
      </div>
    </div>
  );
}
