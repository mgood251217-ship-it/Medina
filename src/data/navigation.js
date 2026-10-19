export const menuItems = [
  { to: '/', label: 'Beranda' },
  {
    to: '/about-us',
    label: 'Tentang Kami',
    children: [
      { to: '/about-us/profile', label: 'Profile' },
      { to: '/about-us/nilai-nilai-inti', label: 'Nilai Nilai Inti' },
      { to: '/about-us/smpi', label: 'SMPI' },
      { to: '/about-us/kurikulum-program', label: 'Kurikulum & Program' },
      { to: '/about-us/tim-kami', label: 'Tim Kami' },
    ],
  },
  {
    to: '/daily-activities',
    label: 'Kegiatan Harian',
    children: [
      { to: '/daily-activities/project-siswa', label: 'Project Siswa' },
      { to: '/daily-activities/aktivitas-harian', label: 'Aktivitas Harian' },
      { to: '/daily-activities/ekstrakulikuler', label: 'Ekstrakulikuler' },
      { to: '/daily-activities/penghargaan', label: 'Penghargaan' },
      { to: '/daily-activities/literasi-sekolah', label: 'Literasi Sekolah' },
    ],
  },
  {
    to: '/gallery',
    label: 'Galeri',
    children: [
      { to: '/gallery/fasilitas', label: 'Fasilitas' },
      { to: '/gallery/galeri-acara', label: 'Galeri Acara' },
      { to: '/gallery/testimoni', label: 'Testimoni' },
    ],
  },
  {
    to: '/ppdb',
    label: 'PPDB',
    children: [
      { to: '/ppdb/informasi-pendaftaran', label: 'Informasi Pendaftaran' },
      { to: '/ppdb/faq', label: 'FAQ' },
    ],
  },
]
