import { Link } from 'react-router'
import Title from '../Title/Title.jsx'
import Image from '../Image/Image.jsx'
import './Card.css'

export default function Card({
  title,
  titleAs = 'h3',
  titleColor = 'var(--on-primary)',
  titleBackground = 'var(--primary)',
  image,
  imageAlt = title ?? '',
  imageHeight = 200,
  imageFit = 'cover',
  imageBackground = 'var(--background-active)',
  placeholderIcon = 'gallery',
  placeholderColor = 'var(--text-muted)',
  placeholderSize = 64,
  media,
  children,
  to,
  className = '',
  style,
  ...props
}) {
  const Component = to !== undefined ? Link : 'article'

  return (
    <Component
      {...(to !== undefined ? { to } : {})}
      className={`card ${to !== undefined ? 'card--linked ' : ''}${className}`.trim()}
      style={style}
      {...props}
    >
      <div
        className="card__media"
        style={{ height: imageHeight, backgroundColor: imageBackground }}
      >
        {image || media == null ? (
          <Image
            className="card__image"
            src={image}
            alt={imageAlt}
            fit={imageFit}
            fallbackIcon={placeholderIcon}
            fallbackColor={placeholderColor}
            fallbackSize={placeholderSize}
            fallbackBackground="transparent"
          />
        ) : (
          media
        )}
      </div>
      {title && (
        <Title
          as={titleAs}
          size="lg"
          color={titleColor}
          className="card__title"
          style={{ backgroundColor: titleBackground }}
        >
          {title}
        </Title>
      )}
      {children && <div className="card__content">{children}</div>}
    </Component>
  )
}
