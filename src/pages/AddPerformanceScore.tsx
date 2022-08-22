import axios from 'axios';
import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import swal from 'sweetalert';
import { FormInput, Card, FormButton, Form } from "../component";
import { Heading, Paragraph, HorizontalLine } from "../styling/css";

type AddPerformanceScoreProps = {};

const AddPerformanceScore: FC = (props: AddPerformanceScoreProps) => {
    const [performanceData, setPerformanceData] = useState({
        // firstName: "",
        // lastName: "",
        algorithms: "",
        weeklyTasks: "",
        assessmentTest: "",
        agileTest: "",
        cummulativeScore: ""
      });

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPerformanceData({
          ...performanceData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        try {
          e.preventDefault();
          await axios.put("/add_score/", performanceData)
          swal("Success", "You have successfully added weekly score");
        } catch(error){
          swal("Error", "Something went wrong", "error");
        }
      }
    
  return (
    <>
        <Heading> Dashboard </Heading>
        <button> Weeks </button>
        <Card>

        </Card>
    
    </>
  )
}

export default AddPerformanceScore;