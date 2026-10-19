import { Link } from 'react-router'
import Title from '../Title/Title.jsx'
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
        {image ? (
          <img
            className="card__image"
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            style={{ objectFit: imageFit }}
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
