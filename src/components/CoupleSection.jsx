import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

function Portrait({ person, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative">
        <div className="absolute -inset-2 rounded-full border border-gold/50" aria-hidden="true" />
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          loading="lazy"
          width={224}
          height={224}
          className="h-40 w-40 sm:h-56 sm:w-56 rounded-full object-cover shadow-lg ring-4 ring-ivory"
        />
      </div>
      <h3 className="mt-6 font-heading text-3xl sm:text-4xl text-maroon">{person.name}</h3>
      <p className="mt-2 text-sm sm:text-base text-brown/70 max-w-xs">{person.parents}</p>
    </motion.div>
  );
}

export default function CoupleSection() {
  return (
    <section id="couple" className="relative bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm"
        >
          The Couple
        </motion.p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Bride &amp; Groom</h2>
        <SectionDivider className="mt-5" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-8">
          <Portrait person={weddingData.bride} align="left" />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            aria-hidden="true"
          >
            <Heart className="text-gold fill-gold/20" size={40} />
          </motion.div>

          <Portrait person={weddingData.groom} align="right" />
        </div>
      </div>
    </section>
  );
}
