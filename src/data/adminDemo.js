export const demoAdminAccount = {
  username: 'admin',
  password: 'Medina123!',
  name: 'Administrator',
}

export const demoRegistrations = [
  { id: 'DM-006', program: 'smp-plus', status: 'Baru' },
  { id: 'DM-005', program: 'beasiswa', status: 'Baru' },
  { id: 'DM-004', program: 'sma-takhassus', status: 'Ditinjau' },
  { id: 'DM-003', program: 'smp-plus', status: 'Ditinjau' },
  { id: 'DM-002', program: 'sma-takhassus', status: 'Diterima' },
  { id: 'DM-001', program: 'beasiswa', status: 'Diterima' },
].map((item, index) => ({
  ...item,
  studentName: `Santri Contoh ${6 - index}`,
  parentName: `Orang Tua Contoh ${6 - index}`,
  address: `Alamat contoh ${6 - index}, Kota Bandung`,
  previousSchool: `Sekolah Contoh ${6 - index}`,
  email: `santri${6 - index}@example.test`,
  phone: `08120000000${6 - index}`,
}))
