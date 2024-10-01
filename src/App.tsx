import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import ContextAPIExample from './components/ContextAPI'
import ReduxExample from './components/Redux'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LandingPage />} /> 
        <Route path = "/redux" element = {<ReduxExample />} />
        <Route path = "/recoil" element = {<div>Recoil</div>} />
        <Route path = "/jotai" element = {<div>Jotai</div>} />
        <Route path = "/zustand" element = {<div>Zustand</div>} />
        <Route path = "/contextapi" element = {<ContextAPIExample />} />
      </Routes>
    </Router>
  )
}

export default App
