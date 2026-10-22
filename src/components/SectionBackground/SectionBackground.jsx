import { useId } from 'react'
import './SectionBackground.css'

function BackgroundArtwork({ variant, patternId }) {
  if (variant === 'ribbons') {
    return (
      <g fill="none" stroke="currentColor">
        <path d="M-120 420C220 500 420 100 760 120S1200 220 1560 30" strokeWidth="90" />
        <path d="M-120 490C220 570 420 170 760 190S1200 290 1560 100" strokeWidth="18" />
        <path d="M-120 530C220 610 420 210 760 230S1200 330 1560 140" strokeWidth="30" />
      </g>
    )
  }

  if (variant === 'blobs') {
    return (
      <g fill="currentColor">
        <path d="M32 114C15 40 116 8 190 34S324 122 297 195 188 286 108 255 47 190 32 114Z" />
        <path d="M1180 300C1232 228 1354 246 1398 320S1396 465 1310 476 1124 392 1180 300Z" />
        <circle cx="400" cy="410" r="18" opacity="0.5" />
        <circle cx="1090" cy="90" r="12" opacity="0.5" />
      </g>
    )
  }

  if (variant === 'rings') {
    return (
      <g fill="none" stroke="currentColor">
        <ellipse cx="90" cy="100" rx="300" ry="190" strokeWidth="64" />
        <ellipse cx="90" cy="100" rx="365" ry="235" strokeWidth="18" />
        <ellipse cx="1370" cy="440" rx="280" ry="180" strokeWidth="60" />
        <ellipse cx="1370" cy="440" rx="345" ry="225" strokeWidth="18" />
      </g>
    )
  }

  if (variant === 'dots') {
    return (
      <>
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="1440" height="500" fill={`url(#${patternId})`} />
      </>
    )
  }

  return (
    <g fill="none" stroke="currentColor">
      <path d="M-160 150C220-60 480 10 740 220S1230 510 1600 310" strokeWidth="110" />
      <path d="M-160 238C220 28 480 98 740 308S1230 598 1600 398" strokeWidth="20" />
      <path d="M-160 285C220 75 480 145 740 355S1230 645 1600 445" strokeWidth="34" />
    </g>
  )
}

export default function SectionBackground({
  as: Component = 'div',
  children,
  variant = 'waves',
  color = 'var(--section-decoration)',
  opacity = 1,
  placement = 'full',
  flip = false,
  mirror = false,
  padding = 'clamp(24px, 3vw, 40px) clamp(20px, 4vw, 56px)',
  className = '',
  contentClassName = '',
  style,
  backgroundStyle,
  contentStyle,
  ...props
}) {
  const patternId = `section-dots-${useId().replaceAll(':', '')}`
  const selectedVariant = ['waves', 'ribbons', 'blobs', 'rings', 'dots'].includes(variant)
    ? variant
    : 'waves'

  return (
    <Component
      className={`section-background section-background--${selectedVariant} section-background--${placement === 'full' ? 'full' : 'edges'} ${className}`.trim()}
      style={{ padding, ...style }}
      {...props}
    >
      <div
        className="section-background__decoration"
        aria-hidden="true"
        style={{
          color,
          opacity,
          transform: `scale(${mirror ? -1 : 1}, ${flip ? -1 : 1})`,
          ...backgroundStyle,
        }}
      >
        <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid meet" focusable="false">
          <BackgroundArtwork variant={selectedVariant} patternId={patternId} />
        </svg>
      </div>
      <div
        className={`section-background__content ${contentClassName}`.trim()}
        style={contentStyle}
      >
        {children}
      </div>
    </Component>
  )
}
