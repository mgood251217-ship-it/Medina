import { useId } from 'react'
import Title from '../Title/Title.jsx'
import './InfoPanel.css'

export default function InfoPanel({
  title,
  children,
  headerBackground = 'var(--purple)',
  headerColor = 'var(--on-purple)',
  background = 'var(--content)',
  color = 'var(--text)',
  titleProps = {},
  className = '',
  style,
  headerStyle,
  contentStyle,
  ...props
}) {
  const titleId = useId()

  return (
    <section
      className={`info-panel ${className}`.trim()}
      aria-labelledby={titleId}
      style={{ backgroundColor: background, color, ...style }}
      {...props}
    >
      <header
        className="info-panel__header"
        style={{ backgroundColor: headerBackground, ...headerStyle }}
      >
        <Title color={headerColor} {...titleProps} id={titleId} title={title} />
      </header>
      <div className="info-panel__content" style={contentStyle}>
        {children}
      </div>
    </section>
  )
}
