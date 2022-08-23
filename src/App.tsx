import { Routes, Route } from "react-router-dom"
import {
  AdminDashboard,
  ChangePassword,
  ForgetPassword,
  Login,
  ResetPassword,
  SuperAdminSignUp,
  UserManagement,
  SuperAdminCreateAdmin, 
  AdminProfile 
} from "./pages";
// import { AuthenticationBody } from './component';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/super_admin-create_admin" element={<SuperAdminCreateAdmin />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/superadmin-signup" element={<SuperAdminSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default App;
