import { useState } from "react";
import { motion } from "framer-motion";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";
import GalleryLightbox from "./GalleryLightbox";

export default function GallerySection() {
  const images = weddingData.gallery;
  const [activeIndex, setActiveIndex] = useState(null);

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">Memories</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Our Gallery</h2>
        <SectionDivider className="mt-5" />
      </div>

      <div className="mx-auto max-w-6xl columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            onClick={() => setActiveIndex(i)}
            className="focus-ring mb-4 block w-full overflow-hidden rounded-xl border border-gold/20 group break-inside-avoid"
            aria-label={`Open photo ${i + 1} in full screen`}
          >
            <img
              src={src}
              alt={`Wedding gallery photo ${i + 1}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <GalleryLightbox images={images} index={activeIndex} onClose={() => setActiveIndex(null)} onNext={next} onPrev={prev} />
    </section>
  );
}
