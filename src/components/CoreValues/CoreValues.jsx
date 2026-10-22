import { useId } from 'react'
import Title from '../Title/Title.jsx'
import ValueCard from '../ValueCard/ValueCard.jsx'
import './CoreValues.css'

export default function CoreValues({
  title = 'Nilai Nilai Inti',
  subtitle,
  items = [],
  numbered = true,
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
      className={`core-values ${className}`.trim()}
      aria-labelledby={title ? titleId : undefined}
      style={style}
      {...props}
    >
      {title && (
        <div className="core-values__heading">
          <Title {...titleProps} id={titleId} title={title} subtitle={subtitle} />
        </div>
      )}
      <div className="core-values__cards" style={{ gap }}>
        {items.map(({ id, ...item }, index) => (
          <ValueCard
            key={id ?? index}
            number={numbered ? index + 1 : undefined}
            {...cardProps}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}
