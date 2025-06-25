// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import ClintsSection from './ClintsSection.jsx'
import CommunitySection from './CommunitySection.jsx'
import SpendingSection from './SpendingSection.jsx'
import ReinventSection from './ReinventSection.jsx'
import DesignSection from './DesignSection.jsx'
import TimSmithSection from './TimSmithSection.jsx'
import MarketingSection from './MarketingSection.jsx'
import DemoSection from './DemoSection.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <HeroSection />
    <ClintsSection />
    <CommunitySection />
    <SpendingSection />
    <ReinventSection />
    <DesignSection />
    <TimSmithSection />
    <MarketingSection />
    <DemoSection />
    <Footer />
  </>
)
