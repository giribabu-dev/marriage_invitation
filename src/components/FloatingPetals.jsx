import { useState } from "react";
import { useReducedMotion } from "framer-motion";

function generatePetals(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 9 + Math.random() * 8,
    size: 8 + Math.random() * 10,
    drift: (Math.random() - 0.5) * 120,
  }));
}

// Subtle falling-petal ambience. Purely decorative — aria-hidden, pointer-events none.
export default function FloatingPetals({ count = 12, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  // Lazy initializer runs once per mount (not on re-render), keeping render itself pure.
  const [petals] = useState(() => generatePetals(count));

  if (prefersReducedMotion) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block rounded-tl-full rounded-br-full bg-gold/50"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            "--drift": `${p.drift}px`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
