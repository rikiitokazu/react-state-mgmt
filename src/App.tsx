import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LandingPage />} /> 
        <Route path = "/redux" element = {<div>Redux</div>} />
        <Route path = "/recoil" element = {<div>Recoil</div>} />
        <Route path = "/jotai" element = {<div>Jotai</div>} />
        <Route path = "/zustand" element = {<div>Zustand</div>} />
        <Route path = "/contextapi" element = {<div>Context API</div>} />
      </Routes>
    </Router>
  )
}

export default App
