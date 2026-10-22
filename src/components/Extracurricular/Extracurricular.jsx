import Button from '../Button/Button.jsx'
import Card from '../Card/Card.jsx'
import CardGrid from '../CardGrid/CardGrid.jsx'
import Title from '../Title/Title.jsx'
import SectionBackground from '../SectionBackground/SectionBackground.jsx'
import { extracurricularActivities } from '../../data/extracurricular.js'
import './Extracurricular.css'

export default function Extracurricular() {
  return (
    <SectionBackground
      as="section"
      variant="ribbons"
      className="extracurricular"
      aria-labelledby="extracurricular-title"
    >
      <div className="extracurricular__heading">
        <Title
          id="extracurricular-title"
          title="Ekstrakurikuler"
          subtitle="Tingkatkan Skill Anda Dengan Kami"
          subtitleColor="var(--primary)"
          style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}
          subtitleStyle={{ letterSpacing: '2px' }}
        />
      </div>
      <CardGrid columns={3} gap={24}>
        {extracurricularActivities.map((activity) => (
          <Card
            key={activity.title}
            title={activity.title}
            imageBackground={activity.background}
            placeholderColor="var(--on-primary)"
            titleBackground={activity.labelColor}
            to="/daily-activities/ekstrakulikuler"
            className="extracurricular__card"
          />
        ))}
      </CardGrid>
      <div className="extracurricular__action">
        <Button to="/daily-activities/ekstrakulikuler" className="extracurricular__more">
          Lainnya...
        </Button>
      </div>
    </SectionBackground>
  )
}
