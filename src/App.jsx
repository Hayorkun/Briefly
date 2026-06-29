import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoutes";
import SideBar from "./component/SideBar";
import DashboardInfo from "./component/DashboardInfo";
import NewRecording from "./component/NewRecording";
import SettingsDetails from "./component/SettingsDetails";
// import SignUpPage from "./pages/SignUpPage";
import MeetingDetails from "./component/MeetingDetails";
import { Navigate } from "react-router-dom";
import MeetingSummary from "./component/MeetingSummary";
import MeetingAction from "./component/MeetingAction";
import MeetingTranscript from "./component/MeetingTranscript";
// import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/loginpage" element={<LoginPage/>}/> */}
          <Route element={<ProtectedRoute />}>
            <Route element={<SideBar />}>
              <Route path="/dashboard" element={<DashboardInfo />} />
              <Route path="/recording" element={<NewRecording />} />
              <Route path="/settings" element={<SettingsDetails />} />
              <Route path="/meeting/:meetingId" element={<MeetingDetails />}>
                <Route index element={<Navigate to="summary" replace />} />
                <Route path="summary" element={<MeetingSummary />} />
                <Route path="action" element={<MeetingAction />} />
                <Route path="transcript" element={<MeetingTranscript />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
