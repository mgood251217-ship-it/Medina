import { Link } from 'react-router'
import QuickLinkIcon from './QuickLinkIcon.jsx'

export default function QuickLinkCard({ to, label, icon }) {
  return (
    <Link to={to} className="quick-link-card">
      <span className={`quick-link-card__image quick-link-card__image--${icon}`}>
        <QuickLinkIcon name={icon} />
      </span>
      <span className="quick-link-card__label">{label}</span>
    </Link>
  )
}
