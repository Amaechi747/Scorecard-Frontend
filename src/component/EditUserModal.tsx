import React, { FC, FormEvent, ChangeEvent, MouseEvent, useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './CreateStackModal.module.css';
import { CgClose } from 'react-icons/cg';
import axios from 'axios';
import swal from 'sweetalert';

const BASEURL = process.env.REACT_APP_BASEURL;
//Implemented Portals here
type ModalFormProps ={
    offModal: () => void;
    submitHandler?: (event: FormEvent<HTMLFormElement>) => void;
    id: string
}

const EditUserModal: (props: ModalFormProps) => JSX.Element = function(props: ModalFormProps) {
    const { offModal, submitHandler } = props;
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        stack: '',
        // squad: ''
    });
    const navigate = useNavigate();
    const formData = new FormData();

    function getFirstName(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          firstName: e.target.value
        }
      })
    }
    function getLastName(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          lastName: e.target.value
        }
      })
    }
    function getEmail(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          email: e.target.value
        }
      })
    }
    function getPassword(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          password: e.target.value
        }
      })
    }
    function getStack(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          stack: e.target.value
        }
      })
    }
    function getSquad(e: ChangeEvent<HTMLInputElement>){
      setInput((prevState) => {
        return {
          ...prevState,
          squad: e.target.value
        }
      })
    }
    const {firstName, lastName, email,password, stack} = input;
    const token =  localStorage.getItem('token');
    
    function formSubmitHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('I am here ooo',formData)
        if(firstName !== '' && firstName !== undefined){
          console.log('I am here in this place')
          formData.append('firstName', firstName)
          console.log('Get',formData.get('firstName'))
        }
        if(lastName !== '' && lastName !== undefined){
          formData.append('lastName', lastName)
        }
        if(email !== '' && email !== undefined){
          formData.append('email', email)
        }
        if(stack !== '' && stack !== undefined){
          formData.append('stack', stack)
        }
        if(password !== '' && password !== undefined){
          formData.append('password', password)
        }
        
        axios.patch(`${BASEURL}/admin/edit_decadev/${props.id}`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
          if (res.data.status === 'success') {
            swal('Success', res.data.message, 'success');
          }
            setTimeout(() => {
                window.location.reload();
            }, 1000);               
        })
        .catch((error) => {
            console.log(error)
        })        
    }

    const closeModal  = function (){
      offModal();
    }

    return(
    <div className={styles["modal-container"]} >
      <form onSubmit={formSubmitHandler}> 
        <div className={styles["close"]} >
            <h2> Edit User Details </h2>
            <button onClick={offModal} > <CgClose/> </button> 
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='firstName'>First Name</label>
            <input 
            type="text" value={input.firstName}  
            placeholder='Enter First Name'
            onChange={getFirstName}
            />
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='last-name'>Last Name</label>
            <input 
            type="text" value={input.lastName}  
            placeholder='Enter Last Name'
            onChange={getLastName}
            />
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='email'>Email</label>
            <input 
            type="text" value={input.email}  
            placeholder='Enter Email'
            onChange={getEmail}
            />
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='password'>password</label>
            <input 
            type="text" value={input.password}  
            placeholder='Enter password'
            onChange={getPassword}
            />
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='stack'>Stack</label>
            <input 
            type="text" value={input.stack}  
            placeholder='Enter name of Stack'
            onChange={getStack}
            />
        </div>
        <button type={"submit"} onClick={closeModal} className={`${styles["submit"]}`} > Done </button>
      </form>
    </div>
    )
}
export default EditUserModal;