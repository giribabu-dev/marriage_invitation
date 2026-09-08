import { motion } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";
import weddingData from "../data/weddingData";
import SectionDivider from "./SectionDivider";

export default function GiftSection() {
  const { upi } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upi.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <section className="bg-ivory py-20 sm:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <Gift className="mx-auto text-gold" size={34} aria-hidden="true" />
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-maroon">
          Your Presence Is Our Greatest Gift
        </h2>
        <SectionDivider className="mt-5" />
        <p className="mt-6 text-brown/70 max-w-md mx-auto">
          Having you with us on our special day is more than enough. For those who wish
          to send a blessing, a small token is warmly welcomed.
        </p>

        {upi.id && (
          <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-2xl border border-gold/30 bg-white/70 backdrop-blur-sm px-8 py-8">
            <img
              src={upi.qrCode}
              alt="UPI QR code for sending blessings"
              loading="lazy"
              className="h-36 w-36 rounded-lg border border-gold/20"
            />
            <div className="flex items-center gap-2">
              <span className="font-medium text-brown">{upi.id}</span>
              <button
                onClick={handleCopy}
                className="focus-ring text-gold hover:text-maroon transition-colors"
                aria-label="Copy UPI ID"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <span className="text-xs uppercase tracking-widest text-brown/50">
              Send Your Blessings
            </span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
