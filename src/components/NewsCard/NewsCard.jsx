import { Link } from 'react-router'
import Image from '../Image/Image.jsx'
import Title from '../Title/Title.jsx'
import './NewsCard.css'

export default function NewsCard({
  title,
  description,
  image,
  imageAlt = title ?? '',
  imageHeight = 200,
  imageFit = 'cover',
  color = 'var(--purple)',
  background = 'var(--content)',
  shadow = true,
  to,
  children,
  titleProps = {},
  imageProps = {},
  className = '',
  style,
  contentStyle,
  ...props
}) {
  const Component = to !== undefined ? Link : 'article'
  const boxShadow = shadow === true ? '0 6px 14px rgb(0 0 0 / 0.14)' : shadow || 'none'

  return (
    <Component
      {...(to !== undefined ? { to } : {})}
      className={`news-card ${to !== undefined ? 'news-card--linked ' : ''}${className}`.trim()}
      style={{ backgroundColor: background, color, boxShadow, ...style }}
      {...props}
    >
      <div className="news-card__media" style={{ height: imageHeight }}>
        <Image
          {...imageProps}
          src={image}
          alt={imageAlt}
          fit={imageFit}
          className={`news-card__image ${imageProps.className ?? ''}`.trim()}
        />
      </div>
      <div className="news-card__content" style={contentStyle}>
        <Title
          as="h3"
          align="left"
          size="2xl"
          color={color}
          {...titleProps}
          title={title}
        />
        {description && <p className="news-card__description">{description}</p>}
        {children}
      </div>
    </Component>
  )
}
