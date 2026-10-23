import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import AdminLayout from '../components/AdminLayout/AdminLayout.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminRegistrations from './admin/AdminRegistrations.jsx'

export default function Admin({ registrations = [] }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogin = (account) => {
    setUser(account)
    navigate('/admin', { replace: true })
  }

  const handleLogout = () => {
    setUser(null)
    navigate('/admin/login', { replace: true })
  }

  return (
    <Routes>
      <Route
        path="login"
        element={user ? <Navigate to="/admin" replace /> : <AdminLogin onLogin={handleLogin} />}
      />
      <Route element={user
        ? <AdminLayout user={user} onLogout={handleLogout} />
        : <Navigate to="/admin/login" replace />}
      >
        <Route index element={<AdminDashboard user={user} registrations={registrations} />} />
        <Route path="pendaftaran" element={<AdminRegistrations registrations={registrations} />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  )
}
