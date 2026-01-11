import { Routes, Route, Link, Outlet } from 'react-router-dom'

// PAGES
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
import Success from './pages/Success' 

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="text-xl font-bold text-indigo-600 flex items-center gap-2">🐾 PetCareHub</Link>
        
        {/* ANA MENÜ LİNKLERİ */}
        <div className="hidden md:flex space-x-4 items-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium">Ana Sayfa</Link>
          <Link to="/sitters" className="text-gray-600 hover:text-indigo-600 font-medium">Bakıcılar</Link>
          <Link to="/bookings" className="text-gray-600 hover:text-indigo-600 font-medium">Randevular</Link>
          
          {/* EKSTRA SAYFALAR (10 EKRAN İÇİN) */}
          <Link to="/pets" className="text-gray-600 hover:text-indigo-600 font-medium">Evcil Hayvanlarım</Link>
          <Link to="/sitter-dashboard" className="text-gray-600 hover:text-indigo-600 font-medium">Bakıcı Paneli</Link>
        </div>

        <div className="flex space-x-3 items-center">
           <Link to="/profile" className="text-gray-600 hover:text-indigo-600 text-sm font-medium mr-2">Profil</Link>
           <Link to="/create-listing" className="hidden sm:block px-3 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100">İlan Ver</Link>
           <Link to="/login" className="px-3 py-2 text-xs font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Giriş</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sitters" element={<Dashboard />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/pets" element={<MyPets />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/sitter-dashboard" element={<SitterDashboard />} />
        <Route path="/sitters/:id" element={<SitterDetails />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/bookings/:id/review" element={<LeaveReview />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
