import RegistrationForm from '../components/RegistrationForm/RegistrationForm.jsx'
import SplitSection from '../components/SplitSection/SplitSection.jsx'
import './Registration.css'

export default function Registration({ onRegister }) {
  return (
    <SplitSection
      className="registration-page"
      aria-label="Pendaftaran santri baru"
      image={`${import.meta.env.BASE_URL}img/santri_1.png`}
      imageAlt="Santri Medina memegang Al-Qur'an"
      imagePosition="left"
      imageWidth="42%"
      imageAspectRatio="auto"
      imageFit="cover"
      imageRadius={24}
      align="stretch"
      gap="clamp(24px, 4vw, 48px)"
      mediaStyle={{ backgroundColor: 'var(--secondary)' }}
      imageProps={{
        loading: 'eager',
        imageStyle: { objectPosition: 'center top' },
      }}
    >
      <RegistrationForm
        onSubmit={onRegister}
        submitLabel="Simpan Pendaftaran Demo"
        notice="Mode demo. Data disimpan sementara untuk ditampilkan di panel admin dan akan hilang saat halaman dimuat ulang."
        successMessage="Pendaftaran demo tersimpan dan sudah tersedia di panel admin. Data akan hilang saat halaman dimuat ulang."
      />
    </SplitSection>
  )
}
