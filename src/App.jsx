import { Routes, Route } from 'react-router-dom'
import Home       from './pages/Home'
import Prototypes from './pages/Prototypes'

export default function App() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/prototypes" element={<Prototypes />} />
    </Routes>
  )
}
