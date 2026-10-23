import { useId, useState } from 'react'
import Button from '../../components/Button/Button.jsx'
import FormField from '../../components/FormField/FormField.jsx'
import Image from '../../components/Image/Image.jsx'
import Input from '../../components/Input/Input.jsx'
import SectionBackground from '../../components/SectionBackground/SectionBackground.jsx'
import Title from '../../components/Title/Title.jsx'
import { demoAdminAccount } from '../../data/adminDemo.js'
import { authenticateDemoAdmin } from '../../utils/adminDemoAuth.js'
import './AdminLogin.css'

export default function AdminLogin({ onLogin }) {
  const titleId = useId()
  const errorId = `${titleId}-error`
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const account = authenticateDemoAdmin(values.get('username'), values.get('password'))
    if (!account) {
      setError('Username atau password tidak sesuai.')
      return
    }
    onLogin(account)
  }

  return (
    <SectionBackground as="section" variant="rings" className="admin-login">
      <form className="admin-login__card" aria-labelledby={titleId} onSubmit={handleSubmit} onChange={() => setError('')}>
        <Image src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo Medina" width={64} height={64} fit="contain" loading="eager" />
        <span className="admin-login__badge">Admin Panel · Demo</span>
        <Title as="h1" id={titleId} title="Selamat datang kembali" subtitle="Masuk untuk melihat dashboard Medina Insan Qurani." subtitleSize="sm" align="left" />
        <div className="admin-login__fields">
          <FormField label="Username" required>
            {(controlProps) => (
              <Input {...controlProps} name="username" autoComplete="username" placeholder="Masukkan username" maxLength={64} invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
            )}
          </FormField>
          <FormField label="Password" required>
            {(controlProps) => (
              <div className="admin-login__password">
                <Input {...controlProps} name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Masukkan password" maxLength={128} invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
                <Button variant="secondary" aria-pressed={showPassword} aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'} onClick={() => setShowPassword((previous) => !previous)}>
                  {showPassword ? 'Sembunyikan' : 'Lihat'}
                </Button>
              </div>
            )}
          </FormField>
        </div>
        <div aria-live="polite" aria-atomic="true">
          {error && <p id={errorId} className="admin-login__error">{error}</p>}
        </div>
        <Button type="submit" className="admin-login__submit">Masuk ke Dashboard</Button>
        <div className="admin-login__demo">
          <strong>Akun contoh</strong>
          <p>Username: <code>{demoAdminAccount.username}</code></p>
          <p>Password: <code>{demoAdminAccount.password}</code></p>
          <p>Mode demo dengan data contoh. Sesi berakhir saat halaman dimuat ulang.</p>
        </div>
        <Button to="/" variant="outline" className="admin-login__back">Kembali ke Website</Button>
      </form>
    </SectionBackground>
  )
}
