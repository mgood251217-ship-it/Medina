import AdminRegistrationTable from '../../components/AdminRegistrationTable/AdminRegistrationTable.jsx'
import AdminStatCard from '../../components/AdminStatCard/AdminStatCard.jsx'
import Button from '../../components/Button/Button.jsx'
import CardGrid from '../../components/CardGrid/CardGrid.jsx'
import List from '../../components/List/List.jsx'
import Title from '../../components/Title/Title.jsx'
import { registrationPrograms } from '../../data/registration.js'
import './AdminPages.css'

export default function AdminDashboard({ user, registrations = [] }) {
  const countStatus = (status) => registrations.filter((item) => item.status === status).length

  return (
    <div className="admin-page">
      <Title as="h1" title="Dashboard" subtitle={`Selamat datang, ${user?.name}. Berikut ringkasan pendaftaran demo yang tersimpan sementara.`} align="left" subtitleSize="md" />
      <CardGrid columns={4} gap={20}>
        <AdminStatCard label="Total Pendaftar" value={registrations.length} />
        <AdminStatCard label="Pendaftaran Baru" value={countStatus('Baru')} icon="fileText" color="var(--info)" />
        <AdminStatCard label="Sedang Ditinjau" value={countStatus('Ditinjau')} icon="activities" color="var(--orange)" />
        <AdminStatCard label="Diterima" value={countStatus('Diterima')} icon="shieldCheck" />
      </CardGrid>
      <section className="admin-page__panel">
        <div className="admin-page__panel-heading">
          <Title title="Pendaftaran Terbaru" size="xl" align="left" />
          <Button to="/admin/pendaftaran" variant="outline">Lihat Semua</Button>
        </div>
        <AdminRegistrationTable rows={registrations.slice(0, 4)} />
      </section>
      <section className="admin-page__panel">
        <Title title="Ringkasan Program" size="xl" align="left" />
        <List
          className="admin-page__programs"
          items={registrationPrograms.map((program) => ({
            id: program.value,
            title: program.label,
            text: `${registrations.filter((item) => item.program === program.value).length} pendaftar`,
          }))}
        />
      </section>
    </div>
  )
}
