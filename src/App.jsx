import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Menüyü buradan çekiyoruz

// Sayfalar (Hepsi src içinde olduğu için ./ kullanıyoruz)
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import MyBookings from './MyBookings';

export default function App() {
  return (
    <Routes>
      {/* Tüm sayfaları Layout içine alıyoruz ki hepsinde Menü görünsün */}
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Route>
    </Routes>
  );
}
