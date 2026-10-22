import { useId } from 'react'
import Image from '../Image/Image.jsx'
import Title from '../Title/Title.jsx'
import './TeamCard.css'

export default function TeamCard({
  name,
  role,
  image,
  imageAlt = `Foto ${name}`,
  icon = 'users',
  avatarSize = 120,
  iconSize = 52,
  accentColor = 'var(--primary)',
  avatarBackground = 'var(--secondary)',
  background = 'var(--content)',
  titleProps = {},
  imageProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()

  return (
    <article
      className={`team-card ${className}`.trim()}
      aria-labelledby={titleId}
      style={{ backgroundColor: background, ...style }}
      {...props}
    >
      <Image
        width={avatarSize}
        height={avatarSize}
        fallbackIcon={icon}
        fallbackSize={iconSize}
        fallbackColor={accentColor}
        fallbackBackground={avatarBackground}
        {...imageProps}
        src={image}
        alt={imageAlt}
        className={`team-card__avatar ${imageProps.className ?? ''}`.trim()}
        imageStyle={{ objectPosition: 'center 30%', ...imageProps.imageStyle }}
      />
      <div className="team-card__details">
        <Title
          as="h3"
          size="lg"
          subtitleSize="sm"
          color="var(--primary-active)"
          {...titleProps}
          id={titleId}
          title={name}
          subtitle={role}
        />
      </div>
    </article>
  )
}
