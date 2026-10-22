import { Link } from 'react-router'
import Image from '../Image/Image.jsx'
import Title from '../Title/Title.jsx'
import './ProgramCard.css'

export default function ProgramCard({
  title,
  subtitle,
  image,
  imageAlt = title ?? '',
  background = 'var(--info)',
  labelBackground = 'var(--purple)',
  color = 'var(--on-primary)',
  to,
  imageProps = {},
  className = '',
  style,
  ...props
}) {
  const Component = to !== undefined ? Link : 'article'

  return (
    <Component
      {...(to !== undefined ? { to } : {})}
      className={`program-card ${className}`.trim()}
      style={{ backgroundColor: background, color, ...style }}
      {...props}
    >
      <Image
        fallbackSize={72}
        fallbackColor={color}
        fallbackBackground="transparent"
        {...imageProps}
        src={image}
        alt={imageAlt}
        className={`program-card__image ${imageProps.className ?? ''}`.trim()}
      />
      <div className="program-card__label" style={{ backgroundColor: labelBackground }}>
        <Title
          as="h3"
          title={title}
          subtitle={subtitle}
          color={color}
          subtitleColor={color}
          size="xl"
          subtitleSize="sm"
        />
      </div>
    </Component>
  )
}
