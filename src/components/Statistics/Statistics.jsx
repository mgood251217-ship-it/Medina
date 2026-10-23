import CardGrid from '../CardGrid/CardGrid.jsx'
import Title from '../Title/Title.jsx'
import './Statistics.css'

export default function Statistics({
  items = [],
  label = 'Statistik Medina',
  columns = 4,
  gap = 32,
  background = 'var(--statistics-background)',
  color = 'var(--statistics-text)',
  valueSize = 'clamp(32px, 4vw, 42px)',
  radius = 0,
  className = '',
  style,
  ...props
}) {
  return (
    <section
      className={`statistics ${className}`.trim()}
      aria-label={label}
      style={{ background, color, borderRadius: radius, ...style }}
      {...props}
    >
      <CardGrid columns={columns} gap={gap} className="statistics__grid">
        {items.map((item, index) => (
          <div key={item.id ?? index} className="statistics__item">
            <Title
              as="p"
              title={item.value}
              subtitle={item.label}
              subtitleSize="sm"
              color={color}
              subtitleColor={color}
              style={{ fontSize: valueSize }}
              subtitleStyle={{ fontWeight: 600 }}
            />
          </div>
        ))}
      </CardGrid>
    </section>
  )
}
