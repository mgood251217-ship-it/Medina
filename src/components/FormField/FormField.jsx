import { useId } from 'react'
import Input from '../Input/Input.jsx'
import Select from '../Select/Select.jsx'
import './FormField.css'

export default function FormField({
  as: Component = 'input',
  id,
  label,
  hint,
  error,
  required = false,
  children,
  options = [],
  optionPlaceholder = 'Pilih salah satu',
  className = '',
  controlClassName = '',
  'aria-describedby': describedBy,
  ...props
}) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const descriptionIds = [describedBy, hint && `${fieldId}-hint`, error && `${fieldId}-error`]
    .filter(Boolean)
    .join(' ')
  const controlProps = {
    ...props,
    id: fieldId,
    required,
    className: `form-field__control ${controlClassName}`.trim(),
    'aria-invalid': error ? true : undefined,
    'aria-describedby': descriptionIds || undefined,
  }

  return (
    <div className={`form-field ${error ? 'form-field--error' : ''} ${className}`.trim()}>
      <label className="form-field__label" htmlFor={fieldId}>
        {label}
        {required && <span className="form-field__required" aria-hidden="true"> *</span>}
      </label>
      {typeof children === 'function' ? children(controlProps) : children ?? (Component === 'select' ? (
        <Select {...controlProps} options={options} placeholder={optionPlaceholder} />
      ) : (
        <Input {...controlProps} as={Component} />
      ))}
      {hint && <p id={`${fieldId}-hint`} className="form-field__hint">{hint}</p>}
      {error && <p id={`${fieldId}-error`} className="form-field__error">{error}</p>}
    </div>
  )
}
