import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex md:items-center">
      {/* Dot on the center line (desktop) / left line (mobile) */}
      <span
        className="absolute left-4 md:left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-ivory"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
          isEven ? "md:mr-auto md:text-right md:pr-10" : "md:ml-auto md:pl-10"
        }`}
      >
        <div className="rounded-xl border border-gold/30 bg-white/70 backdrop-blur-sm px-5 py-4 shadow-sm inline-block text-left">
          <span className="font-heading text-xl text-gold">{item.year}</span>
          <h3 className="mt-1 font-heading text-lg sm:text-xl text-maroon">{item.title}</h3>
          <p className="mt-1 text-sm text-brown/70">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoveStory() {
  return (
    <section id="story" className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">Our Journey</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Our Story</h2>
        <SectionDivider className="mt-5" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <span
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gold/30"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-10 sm:gap-14">
          {weddingData.story.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
