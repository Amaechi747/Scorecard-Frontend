import { Routes, Route } from "react-router-dom"
import { AdminDashboard, ChangePassword, ForgetPassword,Login,ResetPassword, SuperAdminSignUp } from "./pages"
import { AuthenticationBody } from './component';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/superadmin-signup" element={<SuperAdminSignUp />} />
        <Route path="/login" element={<AuthenticationBody />} />
      </Routes>
    </div>
  );
}

export default App;
