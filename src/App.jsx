import { useState } from "react";
import Navbar from "./components/Navbar";
import OpeningInvitation from "./components/OpeningInvitation";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import QuoteSection from "./components/QuoteSection";
import LoveStory from "./components/LoveStory";
import CountdownSection from "./components/CountdownSection";
import EventsSection from "./components/EventsSection";
import VenueSection from "./components/VenueSection";
import FamilySection from "./components/FamilySection";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import GiftSection from "./components/GiftSection";
import ContactSection from "./components/ContactSection";
import ThankYouSection from "./components/ThankYouSection";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <>
      {!invitationOpened && <OpeningInvitation onOpen={() => setInvitationOpened(true)} />}

      <Navbar visible={invitationOpened} />

      <main>
        <HeroSection />
        <CoupleSection />
        <QuoteSection />
        <LoveStory />
        <CountdownSection />
        <EventsSection />
        <VenueSection />
        <FamilySection />
        <GallerySection />
        <RSVPSection />
        <GiftSection />
        <ContactSection />
        <ThankYouSection />
      </main>

      <Footer />

      {invitationOpened && <MusicPlayer autoPlayOnMount />}
    </>
  );
}

export default App;
