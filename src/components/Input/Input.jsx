import '../../styles/form-controls.css'
import './Input.css'

export default function Input({
  as: Component = 'input',
  type = 'text',
  invalid = false,
  className = '',
  'aria-invalid': ariaInvalid,
  ...props
}) {
  return (
    <Component
      {...props}
      type={Component === 'textarea' ? undefined : type}
      className={`form-control input ${className}`.trim()}
      aria-invalid={invalid ? true : ariaInvalid}
    />
  )
}
