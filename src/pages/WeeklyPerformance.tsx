import React, { FC, useEffect, useState } from "react";
import { Card } from "../component";
import {AiOutlineCalendar} from 'react-icons/ai'
import {
  Heading,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  CardDashboard,
} from "../styling/css";
import axios from "axios";
import WeekDropDown from "./WeekPerformanceDropdown"

type AddWeeklyPerformanceProps = {
  //id: string;
  // firstName: string
};

type WeeklyTableProps ={
  count: number
  el: any
  // user: string

}

const WeeklyTable = (props: WeeklyTableProps) => {
  return (
    <Tr key={props.count}>
      <Td>{props.count + 1}</Td>
      <Td>{props.el.user.firstName}</Td>
      <Td>{props.el.user.lastName}</Td>

      {
        Object.hasOwn(props.el, 'currentWeekScore') ?
        <>
          <Td>{props.el?.currentWeekScore.algorithm}</Td>
          <Td>{props.el?.currentWeekScore.weeklyTask }</Td>
          <Td>{props.el?.currentWeekScore.assessment }</Td>
          <Td>{props.el?.currentWeekScore.agileTest }</Td>
          <Td>{props.el?.currentWeekScore.cummulative }</Td>
        </>
        : 
        <>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </>
      }
      <Td style={{cursor: 'pointer'}} className='action'>...</Td>
    </Tr>
  )  
}



const WeeklyPerformance: any = (props: AddWeeklyPerformanceProps) => {
  const [week, setWeek] = useState<any>(1);
  const [displayList, setDisplayList] = useState<any>([]);
  
  const weekChangeHandler = (id:string)=>{
    setWeek(id);
  }
  
  let admin = localStorage.getItem('admin');
  let token = localStorage.getItem('token');
  if(token !== null){
    token = token;
  }

  let userId: string;
  if(admin !== null){
    admin = admin
    const {id}: any = admin 
    if(id !== null){
      userId = id
    }
  }
  

  useEffect(() => {
    (async () => {
      // const scoresEndpoint = await axios.get(),
      const result = await axios.get(`/admin/filter_score/${userId}?week=${week || 4}`,
      {headers: {"Authorization": `Bearer ${token}`}}
      )

      setDisplayList([...result.data]);
      console.log(result.data);
    })();
  }, [week]);

const weeklyTableList = () => {
  return displayList.map((el: any, index: number) => {
    return <WeeklyTable key={index} count={index} el={el} />
  })
}


  return (
    <>
      <div style={{ margin: '0 3rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Heading> Dashboard </Heading>
          <WeekDropDown onClick={weekChangeHandler}/>
        </div>
        <CardDashboard>
          <div>
            <h2 style={{ color: "#03435F", textAlign: "center" }}>Week {week}</h2>{" "}
          </div>
          <Table>
            <Thead>
                <Tr>
                  <Th>SN</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Algorithms</Th>
                  <Th>Weekly Tasks</Th>
                  <Th>Assessment Test</Th>
                  <Th>Agile Test</Th>
                  <Th>Cummulative Score</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {weeklyTableList()}
              </Tbody>

          </Table>
        </CardDashboard>
      </div>
    </>
  );
};

export default WeeklyPerformance;
