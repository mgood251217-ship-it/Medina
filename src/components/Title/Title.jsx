import './Title.css'

export default function Title({
  as: Component = 'h2',
  title,
  children,
  subtitle,
  size = '2xl',
  subtitleSize = 'lg',
  color = 'var(--primary)',
  subtitleColor = 'var(--text-secondary)',
  align = 'center',
  className = '',
  subtitleClassName = '',
  style,
  subtitleStyle,
  ...props
}) {
  return (
    <>
      <Component
        className={`title ${className}`.trim()}
        style={{
          fontSize: `var(--font-size-${size}, var(--font-size-2xl))`,
          color,
          textAlign: align,
          ...style,
        }}
        {...props}
      >
        {title ?? children}
      </Component>
      {subtitle != null && (
        <p
          className={`title__subtitle ${subtitleClassName}`.trim()}
          style={{
            fontSize: `var(--font-size-${subtitleSize}, var(--font-size-lg))`,
            color: subtitleColor,
            textAlign: align,
            ...subtitleStyle,
          }}
        >
          {subtitle}
        </p>
      )}
    </>
  )
}
