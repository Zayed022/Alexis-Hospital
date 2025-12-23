import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import HomeBanner from './components/HomeBanner'
import ServiceBanner from './components/ServiceBanner'
import BeforeAfter from './components/BeforeAfter'
import ServiceCards from './components/ServiceCards'
import CTAImage from './components/CTAImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homeBanner" element={<HomeBanner />} />
      <Route path="/serviceBanner" element={<ServiceBanner />} />
      <Route path="/beforeAfter" element={<BeforeAfter />} />
      <Route path="/serviceCards" element={<ServiceCards />} />
      <Route path="/ctaImage" element={<CTAImage />} />
      </Routes>
    </>
  )
}

export default App
