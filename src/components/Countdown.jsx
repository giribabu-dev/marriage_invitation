import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown({ targetDate }) {
  const timeLeft = useCountdown(targetDate);
  const isOver = timeLeft.total <= 0;

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-4 gap-2 sm:gap-5 max-w-2xl mx-auto"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-label={isOver ? "The wedding day has arrived" : "Time remaining until the wedding"}
      >
        {UNITS.map((unit, i) => (
          <motion.div
            key={unit.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-gold/40 bg-white/70 backdrop-blur-sm px-2 py-4 sm:px-4 sm:py-6 shadow-sm"
          >
            <span className="font-heading text-2xl sm:text-4xl md:text-5xl text-maroon tabular-nums">
              {String(timeLeft[unit.key]).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-brown/70">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
      {isOver && (
        <p className="mt-6 text-center font-script text-2xl text-maroon">
          The celebration has begun! 🎉
        </p>
      )}
    </div>
  );
}
