import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import ContextAPIExample from './components/ContextAPI'
import ReduxExample from './components/Redux'
import RecoilExample from './components/Recoil'
import ZustandExample from './components/Zustand'
import JotaiExample from './components/Jotai'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LandingPage />} /> 
        <Route path = "/redux" element = {<ReduxExample />} />
        <Route path = "/recoil" element = {<RecoilExample />} />
        <Route path = "/jotai" element = {<JotaiExample />}/>
        <Route path = "/zustand" element = {<ZustandExample />} />
        <Route path = "/contextapi" element = {<ContextAPIExample />} />
      </Routes>
    </Router>
  )
}

export default App
