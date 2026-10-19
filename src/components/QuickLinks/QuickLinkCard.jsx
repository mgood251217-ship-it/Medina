import { Link } from 'react-router'
import Icon from '../Icon/Icon.jsx'

export default function QuickLinkCard({ to, label, icon }) {
  return (
    <Link to={to} className="quick-link-card">
      <span className={`quick-link-card__image quick-link-card__image--${icon}`}>
        <Icon name={icon} size={64} />
      </span>
      <span className="quick-link-card__label">{label}</span>
    </Link>
  )
}
