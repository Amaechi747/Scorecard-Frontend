import { Routes, Route } from "react-router-dom"

import { AdminDashboard, ChangePassword, ForgetPassword,Login,ResetPassword, SuperAdminSignUp, AddPerformanceScore, WeeklyPerformance } from "./pages"



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

        <Route path="/login" element={<Login />} />
        {/* <Route path="/weekly-performance" element={<AddPerformanceScore/>} /> */}
        <Route path="/admin/weekly-performance" element={<WeeklyPerformance/>} />
      

      </Routes>
    </div>
  );
}

export default App;
