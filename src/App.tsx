import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentViewer from './pages/ComponentViewer'
import AssetViewer from './pages/Assets'
import Brand from './pages/Brand'
import Home from './pages/Home'
import Nationbuilder from './pages/Nationbuilder'
import Scrape2TeX from './pages/Scrape2TeX'
import FlightPath from './pages/Flightpath'
import Mapping from './pages/Maps'
import Report from './pages/Report'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<AssetViewer />} />
      <Route path="/component/:id" element={<ComponentViewer />} />
      <Route path="/brand" element={<Brand />} />  
      <Route path="/nationbuilder" element={<Nationbuilder />} />
      <Route path="/scrape2tex" element={<Scrape2TeX />} />
      <Route path="/flightpath" element={<FlightPath />} />
      <Route path="/maps" element={<Mapping />} />
      <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App