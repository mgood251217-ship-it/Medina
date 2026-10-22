import './Icon.css'

const icons = {
  shieldCheck: {
    viewBox: '0 0 24 24',
    strokeWidth: 1.8,
    content: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  },
  briefcase: {
    viewBox: '0 0 24 24',
    strokeWidth: 1.8,
    content: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a20 20 0 0 0 18 0M12 12v3" />
      </>
    ),
  },
  plus: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M12 4v16M4 12h16" />,
  },
  minus: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M4 12h16" />,
  },
  check: {
    viewBox: '0 0 24 24',
    strokeWidth: 2.5,
    content: <path d="m5 12 4 4L19 6" />,
  },
  arrowLeft: {
    viewBox: '0 0 24 24',
    strokeWidth: 2.5,
    content: <path d="M20 12H4m7-7-7 7 7 7" />,
  },
  arrowRight: {
    viewBox: '0 0 24 24',
    strokeWidth: 2.5,
    content: <path d="M4 12h16m-7-7 7 7-7 7" />,
  },
  play: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="m8 4 12 8-12 8Z" />,
  },
  pause: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M8 4v16M16 4v16" />,
  },
  mapPin: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7L22 6" />
      </>
    ),
  },
  fileText: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 12h8M8 16h8" />
      </>
    ),
  },
  cloudDownload: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <path d="M6 17a5 5 0 0 1-.7-9.9A7 7 0 0 1 19 8a4.5 4.5 0 0 1 0 9" />
        <path d="M12 11v11m-4-4 4 4 4-4" />
      </>
    ),
  },
  download: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M12 3v12m-5-5 5 5 5-5M3 15v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5" />,
  },
  facebook: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h4l1-4h-5V7a1 1 0 0 1 1-1h3Z" />,
  },
  instagram: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="6" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  tiktok: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: <path d="M14 3h3c0 3 2 5 5 5v3a9 9 0 0 1-5-2v8a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2Z" />,
  },
  x: {
    viewBox: '0 0 24 24',
    strokeWidth: 1.8,
    content: <path d="M4 3h4l12 18h-4ZM20 3l-7 8M4 21l7-8" />,
  },
  youtube: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 6 3-6 3Z" />
      </>
    ),
  },
  whatsapp: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <path d="m3 21 1.5-5A9 9 0 1 1 8 20Z" />
        <path d="M8 7c-2 2 3 9 6 9l2-2-3-2-1 1c-1-1-2-2-2-3l1-1Z" />
      </>
    ),
  },
  loader: {
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    content: (
      <>
        <circle cx="12" cy="12" r="9" opacity="0.2" />
        <path d="M12 3a9 9 0 0 1 9 9" />
      </>
    ),
  },
  book: {
    viewBox: '0 0 64 64',
    strokeWidth: 2.5,
    content: (
      <>
        <path d="M32 18C25 11 16 10 10 12v37c7-2 15 0 22 5 7-5 15-7 22-5V12c-6-2-15-1-22 6Z" />
        <path d="M32 18v36M10 17H5v39c8-3 18-2 27 2 9-4 19-5 27-2V17h-5M15 18v26c5 0 9 1 13 4" />
      </>
    ),
  },
  gallery: {
    viewBox: '0 0 64 64',
    strokeWidth: 4,
    content: (
      <>
        <path d="M13 14V6h48v42h-8" />
        <path d="M4 14h49v43H4z" />
        <path d="m4 44 14-14 15 16 9-8 11 10" />
        <circle cx="40" cy="27" r="5" />
      </>
    ),
  },
  activities: {
    viewBox: '0 0 64 64',
    strokeWidth: 4,
    content: (
      <>
        <path d="m6 15 4 4 9-10M6 32l4 4 9-10M27 15h29M27 32h29M27 49h29" />
        <circle cx="10" cy="49" r="2" fill="currentColor" />
      </>
    ),
  },
  register: {
    viewBox: '0 0 64 64',
    strokeWidth: 4,
    content: (
      <>
        <circle cx="32" cy="32" r="27" />
        <path d="M24 24a8 8 0 0 1 16 0c0 6-8 8-8 14" />
        <circle cx="32" cy="46" r="1.5" fill="currentColor" />
      </>
    ),
  },
  chevronDown: {
    viewBox: '0 0 24 24',
    strokeWidth: 3,
    content: <path d="m6 9 6 6 6-6" />,
  },
}

export default function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth,
  title,
  className = '',
  style,
  ...props
}) {
  const icon = Object.hasOwn(icons, name) ? icons[name] : null

  if (!icon) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`.trim()}
      style={{ color, ...style }}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title && <title>{title}</title>}
      {icon.content}
    </svg>
  )
}
