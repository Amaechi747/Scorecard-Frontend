import React, { FC, FormEvent, ChangeEvent, MouseEvent, useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './CreateStackModal.module.css';
import Button from '../UI/Button';
import { CgClose } from 'react-icons/cg';
import axios from 'axios';
//Implemented Portals here
type ModalFormProps ={
    offModal: (event: MouseEvent<HTMLButtonElement>) => void;
    submitHandler: (event: FormEvent<HTMLFormElement>) => void
}
const ModalForm: (props: ModalFormProps) => JSX.Element = function(props: ModalFormProps) {
    const {offModal, submitHandler} = props;
    const [name, setName] = useState('');
    const [imageFile, setImageFile] = useState<any>(null);
    const image = useRef(null)
    const navigate = useNavigate();
    // if( file.size > 3072){
    //     onFileSelectError({error: "File size cannot exceed 3mb"})
    // }else{
    //     onFileSelectSuccess(file)
    // }
    const imageUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void = function(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const file = e.target.files[0];
            console.log(file)
            if(file !== undefined){
                setImageFile(file);
            }
        }
    }
    let closeModal:(event: MouseEvent<HTMLButtonElement>) => void;
    const nameHandler: (e: ChangeEvent<HTMLInputElement>) => void = function(e: ChangeEvent<HTMLInputElement>){
        setName(e.target.value)
    }
    const token =  localStorage.getItem('token');
    const formSubmitHandler: (e: FormEvent<HTMLFormElement>) => void = function(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData();
        if(name !== undefined && imageFile !== undefined){
            formData.append('name', name) 
            formData.append('image', imageFile);
            axios.post('/admin/create_stack', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                setTimeout(() => {
                    // navigate('/stack');
                    window.location.reload();
                }, 500);
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    closeModal  = function (event: MouseEvent<HTMLButtonElement>){
        setTimeout(() => {
            offModal(event)
        }, 500)
    }
    return(
    <form onSubmit={formSubmitHandler} className={styles["modal-container"]} >
        <div className={styles["close"]} >
            <h2> Create a Stack</h2>
            <button onClick={offModal} > <CgClose/> </button> 
        </div>
        <div className={styles["stack-name"]}>
            <label htmlFor='stack-name'>Stack Name</label>
            <input
            type="text" value={name}  
            placeholder='Enter name of Stack'
            onChange={nameHandler}
            />
        </div>
        <div className={styles["stack-image"]} >
            <label htmlFor='stack-image'>Stack Image</label>
            <input
            accept=".jpeg"
            type="file"
            ref={image}  
            placeholder='Stack Image'
            onChange={imageUploadHandler} 
            />
        </div>
        <button type={"submit"} onClick={closeModal} className={`${styles["submit"]}`} ><p> Done </p></button>
    </form>
    )
}
export default ModalForm;