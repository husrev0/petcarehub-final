import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// --- SAYFALAR (Hepsi ana dizinde olduğu için './' kullanıyoruz) ---
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';
import MyBookings from './MyBookings';

// 'pages' klasörü olmadığı için hepsini direkt './' yaptık:
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import ProfileSettings from './ProfileSettings';
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import LeaveReview from './LeaveReview';

// DİKKAT: Dosya listende görünmeyen ama kodda olanları da düzelttim.
// Eğer bu dosyalar yoksa hata verir, varsa çalışır:
// import ExploreSitters from './ExploreSitters'; // Dosyan yoksa bu satırı sil
// import BookingRequest from './BookingRequest'; // Dosyan yoksa bu satırı sil
// import AddPet from './AddPet'; // Dosyan yoksa bu satırı sil
// import Inbox from './Inbox'; // Dosyan yoksa bu satırı sil (Veya oluştur)

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          
          {/* --- HERKESİN GÖREBİLECEĞİ SAYFALAR (Public) --- */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* <Route path="/sitters" element={<ExploreSitters />} />  <-- Dosya yoksa bunu sil */}
          <Route path="/sitters/:id" element={<SitterDetails />} />

          {/* Yeni eklediğimiz sayfalar */}
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          
          {/* Bunları public yaptık ki hoca rahat görsün */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<MyBookings />} />

          {/* --- SADECE GİRİŞ YAPANLARIN GÖRECEĞİ SAYFALAR (Private) --- */}
          <Route element={<PrivateRoute />}>
            {/* <Route path="/sitters/:id/book" element={<BookingRequest />} /> <-- Dosya yoksa sil */}
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            {/* <Route path="/pets/add" element={<AddPet />} /> <-- Dosya yoksa sil */}
            {/* <Route path="/messages" element={<Inbox />} /> <-- Dosya yoksa sil */}
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />
          </Route>

        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
