import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {HiArrowNarrowLeft} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {UserTable} from "../component"

type ViewAllUsersProps = {}

const BASEURL = process.env.REACT_APP_BASEURL;

function ViewAllUsers(props: ViewAllUsersProps) {
const [users,setUsers] = useState([])

const fetchUsers = async () =>{
  const response = await axios.get(`${BASEURL}/admin/all_decadev`)
  setUsers(response.data);
}


useEffect(()=>{
  fetchUsers();
}, [])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width:"72rem", marginTop: '3rem' }}>

      <div style={{ alignSelf: 'start', marginLeft: 'calc(15% - 4rem)', color: "#03435F" }}>
        <Link to="/admin-dashboard/user" style={{ textDecoration:"none",cursor:"pointer",fontSize:"1.3rem"}}><HiArrowNarrowLeft/> Go back</Link>
        <h1 style={{ color: "#03435F" }}>All Users</h1>
      </div>

    <UserTable 
    tableData={users}
    />

    </div>
  )
};

export default ViewAllUsers