import './CardGrid.css'

export default function CardGrid({
  children,
  columns = 3,
  gap = 24,
  className = '',
  style,
  ...props
}) {
  return (
    <div
      className={`card-grid ${className}`.trim()}
      style={{
        '--card-grid-columns': columns,
        '--card-grid-tablet-columns': Math.min(columns, 2),
        '--card-grid-gap': typeof gap === 'number' ? `${gap}px` : gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
