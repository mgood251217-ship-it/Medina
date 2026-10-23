import { NavLink, Outlet } from 'react-router'
import Button from '../Button/Button.jsx'
import Icon from '../Icon/Icon.jsx'
import Image from '../Image/Image.jsx'
import './AdminLayout.css'

export default function AdminLayout({ user, onLogout }) {
  return (
    <div className="admin-layout">
      <aside className="admin-layout__sidebar">
        <div className="admin-layout__brand">
          <Image src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo Medina" width={48} height={48} fit="contain" />
          <div><strong>Medina Admin</strong><span>Panel pengelolaan</span></div>
        </div>
        <nav className="admin-layout__navigation" aria-label="Navigasi admin">
          <NavLink to="/admin" end><Icon name="dashboard" size={20} />Dashboard</NavLink>
          <NavLink to="/admin/pendaftaran"><Icon name="users" size={20} />Pendaftaran</NavLink>
        </nav>
        <div className="admin-layout__sidebar-bottom">
          <Button to="/" variant="outline">Lihat Website</Button>
          <Button variant="secondary" onClick={onLogout}>Keluar</Button>
        </div>
      </aside>
      <div className="admin-layout__main">
        <header className="admin-layout__header">
          <span className="admin-layout__demo">Mode demo · Penyimpanan sementara</span>
          <span className="admin-layout__user"><Icon name="shieldCheck" size={20} />{user.name}</span>
        </header>
        <div className="admin-layout__content"><Outlet /></div>
      </div>
    </div>
  )
}
