import './Quote.css'

export default function Quote({
  text,
  author,
  cite,
  children,
  align = 'center',
  color = 'var(--text)',
  background = 'var(--content)',
  accentColor = 'var(--info-active)',
  size = 'lg',
  className = '',
  style,
  textStyle,
  authorStyle,
  ...props
}) {
  return (
    <figure
      className={`quote ${className}`.trim()}
      style={{
        '--quote-accent': accentColor,
        backgroundColor: background,
        color,
        textAlign: align,
        ...style,
      }}
      {...props}
    >
      <blockquote className="quote__body" cite={cite}>
        <p
          className="quote__text"
          style={{ fontSize: `var(--font-size-${size}, var(--font-size-lg))`, ...textStyle }}
        >
          “{text ?? children}”
        </p>
      </blockquote>
      {author && (
        <figcaption className="quote__author" style={authorStyle}>
          — {author}
        </figcaption>
      )}
    </figure>
  )
}
