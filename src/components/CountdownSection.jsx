import weddingData from "../data/weddingData";
import Countdown from "./Countdown";
import SectionDivider from "./SectionDivider";

export default function CountdownSection() {
  return (
    <section className="bg-brown py-20 sm:py-24 px-4 text-center">
      <p className="uppercase tracking-[0.3em] text-gold-light text-xs sm:text-sm">Counting Down</p>
      <h2 className="mt-3 font-heading text-3xl sm:text-5xl text-ivory">Until We Say &ldquo;I Do&rdquo;</h2>
      <SectionDivider className="mt-5 mb-10 sm:mb-12" />
      <Countdown targetDate={weddingData.weddingDate} />
    </section>
  );
}
