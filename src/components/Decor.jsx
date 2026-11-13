/* Sun and rainbow drawing used in page headers */
export function Decor() {
  return (
    <svg className="decor" width="170" height="120" viewBox="0 0 170 120" aria-hidden="true">
      <g stroke="#ffc21a" strokeWidth="5" strokeLinecap="round">
        <path d="M128 6v9M128 55v9M99 35h9M148 35h9M108 15l6 6M142 49l6 6M148 15l-6 6M114 49l-6 6" />
      </g>
      <circle cx="128" cy="35" r="15" fill="#ffd83d" />
      <g fill="none" strokeWidth="7">
        <path stroke="#e8467c" d="M12 104a38 38 0 0 1 76 0" />
        <path stroke="#ffc21a" d="M20 104a30 30 0 0 1 60 0" />
        <path stroke="#2e9e4f" d="M28 104a22 22 0 0 1 44 0" />
        <path stroke="#3b9fe0" d="M36 104a14 14 0 0 1 28 0" />
      </g>
    </svg>
  )
}
