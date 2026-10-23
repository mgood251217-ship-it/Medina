import DataTable from '../DataTable/DataTable.jsx'
import { registrationFields, registrationPrograms } from '../../data/registration.js'
import './AdminRegistrationTable.css'

const statusClasses = { Baru: 'new', Ditinjau: 'review', Diterima: 'accepted' }
const columns = [
  { key: 'id', label: 'No. Pendaftaran' },
  ...registrationFields.map(({ name, label }) => ({
    key: name,
    label,
    render: name === 'program'
      ? (value) => registrationPrograms.find((program) => program.value === value)?.label ?? value
      : undefined,
  })),
  { key: 'status', label: 'Status', render: (value) => <span className={`registration-status registration-status--${statusClasses[value] ?? 'new'}`}>{value}</span> },
]

export default function AdminRegistrationTable({ rows }) {
  return (
    <div className="admin-registration-table">
      <DataTable columns={columns} rows={rows} label="Pendaftaran santri - mode demo" />
    </div>
  )
}
