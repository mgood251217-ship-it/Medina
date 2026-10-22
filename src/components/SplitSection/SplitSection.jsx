import { useId } from 'react'
import Image from '../Image/Image.jsx'
import Title from '../Title/Title.jsx'
import './SplitSection.css'

export default function SplitSection({
  title,
  subtitle,
  children,
  image,
  imageAlt = '',
  imagePosition = 'right',
  imageWidth = '45%',
  imageHeight,
  imageAspectRatio = '1 / 1',
  imageFit = 'cover',
  imageShadow = false,
  imageRadius = 'var(--border-radius)',
  gap = 48,
  align = 'start',
  titleProps = {},
  imageProps = {},
  className = '',
  style,
  contentStyle,
  mediaStyle,
  ...props
}) {
  const titleId = useId()
  const { className: imageClassName = '', ...restImageProps } = imageProps
  const shadow = imageShadow === true
    ? '0 6px 18px rgb(0 0 0 / 0.16)'
    : imageShadow || 'none'

  return (
    <section
      className={`split-section split-section--image-${imagePosition} ${className}`.trim()}
      aria-labelledby={title ? titleId : undefined}
      style={{
        '--split-image-width': typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth,
        gap,
        alignItems: align,
        ...style,
      }}
      {...props}
    >
      <div className="split-section__content" style={contentStyle}>
        {(title || subtitle) && (
          <div className="split-section__heading">
            {title ? (
              <Title
                align="left"
                {...titleProps}
                id={titleId}
                title={title}
                subtitle={subtitle}
              />
            ) : (
              <p className="split-section__subtitle">{subtitle}</p>
            )}
          </div>
        )}
        {children && <div className="split-section__body">{children}</div>}
      </div>
      <div
        className="split-section__media"
        style={{
          height: imageHeight,
          aspectRatio: imageAspectRatio,
          borderRadius: imageRadius,
          boxShadow: shadow,
          ...mediaStyle,
        }}
      >
        <Image
          fallbackSize={64}
          {...restImageProps}
          src={image}
          alt={imageAlt}
          fit={imageFit}
          className={`split-section__image ${imageClassName}`.trim()}
        />
      </div>
    </section>
  )
}
