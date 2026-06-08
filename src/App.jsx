import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
// import Dashboard from './pages/Dashboard'
// import Recording from './pages/Recording'
// import MeetingDetail from './pages/MeetingDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recording" element={<Recording />} />
        <Route path="/meeting/:id" element={<MeetingDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
