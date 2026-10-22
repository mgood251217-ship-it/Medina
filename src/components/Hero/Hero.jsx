import { useId } from 'react'
import ProgramCarousel from '../ProgramCarousel/ProgramCarousel.jsx'
import Title from '../Title/Title.jsx'
import './Hero.css'

export default function Hero({
  title = 'PONDOK PESANTREN MEDINA INSAN QURANI',
  subtitle = "Ayo Mencetak Generasi Hafidz Hafidzoh, Qori Qoriah, Da'i Da'iah",
  background = 'var(--hero-background)',
  color = 'var(--hero-text)',
  carouselVariant = 'center',
  titleProps = {},
  programProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()

  return (
    <section
      className={`hero ${className}`.trim()}
      aria-labelledby={titleId}
      style={{ backgroundColor: background, color, ...style }}
      {...props}
    >
      <div className="hero__container">
        <div className="hero__heading">
          <Title
            as="h1"
            color={color}
            subtitleColor={color}
            subtitleSize="2xl"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
            subtitleStyle={{ fontSize: 'clamp(16px, 2vw, 24px)', letterSpacing: 'clamp(1px, 0.2vw, 2px)' }}
            {...titleProps}
            id={titleId}
            title={title}
            subtitle={subtitle}
          />
        </div>
        <ProgramCarousel {...programProps} variant={carouselVariant} />
      </div>
    </section>
  )
}
