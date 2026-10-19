import './Icon.css'

const icons = {
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
