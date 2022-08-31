import React, { useState, useEffect } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import AdminTable from '../component/AdminTable';



type ViewAllAdminsProps = {
}

const BASEURL = process.env.REACT_APP_BASEURL;

const ViewAllAdmins = (props: ViewAllAdminsProps) => {

  const [admins, setAdmins] = useState([])
  const navigate = useNavigate();

  const fetchAdmins = async () => {

    const response = await axios.get(`${BASEURL}/admin`);

    console.log('All Admin: ',response.data);
      setAdmins(response.data);
  };

  useEffect(() => {
    fetchAdmins();
  }, [])
  console.log(admins)
  
  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column', width: '1200px'}}>

      <div  style ={{ alignSelf: 'start', marginLeft: 'calc(15% - 4rem)', color: "#03435F"}}>

        <p> <HiArrowNarrowLeft onClick={() => { navigate('/admin-dashboard/stack')}} /> Go back</p>
        <h1>All Admins</h1>
      </div>
       <AdminTable
        tableData={admins}
      />
    </div>
  )
}

export default ViewAllAdmins