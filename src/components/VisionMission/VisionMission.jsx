import { useId } from 'react'
import List from '../List/List.jsx'
import SectionBackground from '../SectionBackground/SectionBackground.jsx'
import SplitSection from '../SplitSection/SplitSection.jsx'
import Title from '../Title/Title.jsx'
import { visionMission } from '../../data/visionMission.js'
import './VisionMission.css'

export default function VisionMission({
  title = 'Visi dan Misi Medina Insan Qur’ani',
  subtitle,
  vision = visionMission.vision,
  missions = visionMission.missions,
  visionBackground = 'var(--secondary)',
  visionColor = 'var(--on-secondary)',
  image = `${import.meta.env.BASE_URL}img/masjid.jpg`,
  imageAlt = 'Masjid Medina Insan Qurani',
  imagePosition = 'right',
  imageHeight,
  imageAspectRatio = '16 / 9',
  imageFit = 'contain',
  titleProps = {},
  listProps = {},
  splitProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()
  const visionId = `${titleId}-vision`

  return (
    <SectionBackground
      as="section"
      variant="ribbons"
      className={`vision-mission ${className}`.trim()}
      aria-labelledby={titleId}
      style={style}
      {...props}
    >
      <div className="vision-mission__heading">
        <Title
          style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
          {...titleProps}
          id={titleId}
          title={title}
          subtitle={subtitle}
        />
      </div>
      <article
        className="vision-mission__vision"
        aria-labelledby={visionId}
        style={{ backgroundColor: visionBackground, color: visionColor }}
      >
        <Title as="h3" id={visionId} title="Visi" size="xl" align="left" color={visionColor} />
        <div className="vision-mission__vision-text">
          {typeof vision === 'string' ? <p>{vision}</p> : vision}
        </div>
      </article>
      <SplitSection
        imageWidth="42%"
        imageHeight={imageHeight}
        imageAspectRatio={imageAspectRatio}
        imageFit={imageFit}
        imageRadius={16}
        imageShadow
        align="center"
        gap="clamp(24px, 4vw, 48px)"
        {...splitProps}
        title="Misi"
        image={image}
        imageAlt={imageAlt}
        imagePosition={imagePosition}
        titleProps={{ as: 'h3', size: 'xl', ...splitProps.titleProps }}
        className={`vision-mission__mission ${splitProps.className ?? ''}`.trim()}
      >
        <List variant="check" {...listProps} items={missions} />
      </SplitSection>
    </SectionBackground>
  )
}
