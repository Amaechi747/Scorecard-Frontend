import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {HiArrowNarrowLeft} from 'react-icons/hi'
import {UserTable} from "../component"

type ViewAllUsersProps = {}

function ViewAllUsers(props: ViewAllUsersProps) {
const [users,setUsers] = useState([])

const fetchUsers = async () =>{
  const response = await axios.get('/admin/all_decadev')
  setUsers(response.data);
}


useEffect(()=>{
  fetchUsers();
}, [])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

      <div style={{ alignSelf: 'start', marginLeft: 'calc(15% - 4rem)', color: "#03435F" }}>
        <p><HiArrowNarrowLeft/> Go back</p>
        <h1>All Users</h1>
      </div>

    <UserTable 
    tableData={users}
    />

    </div>
  )
};

export default ViewAllUsers