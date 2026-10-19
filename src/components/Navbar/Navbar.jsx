import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router'
import Button from '../Button/Button.jsx'
import './Navbar.css'

const menuItems = [
  { to: '/', label: 'Beranda' },
  { to: '/about-us', label: 'Tentang Kami' },
  { to: '/daily-activities', label: 'Kegiatan Harian' },
  { to: '/gallery', label: 'Galeri' },
  { to: '/ppdb', label: 'PPDB' },
]

export default function Navbar() {
  const navbarRef = useRef(null)
  const spacerRef = useRef(null)

  useLayoutEffect(() => {
    const navbar = navbarRef.current
    const spacer = spacerRef.current

    const updateSpacer = () => {
      spacer.style.height = `${navbar.getBoundingClientRect().height}px`
    }

    updateSpacer()
    const observer = new ResizeObserver(updateSpacer)
    observer.observe(navbar)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="navbar" ref={navbarRef}>
        <div className="navbar__container">
          <Link to="/" className="navbar__brand" aria-label="Medina - Beranda">
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt="Logo Medina"
              className="navbar__logo"
              width="48"
              height="48"
            />
          </Link>

          <nav className="navbar__navigation" aria-label="Navigasi utama">
            <ul className="navbar__menu">
              {menuItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} className="navbar__link">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Button to="/ppdb" variant="primary" className="navbar__register">
            Daftar Sekarang
          </Button>
        </div>
      </header>
      <div className="navbar__spacer" ref={spacerRef} aria-hidden="true" />
    </>
  )
}
