import QuickLinks from '../components/QuickLinks/QuickLinks.jsx'
import Extracurricular from '../components/Extracurricular/Extracurricular.jsx'
import InfoPanel from '../components/InfoPanel/InfoPanel.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      <QuickLinks />
      <InfoPanel
        title="Sekilas Tentang PP Medina Insan Qurani"
        className="home__about"
        titleProps={{ style: { fontSize: 'clamp(24px, 3vw, 36px)' } }}
      >
        <p>
          Pesantren Tahfidz Qur’an dari Medina Insan Qurani merupakan lembaga
          pendidikan Islam yang berfokus pada pembinaan generasi penghafal Al-Qur’an
          (hafidz dan hafidzah) dengan kualitas hafalan yang kuat, pemahaman yang
          baik, serta akhlak yang mulia.
        </p>
        <p>
          Pesantren ini mengintegrasikan program tahfidz dengan pendidikan diniyah
          dan pembentukan karakter Islami. Para santri dibimbing untuk menghafal
          Al-Qur’an secara bertahap dengan metode yang terstruktur, mulai dari
          tahsin (perbaikan bacaan), ziyadah (penambahan hafalan), hingga muraja’ah
          (pengulangan hafalan) agar hafalan tetap terjaga dengan baik.
        </p>
      </InfoPanel>
      <Extracurricular />
    </>
  )
}
