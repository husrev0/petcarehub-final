
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import CreateListing from './CreateListing';
import Success from './Success';
import Dashboard from './Dashboard';
import MyBookings from './MyBookings';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ExploreSitters from './pages/ExploreSitters';
import SitterDetails from './pages/SitterDetails';
import BookingRequest from './pages/BookingRequest';
import MyBookings from './pages/MyBookings';
import SitterDashboard from './pages/SitterDashboard';
import MyPets from './pages/MyPets';
import AddPet from './pages/AddPet';
import Inbox from './pages/Inbox';
import ProfileSettings from './pages/ProfileSettings';
import LeaveReview from './pages/LeaveReview';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sitters" element={<ExploreSitters />} />
          <Route path="/sitters/:id" element={<SitterDetails />} />

          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<MyBookings />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/sitters/:id/book" element={<BookingRequest />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/dashboard" element={<SitterDashboard />} />
            <Route path="/pets" element={<MyPets />} />
            <Route path="/pets/add" element={<AddPet />} />
            <Route path="/messages" element={<Inbox />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/bookings/:id/review" element={<LeaveReview />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
