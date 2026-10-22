import { Children, useCallback, useEffect, useId, useRef, useState } from 'react'
import Button from '../Button/Button.jsx'
import Icon from '../Icon/Icon.jsx'
import { getMaxIndex, getSlideOffset, getSlidesToShow, normalizeIndex } from './carousel.utils.js'
import './Carousel.css'

export default function Carousel({
  children,
  variant = 'center',
  label = 'Pilihan program',
  initialIndex = 0,
  slidesToShow = 3,
  loop = true,
  autoplay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  height = 320,
  cardWidth = 250,
  gap = 24,
  onSlideChange,
  className = '',
  style,
  ...props
}) {
  const slides = Children.toArray(children)
  const mode = ['center', 'multi', 'single', 'fade'].includes(variant) ? variant : 'center'
  const count = slides.length
  const [index, setIndex] = useState(initialIndex)
  const [visibleCount, setVisibleCount] = useState(Math.max(1, Math.min(slidesToShow, count)))
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  )
  const [documentHidden, setDocumentHidden] = useState(() =>
    typeof document !== 'undefined' && document.hidden,
  )
  const viewportRef = useRef(null)
  const gestureRef = useRef(null)
  const suppressClickRef = useRef(false)
  const trackId = useId()
  const perView = mode === 'multi' ? Math.min(visibleCount, Math.max(1, count)) : 1
  const maxIndex = getMaxIndex(count, perView)
  const currentIndex = normalizeIndex(index, maxIndex + 1, false)
  const hasControls = maxIndex > 0
  const hasArrows = showArrows && hasControls
  const rotationRequested = autoplay && !paused && !reducedMotion &&
    hasControls && (loop || currentIndex < maxIndex)
  const isRotating = rotationRequested && !hovered && !documentHidden

  const move = useCallback((direction) => {
    setIndex((previous) => normalizeIndex(
      normalizeIndex(previous, maxIndex + 1, false) + direction,
      maxIndex + 1,
      loop,
    ))
  }, [maxIndex, loop])

  const goTo = (nextIndex) => {
    setIndex(normalizeIndex(nextIndex, maxIndex + 1, false))
  }

  useEffect(() => {
    if (mode !== 'multi' || !viewportRef.current) return
    const viewport = viewportRef.current
    const update = () => {
      setVisibleCount(getSlidesToShow(viewport.clientWidth, slidesToShow, count))
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [mode, slidesToShow, count])

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!media) return
    const update = (event) => setReducedMotion(event.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const update = () => setDocumentHidden(document.hidden)
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [autoplay])

  useEffect(() => {
    if (!isRotating) return
    const timer = window.setInterval(() => move(1), Math.max(1000, interval))
    return () => window.clearInterval(timer)
  }, [isRotating, interval, move])

  useEffect(() => {
    onSlideChange?.(currentIndex)
  }, [currentIndex, onSlideChange])

  const handleKeyDown = (event) => {
    if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      move(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      move(-1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      goTo(maxIndex)
    }
  }

  const handlePointerUp = (event) => {
    const gesture = gestureRef.current
    gestureRef.current = null
    if (!gesture || gesture.id !== event.pointerId) return
    const dx = event.clientX - gesture.x
    const dy = event.clientY - gesture.y
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      suppressClickRef.current = true
      move(dx < 0 ? 1 : -1)
    }
  }

  return (
    <div
      className={`carousel carousel--${mode} ${!hasArrows ? 'carousel--no-arrows ' : ''}${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPaused(true)}
      style={{
        '--carousel-height': typeof height === 'number' ? `${height}px` : height,
        '--carousel-card-width': typeof cardWidth === 'number' ? `${cardWidth}px` : cardWidth,
        '--carousel-gap': typeof gap === 'number' ? `${gap}px` : gap,
        '--carousel-index': currentIndex,
        '--carousel-visible': perView,
        ...style,
      }}
      {...props}
    >
      {autoplay && hasControls && (
        <div className="carousel__toolbar">
          <Button
            variant="secondary"
            className="carousel__play"
            disabled={reducedMotion}
            aria-label={rotationRequested ? 'Hentikan putar otomatis' : 'Mulai putar otomatis'}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (rotationRequested) {
                setPaused(true)
              } else {
                if (!loop && currentIndex === maxIndex) goTo(0)
                setPaused(false)
              }
            }}
          >
            <Icon name={rotationRequested ? 'pause' : 'play'} size={18} />
            {rotationRequested ? 'Jeda' : 'Putar otomatis'}
          </Button>
        </div>
      )}
      {count ? (
        <>
          <div className="carousel__layout">
            {hasArrows && (
              <Button
                variant="secondary"
                className="carousel__arrow"
                aria-label="Slide sebelumnya"
                aria-controls={trackId}
                disabled={!loop && currentIndex === 0}
                onClick={() => move(-1)}
              >
                <Icon name="arrowLeft" size={26} />
              </Button>
            )}
            <div
              className="carousel__viewport"
              ref={viewportRef}
              onPointerDown={(event) => {
                suppressClickRef.current = false
                if (event.pointerType === 'mouse') return
                gestureRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
              }}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => { gestureRef.current = null }}
              onClickCapture={(event) => {
                if (!suppressClickRef.current) return
                event.preventDefault()
                event.stopPropagation()
                suppressClickRef.current = false
              }}
            >
              <div className="carousel__track" id={trackId}>
                {slides.map((slide, slideIndex) => {
                  const offset = getSlideOffset(slideIndex, currentIndex, count, loop)
                  const visible = mode === 'center'
                    ? Math.abs(offset) <= 1
                    : slideIndex >= currentIndex && slideIndex < currentIndex + perView
                  return (
                    <div
                      key={slide.key}
                      className={`carousel__slide ${slideIndex === currentIndex ? 'carousel__slide--active' : ''}`.trim()}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${slideIndex + 1} dari ${count}`}
                      aria-hidden={!visible || undefined}
                      inert={!visible || undefined}
                      style={{
                        '--slide-offset': offset,
                        '--slide-scale': slideIndex === currentIndex ? 1 : 0.82,
                        '--slide-opacity': visible ? 0.85 : 0,
                      }}
                    >
                      {slide}
                    </div>
                  )
                })}
              </div>
            </div>
            {hasArrows && (
              <Button
                variant="secondary"
                className="carousel__arrow"
                aria-label="Slide berikutnya"
                aria-controls={trackId}
                disabled={!loop && currentIndex === maxIndex}
                onClick={() => move(1)}
              >
                <Icon name="arrowRight" size={26} />
              </Button>
            )}
          </div>
          {showDots && hasControls && (
            <div className="carousel__dots" role="group" aria-label="Pilih slide">
              {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  className="carousel__dot"
                  aria-label={`Tampilkan slide ${dotIndex + 1}`}
                  aria-current={dotIndex === currentIndex ? 'true' : undefined}
                  aria-controls={trackId}
                  onClick={() => goTo(dotIndex)}
                />
              ))}
            </div>
          )}
          <p className="carousel__status" aria-live={isRotating ? 'off' : 'polite'} aria-atomic="true">
            Menampilkan {currentIndex + 1}{perView > 1 ? ` sampai ${currentIndex + perView}` : ''} dari {count}
          </p>
        </>
      ) : (
        <p className="carousel__empty">Belum ada item untuk ditampilkan.</p>
      )}
    </div>
  )
}
