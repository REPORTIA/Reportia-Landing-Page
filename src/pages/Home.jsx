import { useEffect } from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhatCanReport from '../components/WhatCanReport'
import Stats from '../components/Stats'
import MapSection from '../components/MapSection'
import DownloadApp from '../components/DownloadApp'

export default function Home() {
  useEffect(() => {
    document.title = 'Reportia — Reporta, tu comunidad resuelve. Lima mejora.'
  }, [])

  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatCanReport />
      <Stats />
      <MapSection />
      <DownloadApp />
    </main>
  )
}
