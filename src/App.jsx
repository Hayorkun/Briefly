import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./component/ProtectedRoutes";
// import Dashboard from './pages/Dashboard'
// import Recording from './pages/Recording'
// import MeetingDetail from './pages/MeetingDetail'

export default function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Landing />} />
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/recording" element={<ProtectedRoute><Recording/></ProtectedRoute>}/>
        <Route path="/meeting/:id" element={<ProtectedRoute><MeetingDetail/></ProtectedRoute>}/> */}
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  );
}
