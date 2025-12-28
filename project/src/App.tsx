import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cosmetology from './pages/Cosmetology';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import TopInfoBar from "./components/TopInfoBar"
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import DoctorDetails from './pages/DoctorDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopInfoBar/>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cosmetology" element={<Cosmetology />} />
            <Route path="/services/:slug" element={<ServiceDetailsPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctors/:slug" element={<DoctorDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
