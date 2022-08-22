import { Routes, Route } from "react-router-dom"
<<<<<<< Updated upstream
import { AdminDashboard, ChangePassword, ForgetPassword,Login,ResetPassword, SuperAdminSignUp } from "./pages"
// import { AuthenticationBody } from './component';
=======
import { AdminDashboard, ChangePassword, ForgetPassword,ResetPassword, SuperAdminSignUp, AddPerformanceScore} from "./pages"
import { AuthenticationBody } from './component';
>>>>>>> Stashed changes


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/superadmin-signup" element={<SuperAdminSignUp />} />
<<<<<<< Updated upstream
        <Route path="/login" element={<Login />} />
=======
        <Route path="/login" element={<AuthenticationBody />} />
        <Route path="/weekly-performance" element={<AddPerformanceScore/>} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}

export default App;
