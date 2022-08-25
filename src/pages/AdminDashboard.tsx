import React, { FC } from 'react'
import { DashboardLayout } from "../component"
import { Routes, Route } from "react-router-dom"
import { ChangePassword } from "."

type AdminDashboardProps = {}

const AdminDashboard: FC = (props: AdminDashboardProps) => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </DashboardLayout>
  )
}

export default AdminDashboard;