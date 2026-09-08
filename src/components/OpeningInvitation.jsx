import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import weddingData from "../data/weddingData";

const weddingDateLabel = new Date(weddingData.weddingDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function OpeningInvitation({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleOpen = () => {
    if (opening) return;
    if (prefersReducedMotion) {
      onOpen();
      return;
    }
    setOpening(true);
    setTimeout(onOpen, 950);
  };

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-maroon via-maroon-dark to-brown px-4"
      >
        {/* Ornamental corner flourishes */}
        <div className="absolute inset-4 sm:inset-8 border border-gold/40 rounded-2xl pointer-events-none" aria-hidden="true" />

        <div className="relative w-full max-w-md text-center">
          {/* Envelope flap */}
          <motion.div
            className="mx-auto mb-8 h-24 w-24 sm:h-28 sm:w-28"
            initial={{ rotateX: 0 }}
            animate={opening ? { rotateY: 180, opacity: 0 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full text-gold drop-shadow-[0_0_12px_rgba(201,162,39,0.4)]">
              <rect x="10" y="20" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M12 22 L50 55 L88 22" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="uppercase tracking-[0.35em] text-gold-light text-xs sm:text-sm mb-4"
          >
            Together with their families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-heading text-4xl sm:text-6xl text-ivory text-shadow-soft leading-tight"
          >
            {weddingData.bride.shortName}
            <span className="block font-script text-gold-light text-3xl sm:text-4xl my-1">&amp;</span>
            {weddingData.groom.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-ivory/85 tracking-wide text-sm sm:text-base"
          >
            are getting married
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-1 font-script text-2xl sm:text-3xl text-gold-light"
          >
            {weddingDateLabel}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            onClick={handleOpen}
            disabled={opening}
            className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full border border-gold bg-gold/10 px-8 py-3 text-sm sm:text-base tracking-[0.15em] uppercase text-gold-light hover:bg-gold hover:text-maroon-dark transition-colors duration-300 disabled:opacity-70"
          >
            {opening ? "Opening…" : "Open Invitation"}
          </motion.button>

          <button
            onClick={onOpen}
            className="focus-ring mt-4 block mx-auto text-xs text-ivory/60 hover:text-ivory underline underline-offset-4"
          >
            Skip
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
