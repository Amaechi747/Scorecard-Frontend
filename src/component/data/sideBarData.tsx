import { FiHome } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { RiUserSettingsLine } from "react-icons/ri"

const sideBarData = [
 {
  id: 0,
  link: "/dashboard",
  icon: <FiHome />,
  name: 'Dashboard'
 },
 {
  id: 1,
  link: "/user-management",
  icon: <AiOutlineUser />,
  name: 'User Management'
 },
 {
  id: 2,
  link: "/admin-management",
  icon: <RiUserSettingsLine />,
  name: 'Admin Management'
 }
]

export default sideBarData