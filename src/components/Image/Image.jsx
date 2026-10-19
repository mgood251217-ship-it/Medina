import { useCallback, useState } from 'react'
import Icon from '../Icon/Icon.jsx'
import './Image.css'

function ImageContent({
  src,
  srcSet,
  sizes,
  alt = '',
  width,
  height,
  fit = 'cover',
  loading = 'lazy',
  decoding = 'async',
  className = '',
  style,
  imageStyle,
  fallbackIcon = 'gallery',
  fallbackSize = 48,
  fallbackColor = 'var(--text-muted)',
  fallbackBackground = 'var(--content-hover)',
  onLoad,
  onError,
  ...props
}) {
  const hasSource = Boolean(src || srcSet)
  const [status, setStatus] = useState(hasSource ? 'loading' : 'error')
  const imageRef = useCallback((node) => {
    if (node?.complete) {
      setStatus(node.naturalWidth > 0 ? 'loaded' : 'error')
    }
  }, [])

  return (
    <span
      className={`image image--${status} ${className}`.trim()}
      style={{ width, height, ...style }}
      aria-busy={status === 'loading'}
    >
      {hasSource && (
        <img
          {...props}
          ref={imageRef}
          className="image__element"
          src={src || undefined}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          style={{ objectFit: fit, ...imageStyle }}
          onLoad={(event) => {
            setStatus('loaded')
            onLoad?.(event)
          }}
          onError={(event) => {
            setStatus('error')
            onError?.(event)
          }}
        />
      )}
      {status === 'loading' && (
        <span className="image__placeholder" role="status">
          <Icon name="loader" size={28} className="image__spinner" />
          <span className="image__sr-only">Memuat gambar {alt}</span>
        </span>
      )}
      {status === 'error' && (
        <span
          className="image__placeholder image__placeholder--error"
          role="img"
          aria-label={hasSource ? `Gambar ${alt} tidak dapat dimuat`.trim() : 'Gambar belum tersedia'}
          style={{ color: fallbackColor, backgroundColor: fallbackBackground }}
        >
          <Icon name={fallbackIcon} size={fallbackSize} />
        </span>
      )}
    </span>
  )
}

export default function Image(props) {
  return <ImageContent key={JSON.stringify([props.src, props.srcSet, props.sizes])} {...props} />
}
