import { Routes, Route } from 'react-router-dom';
// Eğer components klasörün varsa bunları aç, yoksa yorumda kalsın
// import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import { AuthProvider } from './context/AuthContext';

// --- TÜM DOSYALAR ANA DİZİNDE (Resmine göre) ---
// Hepsini './' ile çağırıyoruz. pages klasörüne gitmiyoruz.
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';
import MyBookings from './MyBookings'; // TEK SEFER ÇAĞIRDIK
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import ProfileSettings from './ProfileSettings';
import LeaveReview from './LeaveReview';

// Olmayan veya hata veren dosyaları sildim.

function App() {
  return (
    // <AuthProvider>  <-- AuthProvider dosyan varsa bu yorumu kaldır
      <Routes>
        {/* <Route element={<Layout />}> <-- Layout dosyan varsa bu yorumu kaldır */}
          
          {/* --- AÇIK SAYFALAR --- */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitters/:id" element={<SitterDetails />} />

          {/* Yeni Sayfalar */}
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<MyBookings />} />
          
          {/* --- GİZLİ SAYFALAR (Normalde PrivateRoute içinde olur) --- */}
          {/* Şimdilik hoca görsün diye dışarı aldım, hata vermesin */}
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />

        {/* </Route> */}
      </Routes>
    // </AuthProvider>
  );
}

export default App;
