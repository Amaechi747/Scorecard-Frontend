// http://localhost:4000/users/scores/weekly/630a5eacfbcf2824c57f9578

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

type WeeksPerformanceProps = {
  //id: string;
  // firstName: string
};

type PerformanceProps ={
  count: number
  el: any
  // user: string

}

const BASEURL = process.env.REACT_APP_BASEURL;

const WeeksPerformance = (props: PerformanceProps) => {
  return (
    <Tr key={props.count}>
      <Td>{props.count + 1}</Td>

      {
        Object.hasOwn(props.el, '') ?
        <>
          <Td>{props.el?.algorithm}</Td>
          <Td>{props.el?.weeklyTask }</Td>
          <Td>{props.el?.assessment }</Td>
          <Td>{props.el?.agileTest }</Td>
          <Td>{props.el?.cummulative }</Td>
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
    </Tr>
  )  
}



const PerformanceTracker: any = (props: WeeksPerformanceProps) => {
  const [displayPerformance, setDisplayPerformance] = useState<any>([]);
  
  
  // let admin = localStorage.getItem('admin');
  let token = localStorage.getItem('token');
  let userId = localStorage.getItem('id');

  console.log(userId)
  
  if(token !== null){
    token = token;
  }
  console.log(localStorage)


  useEffect(() => {
    (async () => {
      // const scoresEndpoint = await axios.get(),
      const result = await axios.get(`${BASEURL}/users/scores/weekly/${userId}`,
      {headers: {"Authorization": `Bearer ${token}`}}
      )

      setDisplayPerformance([result]);
      console.log(result);
    })();
  }, []);

const weeksPerformanceList = () => {
  return displayPerformance.map((el: any, index: number) => {
    return <WeeksPerformance key={index} count={index} el={el} />
  })
}


  return (
    <>
      <div style={{ margin: '0 3rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Heading> Scorecard </Heading>
        </div>
        <CardDashboard>
          <Table>
            <Thead>
                <Tr>
                  <Th>Weeks</Th>
                  <Th>Algorithms</Th>
                  <Th>Weekly Tasks</Th>
                  <Th>Assessment Test</Th>
                  <Th>Agile Test</Th>
                  <Th>Cummulative Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                {weeksPerformanceList()}
              </Tbody>

          </Table>
        </CardDashboard>
      </div>
    </>
  );
};

export default PerformanceTracker;
