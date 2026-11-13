function Leaf() {
  return (
    <svg className="leaf" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#2e9e4f" d="M15 16C14 8 19 3 29 3c0 9-5 14-14 13z" />
      <path fill="#7cc242" d="M13 21C8 21 4 17 3 10c7 0 11 4 10 11z" />
      <path fill="#2e9e4f" d="M15 28c-3-3-3-6 0-9 3 3 3 6 0 9z" />
    </svg>
  )
}

/* Magenta section title with a leaf, and an optional line underneath */
export function SectionHeading({ title, sub, center = false }) {
  return (
    <div className={`heading ${center ? 'center' : ''}`}>
      <h2><Leaf />{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
