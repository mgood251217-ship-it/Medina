import QuickLinkCard from './QuickLinkCard.jsx'
import './QuickLinks.css'

const quickLinks = [
  { to: '/ppdb', label: 'PPDB', icon: 'book' },
  { to: '/gallery', label: 'Image Gallery', icon: 'gallery' },
  { to: '/daily-activities', label: 'Kegiatan', icon: 'activities' },
  { to: '/pendaftaran', label: 'Daftar', icon: 'register' },
]

export default function QuickLinks() {
  return (
    <nav className="quick-links" aria-label="Akses cepat">
      <ul className="quick-links__list">
        {quickLinks.map((item) => (
          <li key={item.label}>
            <QuickLinkCard {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
