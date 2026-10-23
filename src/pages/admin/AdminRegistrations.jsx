import { useState } from 'react'
import AdminRegistrationTable from '../../components/AdminRegistrationTable/AdminRegistrationTable.jsx'
import FormField from '../../components/FormField/FormField.jsx'
import Input from '../../components/Input/Input.jsx'
import Select from '../../components/Select/Select.jsx'
import Title from '../../components/Title/Title.jsx'
import { registrationFields, registrationPrograms } from '../../data/registration.js'
import './AdminPages.css'

export default function AdminRegistrations({ registrations = [] }) {
  const [search, setSearch] = useState('')
  const [program, setProgram] = useState('')
  const [status, setStatus] = useState('')
  const query = search.trim().toLocaleLowerCase('id')
  const rows = registrations.filter((item) => (
    (!program || item.program === program)
    && (!status || item.status === status)
    && [item.id, ...registrationFields.map((field) => item[field.name])].join(' ').toLocaleLowerCase('id').includes(query)
  ))

  return (
    <div className="admin-page">
      <Title as="h1" title="Pendaftaran Santri" subtitle="Data contoh dan pendaftaran dari formulir ditampilkan di sini. Data tersimpan sementara dan akan hilang saat halaman dimuat ulang." align="left" subtitleSize="md" />
      <section className="admin-page__panel">
        <div className="admin-page__filters">
          <FormField label="Cari Pendaftar">
            {(controlProps) => <Input {...controlProps} type="search" placeholder="Cari data pendaftaran" value={search} onChange={(event) => setSearch(event.target.value)} />}
          </FormField>
          <FormField label="Program">
            {(controlProps) => <Select {...controlProps} options={registrationPrograms} placeholder="Semua program" placeholderDisabled={false} value={program} onChange={(event) => setProgram(event.target.value)} />}
          </FormField>
          <FormField label="Status">
            {(controlProps) => <Select {...controlProps} options={['Baru', 'Ditinjau', 'Diterima'].map((value) => ({ value, label: value }))} placeholder="Semua status" placeholderDisabled={false} value={status} onChange={(event) => setStatus(event.target.value)} />}
          </FormField>
        </div>
        <p className="admin-page__result" aria-live="polite">Menampilkan {rows.length} dari {registrations.length} pendaftar.</p>
        <AdminRegistrationTable rows={rows} />
      </section>
    </div>
  )
}
