export default function QuickLinkIcon({ name }) {
  const icons = {
    book: (
      <>
        <path d="M32 18C25 11 16 10 10 12v37c7-2 15 0 22 5 7-5 15-7 22-5V12c-6-2-15-1-22 6Z" />
        <path d="M32 18v36M10 17H5v39c8-3 18-2 27 2 9-4 19-5 27-2V17h-5M15 18v26c5 0 9 1 13 4" />
      </>
    ),
    gallery: (
      <>
        <path d="M13 14V6h48v42h-8" />
        <path d="M4 14h49v43H4z" />
        <path d="m4 44 14-14 15 16 9-8 11 10" />
        <circle cx="40" cy="27" r="5" />
      </>
    ),
    activities: (
      <>
        <path d="m6 15 4 4 9-10M6 32l4 4 9-10M27 15h29M27 32h29M27 49h29" />
        <circle cx="10" cy="49" r="2" fill="currentColor" />
      </>
    ),
    register: (
      <>
        <circle cx="32" cy="32" r="27" />
        <path d="M24 24a8 8 0 0 1 16 0c0 6-8 8-8 14" />
        <circle cx="32" cy="46" r="1.5" fill="currentColor" />
      </>
    ),
  }

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === 'book' ? 2.5 : 4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  )
}
