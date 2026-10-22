import { isValidElement } from 'react'
import Icon from '../Icon/Icon.jsx'
import './List.css'

export default function List({
  items = [],
  variant = 'check',
  color = 'var(--text-secondary)',
  markerColor = 'var(--primary)',
  markerBackground = 'var(--secondary)',
  gap = 14,
  renderItem,
  className = '',
  itemClassName = '',
  style,
  ...props
}) {
  const selectedVariant = ['bullet', 'numbered', 'check'].includes(variant) ? variant : 'check'
  const Component = selectedVariant === 'numbered' ? 'ol' : 'ul'

  return (
    <Component
      className={`content-list content-list--${selectedVariant} ${className}`.trim()}
      role="list"
      style={{
        '--list-marker-color': markerColor,
        '--list-marker-background': markerBackground,
        color,
        gap,
        ...style,
      }}
      {...props}
    >
      {items.map((item, index) => {
        const entry = item !== null && typeof item === 'object' && !isValidElement(item)
          ? item
          : { text: item }

        return (
          <li key={entry.id ?? index} className={`content-list__item ${itemClassName}`.trim()}>
            <span className="content-list__marker" aria-hidden="true">
              {selectedVariant === 'numbered' ? index + 1 : selectedVariant === 'bullet' ? (
                <span className="content-list__dot" />
              ) : (
                <Icon name={entry.icon ?? 'check'} size={18} />
              )}
            </span>
            <div className="content-list__content">
              {renderItem ? renderItem(item, index) : (
                <>
                  {entry.title && <strong className="content-list__title">{entry.title}</strong>}
                  {entry.text != null && <span>{entry.text}</span>}
                  {entry.description && <p className="content-list__description">{entry.description}</p>}
                </>
              )}
            </div>
          </li>
        )
      })}
    </Component>
  )
}
