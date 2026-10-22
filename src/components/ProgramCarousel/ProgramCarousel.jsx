import { useId } from 'react'
import Carousel from '../Carousel/Carousel.jsx'
import ProgramCard from '../ProgramCard/ProgramCard.jsx'
import Title from '../Title/Title.jsx'
import { programs } from '../../data/programs.js'
import './ProgramCarousel.css'

export default function ProgramCarousel({
  title = 'Program Unggulan',
  items = programs,
  variant = 'center',
  titleProps = {},
  carouselProps = {},
  className = '',
  ...props
}) {
  const titleId = useId()

  return (
    <section className={`program-carousel ${className}`.trim()} aria-labelledby={titleId} {...props}>
      <Title
        color="inherit"
        style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
        {...titleProps}
        id={titleId}
        title={title}
        className={`program-carousel__title ${titleProps.className ?? ''}`.trim()}
      />
      <Carousel
        label={title}
        initialIndex={variant === 'center' ? 1 : 0}
        {...carouselProps}
        variant={variant}
      >
        {items.map(({ id, ...item }) => <ProgramCard key={id ?? item.title} {...item} />)}
      </Carousel>
    </section>
  )
}
