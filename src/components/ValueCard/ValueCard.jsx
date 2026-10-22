import { useId } from 'react'
import Icon from '../Icon/Icon.jsx'
import List from '../List/List.jsx'
import Title from '../Title/Title.jsx'
import './ValueCard.css'

export default function ValueCard({
  title,
  number,
  icon = 'book',
  items = [],
  accentColor = 'var(--primary)',
  iconBackground = 'var(--secondary)',
  background = 'var(--content)',
  titleProps = {},
  listProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()

  return (
    <article
      className={`value-card ${className}`.trim()}
      aria-labelledby={titleId}
      style={{
        '--value-accent': accentColor,
        '--value-icon-background': iconBackground,
        backgroundColor: background,
        ...style,
      }}
      {...props}
    >
      <div className="value-card__icon" aria-hidden="true">
        <Icon name={icon} size={44} />
      </div>
      <div className="value-card__content">
        <Title
          as="h3"
          size="xl"
          align="left"
          color="var(--value-accent)"
          {...titleProps}
          id={titleId}
          title={number != null ? `${number}. ${title}` : title}
          className={`value-card__title ${titleProps.className ?? ''}`.trim()}
        />
        <List variant="bullet" gap={8} markerColor={accentColor} {...listProps} items={items} />
      </div>
    </article>
  )
}
