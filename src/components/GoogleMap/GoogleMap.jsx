import './GoogleMap.css'

export default function GoogleMap({
  location = '',
  embedUrl,
  title = 'Lokasi di Google Maps',
  zoom = 14,
  language = 'id',
  width = '100%',
  height = 'clamp(280px, 40vw, 450px)',
  radius = 'var(--border-radius)',
  shadow = true,
  className = '',
  style,
  iframeProps = {},
  ...props
}) {
  const parameters = new URLSearchParams({
    q: location,
    z: String(zoom),
    hl: language,
    output: 'embed',
  })
  const src = embedUrl || (location ? `https://maps.google.com/maps?${parameters}` : null)
  const boxShadow = shadow === true ? '0 4px 16px rgb(0 0 0 / 0.18)' : shadow || 'none'

  return (
    <div
      className={`google-map ${className}`.trim()}
      style={{ width, height, borderRadius: radius, boxShadow, ...style }}
      {...props}
    >
      {src ? (
        <iframe
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          {...iframeProps}
          src={src}
          title={title}
          className={`google-map__frame ${iframeProps.className ?? ''}`.trim()}
        />
      ) : (
        <p className="google-map__empty">Lokasi belum ditentukan</p>
      )}
    </div>
  )
}
