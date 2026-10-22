import { useId } from 'react'
import CardGrid from '../CardGrid/CardGrid.jsx'
import NewsCard from '../NewsCard/NewsCard.jsx'
import Title from '../Title/Title.jsx'
import { newsItems } from '../../data/news.js'
import './LatestNews.css'

export default function LatestNews({
  title = 'Berita Terbaru',
  subtitle = 'Berita Seputar Kegiatan Santri/Siswa dan Pesantren',
  items = newsItems,
  columns = 2,
  gap = 40,
  titleProps = {},
  cardProps = {},
  className = '',
  style,
  ...props
}) {
  const titleId = useId()

  return (
    <section
      className={`latest-news ${className}`.trim()}
      aria-labelledby={titleId}
      style={style}
      {...props}
    >
      <div className="latest-news__heading">
        <Title
          color="var(--purple)"
          subtitleColor="var(--purple)"
          subtitleSize="2xl"
          style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}
          subtitleStyle={{ letterSpacing: '2px' }}
          {...titleProps}
          id={titleId}
          title={title}
          subtitle={subtitle}
        />
      </div>
      {items.length ? (
        <CardGrid columns={columns} gap={gap} className="latest-news__grid">
          {items.map(({ id, ...item }) => (
            <NewsCard key={id ?? item.title} {...cardProps} {...item} />
          ))}
        </CardGrid>
      ) : (
        <p className="latest-news__empty">Belum ada berita terbaru.</p>
      )}
    </section>
  )
}
