import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>PetCareHub 🐾</h1>
      <p>Airbnb-style platform for pet sitters and pet owners.</p>

      <nav style={{ marginTop: '20px' }}>
        <ul style={{ lineHeight: '2' }}>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/bookings">My Bookings</Link></li>
          <li><Link to="/pets">My Pets</Link></li>
          <li><Link to="/profile">Profile Settings</Link></li>
          <li><Link to="/sitter-dashboard">Sitter Dashboard</Link></li>
        </ul>
      </nav>

      <p style={{ marginTop: '30px' }}>
        MVP demo navigation
      </p>
    </div>
  )
}
