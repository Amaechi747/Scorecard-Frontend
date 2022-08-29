import { Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  ChangePassword,
  ForgetPassword,
  Login,
  ResetPassword,
  SuperAdminSignUp,
  WeeklyPerformance,
  UserManagement,
  SuperAdminCreateAdmin,
  AdminProfile,
  ViewAllAdmins,
  ViewAllUsers,
  LandingDashboard,
  Stack,
  Welcome,
  PerformanceTracker,
  DevDashboard
} from "./pages";
// import { AuthenticationBody } from './component';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<AdminDashboard />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/superadmin-signup" element={<SuperAdminSignUp />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingDashboard />} /> */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="/admin-dashboard/stack" element={< Stack />} />
          <Route path="/admin-dashboard/weekly-performance" element={<WeeklyPerformance />} />
          <Route path="/admin-dashboard/view-all-users" element={<ViewAllUsers />} />
          <Route path="/admin-dashboard/change-password" element={<ChangePassword />} />
          <Route path="/admin-dashboard/view-all-admins" element={<ViewAllAdmins />} />
          <Route path="/admin-dashboard/user" element={<UserManagement />} />
          <Route path="/admin-dashboard/change-password" element={<ChangePassword />} />
          <Route path="/admin-dashboard/profile" element={<AdminProfile />} />
          <Route path="/admin-dashboard/create_admin" element={<SuperAdminCreateAdmin />} />
          <Route path="/admin-dashboard/superadmin-signup" element={<SuperAdminSignUp />} />
        </Route>
        
        <Route path="/decadev-dashboard" element={<DevDashboard/>}>
          <Route path="/decadev-dashboard/overview" element={<h1>Here</h1>} />
        </Route>

        <Route path="/performance-tracker" element={<PerformanceTracker />} />
      </Routes>
    </div>
  );
}

export default App;
