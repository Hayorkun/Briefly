import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import DashboardInfo from "./component/DashboardInfo";

// import Recording from './pages/Recording'
// import MeetingDetail from './pages/MeetingDetail'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardInfo />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
