import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Boludle from './Boludle'
import BuildInfo from './components/dev/BuildInfo'
// import Conexiones from './components/conexiones/Conexiones'

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/build/info" element={<BuildInfo />} />
        {/* <Route path="/conexiones" element={<Conexiones />} /> */}

        <Route path="/" element={<Boludle />} />
        <Route path="*" element={<Boludle />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
