import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

export default function QuoteSection() {
  return (
    <section className="bg-maroon py-20 sm:py-28 px-4 text-center relative overflow-hidden">
      <div className="mx-auto max-w-2xl relative">
        <span className="font-heading text-6xl sm:text-8xl text-gold/30 leading-none select-none" aria-hidden="true">
          &ldquo;
        </span>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="-mt-6 font-script text-3xl sm:text-4xl md:text-5xl text-ivory leading-snug"
        >
          {weddingData.quote}
        </motion.p>
        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
