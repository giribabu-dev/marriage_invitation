// Small ornamental gold divider used between/within sections.
export default function SectionDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 sm:w-16 bg-gold/60" />
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-gold shrink-0">
        <path
          fill="currentColor"
          d="M12 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6z"
        />
      </svg>
      <span className="h-px w-10 sm:w-16 bg-gold/60" />
    </div>
  );
}
