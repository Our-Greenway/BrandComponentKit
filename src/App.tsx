import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentViewer from './pages/ComponentViewer'
import AssetViewer from './pages/Assets'
import Brand from './pages/Brand'
import Home from './pages/Home'
import Nationbuilder from './pages/Nationbuilder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<AssetViewer />} />
      <Route path="/component/:id" element={<ComponentViewer />} />
      <Route path="/brand" element={<Brand />} />  
      <Route path="/nationbuilder" element={<Nationbuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App