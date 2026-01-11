import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // Eğer context klasörün doluysa aç
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

// --- TÜM DOSYALAR RESİMDEKİ GİBİ 'src' KLASÖRÜNDE ---
// Bu yüzden hepsini './' ile çağırıyoruz. pages klasörüne gitmiyoruz.

import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';
import MyBookings from './MyBookings'; // Yan yana oldukları için ./
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import ProfileSettings from './ProfileSettings';
import LeaveReview from './LeaveReview';

function App() {
  return (
    // <AuthProvider> 
      <Routes>
        <Route element={<Layout />}>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitters/:id" element={<SitterDetails />} />

          {/* Resimde src içinde görünen dosyalar */}
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<MyBookings />} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />
          </Route>

        </Route>
      </Routes>
    // </AuthProvider>
  );
}

export default App;
