import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentViewer from './pages/ComponentViewer'
import AssetViewer from './pages/Assets'
import Brand from './pages/Brand'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<AssetViewer />} />
      <Route path="/component/:id" element={<ComponentViewer />} />
      <Route path="/brand" element={<Brand />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App