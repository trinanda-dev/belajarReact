import './App.css'
import Footer from './component/layout/navbarFooter/Footer';
import Navbar from './component/layout/navbarFooter/Navbar';
import HeroSection from './component/parts/landingPage/HeroSection'
import Button from './component/ui/Button'

function App() {
  return (
    <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <Footer/>

    </div>
  )
}

export default App;
