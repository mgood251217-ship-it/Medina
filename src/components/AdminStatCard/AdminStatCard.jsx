import Icon from '../Icon/Icon.jsx'
import Title from '../Title/Title.jsx'
import './AdminStatCard.css'

export default function AdminStatCard({ label, value, icon = 'users', color = 'var(--primary)' }) {
  return (
    <article className="admin-stat-card">
      <span className="admin-stat-card__icon" style={{ color }} aria-hidden="true"><Icon name={icon} size={24} /></span>
      <Title as="p" title={value} subtitle={label} subtitleSize="sm" align="left" style={{ fontSize: '32px' }} />
    </article>
  )
}
