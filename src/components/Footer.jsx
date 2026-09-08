import { Heart } from "lucide-react";
import weddingData from "../data/weddingData";

export default function Footer() {
  return (
    <footer className="bg-brown py-8 px-4 text-center text-ivory/70">
      <p className="flex items-center justify-center gap-1.5 text-sm">
        Made with love <Heart size={14} className="fill-gold text-gold" aria-hidden="true" />
      </p>
      <p className="mt-1 font-script text-lg text-gold-light">
        {weddingData.bride.shortName} &amp; {weddingData.groom.shortName}
      </p>
      <p className="mt-1 text-xs text-ivory/50">
        &copy; {new Date(weddingData.weddingDate).getFullYear()}
      </p>
    </footer>
  );
}
