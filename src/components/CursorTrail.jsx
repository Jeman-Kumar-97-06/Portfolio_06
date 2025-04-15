// CursorTrail.jsx
import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const trailRef = useRef([]);
  const numDots = 30;
  const speed = 0.2;

  useEffect(() => {
    // initialize dots
    trailRef.current = Array.from({ length: numDots }, () => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      let prev = target;

      trailRef.current = trailRef.current.map((dot, i) => {
        const dx = prev.x - dot.x;
        const dy = prev.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const trailSpeed = dist < 4 ? 1 : speed;

        const newDot = {
          x: dot.x + dx * trailSpeed,
          y: dot.y + dy * trailSpeed,
        };

        prev = newDot;
        return newDot;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [target]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]">
      {trailRef.current.map((dot, i) => (
        <div
          key={i}
          className="absolute w-[4px] h-[4px] rounded-full bg-pink-500"
          style={{
            left: dot.x,
            top: dot.y,
            transform: "translate(-50%, -50%)",
            opacity: 0.1 + (i / numDots) * 0.9,
          }}
        />
      ))}
    </div>
  );
}