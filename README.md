# Medina

Website React + Vite dengan React Router.

## Menjalankan proyek

```sh
npm install
npm run dev
```

## Routing

| URL | Halaman | File |
| --- | --- | --- |
| `/` | Home | `src/pages/Home.jsx` |
| `/about-us` | About Us | `src/pages/AboutUs.jsx` |
| `/daily-activities` | Daily Activities | `src/pages/DailyActivities.jsx` |
| `/gallery` | Gallery | `src/pages/Gallery.jsx` |
| `/ppdb` | PPDB | `src/pages/Ppdb.jsx` |

Setiap halaman baru berisi judul, sebagai dasar untuk pengembangan berikutnya.

## Build

```sh
npm run build
```

Untuk deployment, server perlu mengarahkan URL halaman ke `index.html` agar
halaman tetap bisa dibuka langsung atau di-refresh. Server development Vite
sudah menangani ini.
