import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// --- DİKKAT: Hepsini './' ile başlatıyoruz çünkü dosyalar ana dizinde ---
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import MyBookings from './MyBookings';
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import ProfileSettings from './ProfileSettings';
import LeaveReview from './LeaveReview'; // Eğer bu dosya yoksa bu satırı sil!

// Yeni eklediğimiz sayfalar
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';

// --- OLMAYAN DOSYALARI SİLDİM Kİ HATA VERMESİN ---
// BookingRequest, Inbox, AddPet gibi dosyalar dosya listende görünmüyordu.

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

          {/* Yeni Sayfalar */}
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
