import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import DailyActivities from './pages/DailyActivities.jsx'
import Gallery from './pages/Gallery.jsx'
import Ppdb from './pages/Ppdb.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/daily-activities" element={<DailyActivities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/ppdb" element={<Ppdb />} />
    </Routes>
  )
}

export default App
