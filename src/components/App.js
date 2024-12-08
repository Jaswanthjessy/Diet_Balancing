import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import WeightLoss from './WeightLoss';
import BurnFat from './BurnFat';
import WeightGain from './WeightGain';
import LeafyGreens from './LeafyGreens';
import LeanProteins from './LeanProteins';
import AdminPage from '../Admin/AdminPage';
import AdminLogin from '../Admin/AdminLogin';
import WholeGrains from './WholeGrains';
import Fruits from './Fruits';
import HealthyFats from './HealthyFats';
import GreenTea from './GreenTea';
import CoconutOil from './CoconutOil';
import Eggs from './Eggs';
import AppleCiderVinegar from './AppleCiderVinegar';
import Avocados from './Avocado';
import ChiliPeppers from './ChiliPeppers';
import WholeMilk from './WholeMilk';
import RedMeats from './RedMeats';
import ProfilePage from './ProfilePage';
import PayMent from './Sub'; // Added PayMent component
import CardDetails from "./CardDetails";
import '../style/App.css';

const Navbar = () => {
  const location = useLocation();
  const hideHomeLink = location.pathname === '/';

  return (
    <nav className="app-nav">
      {!hideHomeLink && <Link to="/" className="nav-link">Home</Link>}
      <Link to="/signup" className="nav-link">Signup</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/profilepage" className="nav-link">Profile</Link>
      <Link to="/admin-login" className="nav-link">Admin</Link>
      <Link to="/payment" className="nav-link">Payment</Link> {/* Added Payment Link */}
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Diet Balancing</h1>
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/weight-loss" element={<WeightLoss />} />
            <Route path="/burn-fat" element={<BurnFat />} />
            <Route path="/weight-gain" element={<WeightGain />} />
            <Route path="/leafy-greens" element={<LeafyGreens />} />
            <Route path="/lean-proteins" element={<LeanProteins />} />
            <Route path="/whole-grains" element={<WholeGrains />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/healthy-fats" element={<HealthyFats />} />
            <Route path="/greentea" element={<GreenTea />} />
            <Route path="/coconutoil" element={<CoconutOil />} />
            <Route path="/eggs" element={<Eggs />} />
            <Route path="/apple" element={<AppleCiderVinegar />} />
            <Route path="/avocado" element={<Avocados />} />
            <Route path="/peppers" element={<ChiliPeppers />} />
            <Route path="/wholemilk" element={<WholeMilk />} />
            <Route path="/redmeats" element={<RedMeats />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/card-details" element={<CardDetails />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/payment" element={<PayMent />} /> {/* Added PayMent Route */}
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Diet Balancing Platform. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
