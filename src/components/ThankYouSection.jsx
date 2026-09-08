import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import FloatingPetals from "./FloatingPetals";
import SectionDivider from "./SectionDivider";

const weddingDateLabel = new Date(weddingData.weddingDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function ThankYouSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brown via-maroon-dark to-maroon py-24 sm:py-32 px-4 text-center">
      <FloatingPetals count={10} />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-heading text-5xl sm:text-6xl text-ivory text-shadow-soft"
      >
        Thank You
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-ivory/80 max-w-md mx-auto"
      >
        Your presence and blessings mean the world to us.
      </motion.p>

      <SectionDivider className="mt-8" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 font-heading text-3xl sm:text-4xl text-gold-light"
      >
        {weddingData.bride.shortName}
        <span className="mx-3 font-script">&amp;</span>
        {weddingData.groom.shortName}
      </motion.p>

      <p className="mt-3 font-script text-xl text-ivory/70">{weddingDateLabel}</p>
    </section>
  );
}
