import { Routes, Route } from "react-router-dom"
import { AdminDashboard, ChangePassword, ForgetPassword, Login, ResetPassword, SuperAdminSignUp } from "./pages"

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/SuperAdminSignUp" element={<SuperAdminSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
