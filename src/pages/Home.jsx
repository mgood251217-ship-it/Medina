import QuickLinks from '../components/QuickLinks/QuickLinks.jsx'
import Extracurricular from '../components/Extracurricular/Extracurricular.jsx'
import InfoPanel from '../components/InfoPanel/InfoPanel.jsx'
import SplitSection from '../components/SplitSection/SplitSection.jsx'
import GoogleMap from '../components/GoogleMap/GoogleMap.jsx'
import LatestNews from '../components/LatestNews/LatestNews.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Title from '../components/Title/Title.jsx'
import Quote from '../components/Quote/Quote.jsx'
import SectionBackground from '../components/SectionBackground/SectionBackground.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home__content">
        <Title title="Seputar Pesantren" color="var(--text)" className="home__quick-links-title" />
        <QuickLinks />
        <SectionBackground variant="waves" className="home__about">
          <InfoPanel
            title="Sekilas Tentang PP Medina Insan Qurani"
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
        </SectionBackground>
        <SectionBackground variant="blobs" className="home__history">
          <SplitSection
            title="Sejarah Singkat"
            subtitle="Medina Insan Qurani"
            imagePosition="right"
            imageAlt="Sejarah PP Medina Insan Qurani"
            imageWidth="45%"
            imageShadow
            titleProps={{ size: 'lg', subtitleSize: 'md', color: 'var(--text)' }}
            contentStyle={{ color: 'var(--info)' }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
              duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas.
            </p>
            <p>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
              semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
              nostra inceptos himenaeos.
            </p>
          </SplitSection>
        </SectionBackground>
        <Extracurricular />
        <LatestNews className="home__news" />
        <SectionBackground variant="dots" className="home__quote">
          <Quote
            text="Setiap guru adalah teladan, setiap ilmu adalah amanah, dan setiap anak adalah investasi akhirat."
            author="Tim Medina Insan Qur’ani"
            background="var(--secondary)"
            color="var(--on-secondary)"
            accentColor="var(--primary-active)"
          />
        </SectionBackground>
        <GoogleMap
          location="Asrama Tahfidz Qur'an SAHAL (Sahabat Al Quran), Jl. Babakan Sari No.11, Pasir Biru, Cibiru, Bandung"
          title="Lokasi Asrama Tahfidz Qur'an SAHAL"
          radius={16}
          className="home__map"
        />
      </div>
    </>
  )
}
