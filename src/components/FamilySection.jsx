import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

function FamilyColumn({ family, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center"
    >
      <h3 className="font-heading text-2xl sm:text-3xl text-maroon">{family.title}</h3>
      <p className="mt-3 font-script text-xl text-gold">{family.parents}</p>
      <ul className="mt-5 space-y-2">
        {family.members.map((member) => (
          <li key={member} className="text-sm sm:text-base text-brown/75">
            {member}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FamilySection() {
  const { family } = weddingData;

  return (
    <section className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">With Love</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Our Families</h2>
        <SectionDivider className="mt-5" />
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8">
        <FamilyColumn family={family.bride} align="left" />
        <FamilyColumn family={family.groom} align="right" />
      </div>
    </section>
  );
}
