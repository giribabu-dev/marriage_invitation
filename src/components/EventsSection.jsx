import { motion } from "framer-motion";
import { Sun, Flower2, Gem, PartyPopper, MapPin, Clock3 } from "lucide-react";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

const ICONS = {
  haldi: Sun,
  mehendi: Flower2,
  wedding: Gem,
  reception: PartyPopper,
};

function EventCard({ event, index }) {
  const Icon = ICONS[event.id] ?? Gem;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm px-6 py-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon/10 text-maroon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-2xl text-maroon">{event.name}</h3>

      <p className="mt-3 text-sm text-brown/80">{event.date}</p>
      <p className="flex items-center gap-1.5 mt-1 text-sm text-brown/70">
        <Clock3 size={14} aria-hidden="true" /> {event.time}
      </p>
      <p className="flex items-start gap-1.5 mt-1 text-sm text-brown/70 max-w-[220px]">
        <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" /> {event.venue}
      </p>

      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-6 inline-flex items-center gap-1.5 rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-wider text-maroon hover:bg-gold hover:text-white transition-colors"
      >
        View Location
      </a>
    </motion.article>
  );
}

export default function EventsSection() {
  return (
    <section id="events" className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">Save The Date</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Wedding Events</h2>
        <SectionDivider className="mt-5" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {weddingData.events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
