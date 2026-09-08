import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import weddingData from "../data/weddingData";

export default function MusicPlayer({ autoPlayOnMount = false }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoPlayOnMount || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // Autoplay blocked — user can start manually.
  }, [autoPlayOnMount]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music} loop preload="none" />
      <button
        onClick={toggle}
        className="focus-ring fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-ivory shadow-lg hover:bg-maroon-dark transition-colors"
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
      >
        <span className={playing ? "animate-spin-slow" : ""}>
          {playing ? <Pause size={20} /> : <Music size={20} />}
        </span>
      </button>
    </>
  );
}
