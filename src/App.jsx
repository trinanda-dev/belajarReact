import './App.css'
import HeroSection from './component/parts/landingPage/HeroSection'
import Button from './component/ui/Button'

function App() {
  function SendMassage() {
    return "Halo Disana"
    
  }
  const textUtama = "Hallo disana";
  let num1 = 127;
  return (

    <>
    
    <HeroSection/>
    <h1>Hello dunia</h1>
    <h1>{textUtama}</h1>
    <h1>{num1}</h1>
    <Button backgroundColor={"yellow"}>Test</Button>
    <Button backgroundColor={"green"}>Hallo Button</Button>
    <Button backgroundColor={"purple"}>Text Hello</Button>


    <div>{SendMassage()}</div>
    </>
  )
}

export default App