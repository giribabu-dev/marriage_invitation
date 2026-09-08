import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import FloatingPetals from "./FloatingPetals";
import SectionDivider from "./SectionDivider";

const weddingDateLabel = new Date(weddingData.weddingDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-maroon via-maroon-dark to-brown px-4 text-center"
    >
      <FloatingPetals count={10} />

      <div
        className="absolute inset-3 sm:inset-8 rounded-2xl border border-gold/30 pointer-events-none"
        aria-hidden="true"
      />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="uppercase tracking-[0.35em] text-gold-light text-xs sm:text-sm"
      >
        Together with their families
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="mt-6 font-heading text-5xl sm:text-7xl md:text-8xl text-ivory text-shadow-soft leading-tight"
      >
        {weddingData.bride.shortName}
      </motion.h1>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="my-2 font-script text-3xl sm:text-4xl text-gold-light"
      >
        &amp;
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="font-heading text-5xl sm:text-7xl md:text-8xl text-ivory text-shadow-soft leading-tight"
      >
        {weddingData.groom.shortName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-6 text-ivory/85 tracking-wide"
      >
        are getting married
      </motion.p>

      <SectionDivider className="mt-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 font-script text-2xl sm:text-3xl text-gold-light"
      >
        {weddingDateLabel}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 2, delay: 1.2 } }}
        className="absolute bottom-8 text-gold-light/80 text-xs uppercase tracking-[0.3em]"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
