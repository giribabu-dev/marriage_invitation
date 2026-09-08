import { useEffect, useState } from "react";

function getTimeRemaining(target) {
  const total = Math.max(0, new Date(target).getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

// Reusable countdown hook — ticks every second, stops cleanly at zero.
export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeRemaining(targetDate));
    tick();
    const interval = setInterval(() => {
      const next = getTimeRemaining(targetDate);
      setTimeLeft(next);
      if (next.total <= 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
