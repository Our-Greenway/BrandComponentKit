import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentViewer from './pages/ComponentViewer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/component/:id" element={<ComponentViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App