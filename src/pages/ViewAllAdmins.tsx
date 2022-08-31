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
      setAdmins(response.data);
  };

  useEffect(() => {
    fetchAdmins();
  }, [])
  console.log(admins)
  
  return (
    <div style={{ width: '70rem', marginLeft: '1rem', marginBottom: '3rem'}}>
      <div  style ={{marginLeft: 'calc(10% - 4rem)', color: "#03435F"}}>
        <p style={{ cursor: 'pointer' }} onClick={() => {}}> <HiArrowNarrowLeft /> Go back</p>
        <h1>All Admins</h1>
      </div>
       <AdminTable
        tableData={admins}
      />
    </div>
  )
}

export default ViewAllAdmins