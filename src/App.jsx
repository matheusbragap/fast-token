import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Drawer from './components/Drawer'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Drawer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
