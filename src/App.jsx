import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'

// Pages
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import SitterDetails from './pages/SitterDetails'
import CreateListing from './pages/CreateListing'
import Success from './pages/Success'
import Dashboard from './pages/Dashboard'
import MyBookings from './pages/MyBookings'
import SitterDashboard from './pages/SitterDashboard'
import MyPets from './pages/MyPets'
import ProfileSettings from './pages/ProfileSettings'
import LeaveReview from './pages/LeaveReview'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sitters/:id" element={<SitterDetails />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/success" element={<Success />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/sitter-dashboard" element={<SitterDashboard />} />
          <Route path="/pets" element={<MyPets />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/bookings/:id/review" element={<LeaveReview />} />
        </Route>
      </Route>
    </Routes>
  )
}
