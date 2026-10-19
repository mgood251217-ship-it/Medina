import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'
import './Dropdown.css'

export default function Dropdown({ to, label, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const menuId = useId()

  useLayoutEffect(() => {
    if (!isOpen) return

    const positionMenu = () => {
      const menu = menuRef.current
      menu.style.left = '0px'
      const bounds = menu.getBoundingClientRect()
      const viewportWidth = document.documentElement.clientWidth
      const left = Math.max(16, Math.min(bounds.left, viewportWidth - bounds.width - 16))
      menu.style.left = `${left - dropdownRef.current.getBoundingClientRect().left}px`
    }

    positionMenu()
    window.addEventListener('resize', positionMenu)
    return () => window.removeEventListener('resize', positionMenu)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const closeOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [isOpen])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault()
      setIsOpen(false)
      toggleRef.current.focus()
    }
  }

  return (
    <li
      className="dropdown"
      ref={dropdownRef}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsOpen(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setIsOpen(false)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="dropdown__trigger">
        <NavLink to={to} className="navbar__link" onClick={() => setIsOpen(false)}>
          {label}
        </NavLink>
        <button
          type="button"
          className="dropdown__toggle"
          ref={toggleRef}
          aria-label={`Submenu ${label}`}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="dropdown__arrow" aria-hidden="true" />
        </button>
      </div>

      <ul className="dropdown__menu" ref={menuRef} id={menuId} hidden={!isOpen}>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="dropdown__link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}
