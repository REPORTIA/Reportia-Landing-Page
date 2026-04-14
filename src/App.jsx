import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhatCanReport from './components/WhatCanReport'
import Stats from './components/Stats'
import MapSection from './components/MapSection'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhatCanReport />
        <Stats />
        <MapSection />
        <DownloadApp />
      </main>
      <Footer />
    </>
  )
}
