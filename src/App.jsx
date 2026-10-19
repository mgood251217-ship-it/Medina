import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import DailyActivities from './pages/DailyActivities.jsx'
import Gallery from './pages/Gallery.jsx'
import Ppdb from './pages/Ppdb.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/daily-activities" element={<DailyActivities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ppdb" element={<Ppdb />} />
        </Routes>
      </main>
    </>
  )
}

export default App
