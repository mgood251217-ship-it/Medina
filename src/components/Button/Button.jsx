import { Link } from 'react-router'
import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  onClick,
  to,
  type = 'button',
  className = '',
  ...props
}) {
  const buttonClassName = `button button--${variant} ${className}`.trim()

  if (to !== undefined) {
    return (
      <Link to={to} className={buttonClassName} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
