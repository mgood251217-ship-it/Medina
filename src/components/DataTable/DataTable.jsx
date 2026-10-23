import './DataTable.css'

export default function DataTable({ columns = [], rows = [], rowKey = 'id', label = 'Tabel data', emptyMessage = 'Tidak ada data yang sesuai.' }) {
  return (
    <div className="data-table" role="region" aria-label={label} tabIndex={0}>
      <table>
        <caption className="data-table__caption">{label}</caption>
        <thead><tr>{columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}</tr></thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[rowKey]}>
              {columns.map((column) => <td key={column.key}>{column.render ? column.render(row[column.key], row) : row[column.key]}</td>)}
            </tr>
          ))}
          {!rows.length && <tr><td colSpan={columns.length} className="data-table__empty">{emptyMessage}</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
