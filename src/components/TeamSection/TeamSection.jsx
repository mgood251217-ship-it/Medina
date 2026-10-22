import { useId } from 'react'
import CardGrid from '../CardGrid/CardGrid.jsx'
import TeamCard from '../TeamCard/TeamCard.jsx'
import Title from '../Title/Title.jsx'
import './TeamSection.css'

export default function TeamSection({
  title = 'Tim Tahfidz & Keislaman',
  subtitle,
  items = [],
  columns = 3,
  gap = 28,
  titleProps = {},
  cardProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()

  return (
    <section
      className={`team-section ${className}`.trim()}
      aria-labelledby={title ? titleId : undefined}
      style={style}
      {...props}
    >
      {title && (
        <div className="team-section__heading">
          <Title {...titleProps} id={titleId} title={title} subtitle={subtitle} />
        </div>
      )}
      <CardGrid columns={columns} gap={gap}>
        {items.map(({ id, ...item }, index) => (
          <TeamCard key={id ?? index} {...cardProps} {...item} />
        ))}
      </CardGrid>
    </section>
  )
}
