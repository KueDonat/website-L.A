"use client";

import { useEffect, useRef } from "react";

export default function NetworkParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add subtle glow to points
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }

      update(canvasWidth: number, canvasHeight: number) {
        if (this.x > canvasWidth || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const isMobile = width < 768;
    const particles: Particle[] = [];
    const particleCount = isMobile ? 20 : 40; // Optimized: Lower count
    
    // Mouse interaction radius
    const mouse = {
      x: -1000,
      y: -1000,
      radius: isMobile ? 100 : 180 // Smaller on mobile
    };

    function init() {
      particles.length = 0;
      const colors = ["#3b82f6", "#60a5fa", "#D4AF37"]; 

      for (let i = 0; i < particleCount; i++) {
        const size = (Math.random() * (isMobile ? 1.5 : 2)) + 1;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const directionX = (Math.random() * 0.4) - 0.2; // Slower
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      if (!ctx) return;
      
      const maxDistance = isMobile ? 100 : 150;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = (dx * dx) + (dy * dy);

          if (distance < (maxDistance * maxDistance)) {
            const opacityValue = 1 - (distance / (maxDistance * maxDistance));
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 0.5;
            // ctx.shadowBlur = 0; // Removed expensive shadow
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        const msDx = mouse.x - particles[a].x;
        const msDy = mouse.y - particles[a].y;
        const msDistance = (msDx * msDx) + (msDy * msDy);
        
        if (msDistance < (mouse.radius * mouse.radius)) {
          const opacityValue = 1 - (msDistance / (mouse.radius * mouse.radius));
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacityValue * 0.5})`; 
          ctx.lineWidth = 0.8;
          // ctx.shadowBlur = 0; // Removed expensive shadow
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(width, height);
      }
      connect();
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-1 mix-blend-screen"
    />
  );
}
