import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

export default function VenueSection() {
  const { venue } = weddingData;

  return (
    <section className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">Where To Celebrate</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Wedding Venue</h2>
          <SectionDivider className="mt-5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-gold/30 shadow-sm bg-white/60"
        >
          <img
            src={venue.image}
            alt={`${venue.name} venue`}
            loading="lazy"
            className="h-64 md:h-full w-full object-cover"
          />

          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 text-center md:text-left">
            <h3 className="font-heading text-3xl text-maroon">{venue.name}</h3>
            <p className="flex items-start md:items-center justify-center md:justify-start gap-2 mt-3 text-brown/75">
              <MapPin size={18} className="shrink-0 mt-0.5 md:mt-0" aria-hidden="true" />
              {venue.address}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm uppercase tracking-wide text-ivory hover:bg-maroon-dark transition-colors"
              >
                <MapPin size={16} aria-hidden="true" /> Google Maps
              </a>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-gold px-6 py-3 text-sm uppercase tracking-wide text-maroon hover:bg-gold hover:text-white transition-colors"
              >
                <Navigation size={16} aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
