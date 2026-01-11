import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// --- MEVCUT DOSYALARIN (Hepsini ana dizinden çekiyoruz) ---
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import SitterDetails from './SitterDetails';
import MyBookings from './MyBookings';
import SitterDashboard from './SitterDashboard';
import MyPets from './MyPets';
import ProfileSettings from './ProfileSettings';
import LeaveReview from './LeaveReview';
import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';

// --- OLMAYAN DOSYALARI ÇIKARDIM (Hata vermemesi için) ---
// import BookingRequest from './BookingRequest'; 
// import Inbox from './Inbox'; 
// import AddPet from './AddPet';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          
          {/* HERKESİN GÖREBİLECEĞİ SAYFALAR */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitters/:id" element={<SitterDetails />} />
          
          {/* YENİ EKLEDİKLERİMİZ */}
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* GİRİŞ YAPANLARIN GÖRECEĞİ SAYFALAR */}
          <Route element={<PrivateRoute />}>
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/sitter-dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />
            
            {/* Dosyası olmadığı için bunları kapattım, hata vermesin */}
            {/* <Route path="/sitters/:id/book" element={<BookingRequest />} /> */}
            {/* <Route path="/pets/add" element={<AddPet />} /> */}
            {/* <Route path="/messages" element={<Inbox />} /> */}
          </Route>

        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
