import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors";
import BloodInventory from "./pages/BloodInventory";
import Analytics from "./pages/Analytics";
import EmergencyRequests from "./pages/EmergencyRequests";
import Compatibility from "./pages/Compatibility";
import MapPage from "./pages/MapPage";
import SmartFeatures from "./pages/SmartFeatures";
import Camps from "./pages/Camps";
import Hospitals from "./pages/Hospitals";
import AIHealthAssistant from "./pages/AIHealthAssistant";

import BloodRequestAuth from "./pages/BloodRequestAuth";
import BloodRequestForm from "./pages/BloodRequestForm";

import DonorAuth from "./pages/DonorAuth";
import DonorHospitals from "./pages/DonorHospitals";
import DonationForm from "./pages/DonationForm";

import AdminBloodRequests from "./pages/AdminBloodRequests";
import AdminDonorManagement from "./pages/AdminDonorManagement";
import LinkedInventory from "./pages/LinkedInventory";
import HospitalDashboard from "./pages/HospitalDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/donors" element={<Donors />} />
        <Route path="/inventory" element={<BloodInventory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/emergency" element={<EmergencyRequests />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/smart-features" element={<SmartFeatures />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/ai-assistant" element={<AIHealthAssistant />} />

        <Route path="/blood-request-auth" element={<BloodRequestAuth />} />
        <Route path="/blood-request-form" element={<BloodRequestForm />} />

        <Route path="/donor-auth" element={<DonorAuth />} />
        <Route path="/donor-hospitals" element={<DonorHospitals />} />
        <Route path="/donation-form/:hospitalName" element={<DonationForm />} />

        <Route path="/admin-blood-requests" element={<AdminBloodRequests />} />
        <Route path="/admin-donor-management" element={<AdminDonorManagement />} />
        <Route path="/linked-inventory" element={<LinkedInventory />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;