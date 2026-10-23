import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router'
import Button from '../Button/Button.jsx'
import Dropdown from '../Dropdown/Dropdown.jsx'
import Image from '../Image/Image.jsx'
import { menuItems } from '../../data/navigation.js'
import './Navbar.css'

export default function Navbar() {
  const navbarRef = useRef(null)
  const spacerRef = useRef(null)

  useLayoutEffect(() => {
    const navbar = navbarRef.current
    const spacer = spacerRef.current

    const updateSpacer = () => {
      const height = `${navbar.getBoundingClientRect().height}px`
      spacer.style.height = height
      document.documentElement.style.setProperty('--navbar-height', height)
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
            <Image
              src={`${import.meta.env.BASE_URL}img/logo.png`}
              alt="Logo Medina"
              className="navbar__logo"
              width={48}
              height={48}
              fit="contain"
              loading="eager"
            />
          </Link>

          <nav className="navbar__navigation" aria-label="Navigasi utama">
            <ul className="navbar__menu">
              {menuItems.map(({ to, label, children }) =>
                children ? (
                  <Dropdown key={to} to={to} label={label} items={children} />
                ) : (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'} className="navbar__link">
                      {label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Button to="/pendaftaran" variant="primary" className="navbar__register">
            Daftar Sekarang
          </Button>
        </div>
      </header>
      <div className="navbar__spacer" ref={spacerRef} aria-hidden="true" />
    </>
  )
}
