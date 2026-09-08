import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({ images, index, onClose, onNext, onPrev }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brown/95 px-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery preview"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="focus-ring absolute top-5 right-5 text-ivory/80 hover:text-ivory p-2"
          aria-label="Close gallery"
        >
          <X size={30} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="focus-ring absolute left-2 sm:left-6 text-ivory/80 hover:text-ivory p-2"
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>

        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={images[index]}
          alt={`Wedding gallery photo ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="focus-ring absolute right-2 sm:right-6 text-ivory/80 hover:text-ivory p-2"
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>

        <p className="absolute bottom-5 text-ivory/70 text-sm">
          {index + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
