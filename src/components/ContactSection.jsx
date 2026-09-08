import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

export default function ContactSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-gold text-xs sm:text-sm">Get In Touch</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-maroon">Contact Us</h2>
        <SectionDivider className="mt-5" />
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-6">
        {weddingData.contact.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm px-6 py-8 text-center"
          >
            <h3 className="font-heading text-xl text-maroon">{c.title}</h3>
            <p className="mt-2 text-brown/70">{c.phone}</p>
            <div className="mt-5 flex justify-center gap-3">
              <a
                href={`tel:${c.phone}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm text-ivory hover:bg-maroon-dark transition-colors"
              >
                <Phone size={16} /> Call
              </a>
              <a
                href={`https://wa.me/${c.phone.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm text-maroon hover:bg-gold hover:text-white transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
