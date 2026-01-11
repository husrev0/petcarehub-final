import { Routes, Route } from 'react-router-dom'

// Pages (HEPSİ pages KLASÖRÜNDE!)
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import MyBookings from './pages/MyBookings'
import MyPets from './pages/MyPets'
import ProfileSettings from './pages/ProfileSettings'
import SitterDashboard from './pages/SitterDashboard'
import SitterDetails from './pages/SitterDetails'
import CreateListing from './pages/CreateListing'
import LeaveReview from './pages/LeaveReview'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<MyBookings />} />
      <Route path="/pets" element={<MyPets />} />
      <Route path="/profile" element={<ProfileSettings />} />
      <Route path="/sitter-dashboard" element={<SitterDashboard />} />
      <Route path="/sitters/:id" element={<SitterDetails />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/bookings/:id/review" element={<LeaveReview />} />
    </Routes>
  )
}
