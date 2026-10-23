import { Route, Routes, useLocation } from 'react-router'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import DailyActivities from './pages/DailyActivities.jsx'
import Gallery from './pages/Gallery.jsx'
import Ppdb from './pages/Ppdb.jsx'
import Registration from './pages/Registration.jsx'
import SubmenuPage from './pages/SubmenuPage.jsx'
import { menuItems } from './data/navigation.js'

function App() {
  const { pathname } = useLocation()
  const isRegistrationPage = pathname.replace(/\/+$/, '') === '/pendaftaran'
  const pageClassName = pathname === '/'
    ? 'page-content--home'
    : isRegistrationPage ? 'page-content--registration' : ''

  return (
    <>
      <Navbar />
      <main className={`page-content ${pageClassName}`.trim()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/daily-activities" element={<DailyActivities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ppdb" element={<Ppdb />} />
          <Route path="/pendaftaran" element={<Registration />} />
          {menuItems.flatMap((menu) =>
            (menu.children ?? []).map((item) => (
              <Route
                key={item.to}
                path={item.to}
                element={<SubmenuPage title={item.label} />}
              />
            )),
          )}
        </Routes>
      </main>
      {!isRegistrationPage && <Footer />}
    </>
  )
}

export default App
