import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
    </BrowserRouter>
  )
}

export default App
