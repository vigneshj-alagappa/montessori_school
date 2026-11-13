/* Wavy edge at the bottom (or, flipped, the top) of a coloured band */
export function Wave({ className = '' }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0 44c180 34 330 38 520 16S860 8 1060 18s270 34 380 26v36H0z" />
    </svg>
  )
}
