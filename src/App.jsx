import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// --- BURASI DÜZELDİ: Hepsi tek sefer ve doğru yerden çağrılıyor ---
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';
import MyBookings from './MyBookings';  // <-- Sadece burada var, aşağıdakini sildim!
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import ProfileSettings from './ProfileSettings';
import LeaveReview from './LeaveReview'; 

// Hata veren (duplicate) ve olmayan satırların HEPSİNİ SİLDİM.

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitters/:id" element={<SitterDetails />} />

          {/* Yeni Eklenenler */}
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />
          </Route>

        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
