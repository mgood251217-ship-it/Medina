import { programs } from './programs.js'

export const registrationPrograms = programs.map((program) => ({
  value: program.id,
  label: `${program.title} - ${program.subtitle}`,
}))

export const registrationFields = [
  {
    name: 'program',
    label: 'Jenis Pendaftaran',
    as: 'select',
    optionPlaceholder: '-- Pilih Jenis Pendaftaran --',
  },
  {
    name: 'studentName',
    label: 'Nama Lengkap Calon Siswa',
    placeholder: 'Masukkan nama lengkap',
    autoComplete: 'section-student name',
    minLength: 3,
    maxLength: 120,
  },
  {
    name: 'parentName',
    label: 'Nama Lengkap Orang Tua',
    placeholder: 'Masukkan nama orang tua',
    autoComplete: 'section-parent name',
    minLength: 3,
    maxLength: 120,
  },
  {
    name: 'address',
    label: 'Alamat Domisili',
    as: 'textarea',
    placeholder: 'Alamat lengkap domisili',
    autoComplete: 'section-student street-address',
    rows: 3,
    minLength: 10,
    maxLength: 1000,
  },
  {
    name: 'previousSchool',
    label: 'Asal Sekolah',
    placeholder: 'Nama sekolah sebelumnya',
    minLength: 2,
    maxLength: 160,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'contoh@gmail.com',
    autoComplete: 'section-parent email',
    maxLength: 254,
  },
  {
    name: 'phone',
    label: 'No. HP / WhatsApp',
    type: 'tel',
    inputMode: 'tel',
    placeholder: '08xxxxxxxxxx',
    autoComplete: 'section-parent tel',
    maxLength: 24,
  },
]
