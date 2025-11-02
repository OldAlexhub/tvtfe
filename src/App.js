
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Booking from './pages/Booking'
import Compliance from './pages/Compliance'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
