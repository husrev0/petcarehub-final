import { Routes, Route } from 'react-router-dom'

// Bunlar 'pages' klasöründeyse böyle kalsın:
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'

// DİKKAT: Resimde MyBookings.jsx 'src' içinde görünüyor (App.jsx yaninda).
// O yüzden başındaki 'pages/' kısmını sildik:
import MyBookings from './MyBookings' 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/bookings" element={<MyBookings />} />
    </Routes>
  )
}
