import { useId, useState } from 'react'
import Button from '../Button/Button.jsx'
import FormField from '../FormField/FormField.jsx'
import Title from '../Title/Title.jsx'
import { registrationFields, registrationPrograms } from '../../data/registration.js'
import './RegistrationForm.css'

function validateField(field, value, programOptions) {
  if (!value) return `${field.label} wajib diisi.`
  if (field.minLength && value.length < field.minLength) {
    return `Isi minimal ${field.minLength} karakter.`
  }
  if (field.maxLength && value.length > field.maxLength) {
    return `Isi maksimal ${field.maxLength} karakter.`
  }
  if (field.name === 'program' && !programOptions.some((option) => option.value === value && !option.disabled)) {
    return 'Pilih jenis pendaftaran yang tersedia.'
  }
  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Masukkan alamat email yang valid.'
  }
  if (field.type === 'tel' && !/^(?:\+62|62|0)8\d{8,11}$/.test(value.replace(/[\s()-]/g, ''))) {
    return 'Gunakan nomor HP Indonesia yang valid, diawali 08 atau +628.'
  }
  return ''
}

export default function RegistrationForm({
  title = 'Pendaftaran Santri Baru',
  description = 'Silakan lengkapi formulir pendaftaran di bawah ini dengan data yang benar. Informasi ini diperlukan untuk proses seleksi dan administrasi calon santri.',
  programOptions = registrationPrograms,
  onSubmit,
  submitLabel = onSubmit ? 'Kirim Pendaftaran' : 'Periksa Data Pendaftaran',
  className = '',
  ...props
}) {
  const titleId = useId()
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return

    const form = event.currentTarget
    const values = Object.fromEntries(
      [...new FormData(form)].map(([key, value]) => [key, value.trim()]),
    )
    const nextErrors = {}

    for (const field of registrationFields) {
      const error = validateField(field, values[field.name] ?? '', programOptions)
      if (error) nextErrors[field.name] = error
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus({ type: 'error', message: 'Periksa kembali kolom yang ditandai.' })
      form.elements.namedItem(Object.keys(nextErrors)[0])?.focus()
      return
    }

    if (!onSubmit) {
      setStatus({ type: 'info', message: 'Data sudah lengkap dan valid. Pendaftaran belum dikirim karena layanan pengiriman belum tersedia.' })
      return
    }

    setSubmitting(true)
    setStatus(null)
    try {
      await onSubmit({ ...values, phone: values.phone.replace(/[\s()-]/g, '') })
      setStatus({ type: 'success', message: 'Pendaftaran berhasil dikirim.' })
    } catch {
      setStatus({ type: 'error', message: 'Pendaftaran belum berhasil dikirim. Silakan coba lagi.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: undefined }))
    setStatus(null)
  }

  return (
    <form
      {...props}
      className={`registration-form ${className}`.trim()}
      aria-labelledby={titleId}
      aria-busy={submitting}
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className="registration-form__heading">
        <Title
          as="h1"
          id={titleId}
          title={title}
          subtitle={description}
          align="left"
          subtitleSize="sm"
          color="var(--primary-active)"
        />
      </div>
      <p className="registration-form__note">
        Semua kolom wajib diisi.{!onSubmit && ' Formulir sementara; data belum dikirim atau disimpan.'}
      </p>
      <fieldset className="registration-form__fields" disabled={submitting}>
        <legend className="registration-form__legend">Data calon santri dan orang tua</legend>
        {registrationFields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            required
            defaultValue=""
            options={field.as === 'select' ? programOptions : undefined}
            error={errors[field.name]}
          />
        ))}
      </fieldset>
      <div className="registration-form__status" aria-live="polite" aria-atomic="true">
        {status && (
          <p className={`registration-form__message registration-form__message--${status.type}`}>
            {status.message}
          </p>
        )}
      </div>
      <Button type="submit" variant="primary" disabled={submitting} className="registration-form__submit">
        {submitting ? 'Mengirim Pendaftaran...' : submitLabel}
      </Button>
    </form>
  )
}
