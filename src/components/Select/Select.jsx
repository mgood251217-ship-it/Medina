import '../../styles/form-controls.css'
import './Select.css'

export default function Select({
  options = [],
  placeholder = 'Pilih salah satu',
  placeholderDisabled = true,
  value,
  defaultValue,
  multiple = false,
  invalid = false,
  className = '',
  children,
  'aria-invalid': ariaInvalid,
  ...props
}) {
  return (
    <select
      {...props}
      value={value}
      defaultValue={value === undefined ? defaultValue ?? (multiple ? [] : '') : undefined}
      multiple={multiple}
      className={`form-control select ${className}`.trim()}
      aria-invalid={invalid ? true : ariaInvalid}
    >
      {!multiple && placeholder != null && (
        <option value="" disabled={placeholderDisabled}>{placeholder}</option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
      {children}
    </select>
  )
}
