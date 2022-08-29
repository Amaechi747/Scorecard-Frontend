import axios from 'axios';
import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import swal from 'sweetalert';
import { FormInput2, Card, FormButton, Form } from "../component";
import { Heading, Paragraph } from "../styling/css";

type AddPerformanceScoreProps = {
  id: string;
  firstName: string;
  lastName: string;
};

const BASEURL = process.env.REACT_APP_BASEURL;

const AddPerformanceScore = (props: AddPerformanceScoreProps) => {

  const { id, firstName, lastName} = props;

    const [performanceData, setPerformanceData] = useState({
        algorithm: "",
        weeklyTask: "",
        assessment: "",
        agileTest: "",
      });

      // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      //   setPerformanceData({
      //     ...performanceData,
      //     [e.target.name]: e.target.value,
      //   });
      // };

      const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        try {
          e.preventDefault();
          await axios.put(`${BASEURL}/add_score/${id}`, performanceData)
          swal("Success", "You have successfully added weekly score");
        } catch(error){
          swal("Error", "Something went wrong", "error");
        }
      }
    
  return (
    <>
        <Heading> Dashboard </Heading>
        <Card>
        <div>
          <Paragraph>Profile</Paragraph>
        </div>

        <div style={{ padding: "2rem 2.5rem" }}>
          
          <Form
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInput2
              label="First Name"
              placeholder="First Name"
              type="text"
              presetValue={firstName}
              name="firstName"
              disabled
            />

            <FormInput2
              label="Last Name"
              type="text"
              presetValue={lastName}
              name="lastName"
              disabled
            />

            <FormInput2
              label="Algorithms"
              type="Number"
              presetValue={performanceData.algorithm}
              name="algorithm"
              setSharedState={() => {}}
            />

            <FormInput2
              label="Weekly Tasks"
              type="Number"
              presetValue={performanceData.weeklyTask}
              name="weeklyTask"
              setSharedState={() => {}}
            />

            <FormInput2
              label="Assessment Test"
              type="Number"
              presetValue={performanceData.assessment}
              name="assessment"
              setSharedState={() => {}}
              
            />

            <FormInput2
              label="Agile Test"
              type="Number"
              presetValue={performanceData.agileTest}
              name="agileTest"
              setSharedState={() => {}}
            />

            <FormButton text="Done" />

          </Form>
        </div>
        </Card>
    
    </>
  )
}

export default AddPerformanceScore;