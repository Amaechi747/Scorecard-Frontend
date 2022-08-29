import { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import swal from 'sweetalert';

type PageProps = {
    id: string;
}


const ModalButton = styled.button`
    border: unset;
    background-color: white;
    font-size: 1rem;
    color: #21334F;
    padding: 1rem 2rem;
    text-align: start;
    &:hover {
        cursor: pointer;
        text-shadow: 0px 0px 5px #aaa;
        letter-spacing: 0.4px;
    }
`
const FormSelect = (props: PageProps) => {
    const {id} = props;
    const [modal, showModal] = useState(false);
    const axiosHeader = { 
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        } 
    }

    
    const deleteUser = async (url: string) => {
        const response = await axios.delete(url, axiosHeader);
        if(response.data.status === 'success') {
            swal('Success', response.data.message, 'success');
            showModal(false);
        }
    }
    const deactiv8User = async (url: string) => {
        const response = await axios.patch(url, {},axiosHeader);
        if(response.data.status === 'success') {
            swal('Success', response.data.message, 'success');
            showModal(false);
        }
    }
    const activ8User = async (url: string) => {
        const response = await axios.post(url, {},axiosHeader);
        if(response.data.status === 'success') {
            swal('Success', response.data.message, 'success');
            showModal(false);
        }
    }

    
    const handleClick = (e: any) => {
        if(e.target.dataset){
            const [url, method] = e.target.dataset.action.split(',');
            switch (method) {
                case 'delete':
                    deleteUser(url);
                    break;
                case 'patch':
                    deactiv8User(url)
                    break;
                case 'post':
                    activ8User(url)
                    break;
                default:
                    break;
            }
        }
    }
    
    return (
        <div style={{ width: '100%', marginBottom: '0.8rem', position: 'relative' }}>
            <span onClick={() => {showModal(!modal)}} style={{cursor: 'pointer'}}>...</span>
            <div style={{ 
                position: 'absolute', 
                display: (modal ? 'inline-flex' : 'none'),
                boxShadow: '0px 0px 10px grey',
                flexDirection: 'column',
                top: '2rem',
                left: '-14rem',
                background: 'white',
                zIndex: '1000',
                minWidth: '15rem',
                minHeight: '13rem',
                justifyContent: 'space-around',
                padding: '0.8rem 0'
            }}>
                
                <ModalButton onClick={() => {}}>Edit</ModalButton>
                <ModalButton data-action={[`/admin/activate/${id}`, 'post']} onClick={handleClick}>Activate</ModalButton>
                <ModalButton data-action={[`/admin/deactivate/${id}`, 'patch']} onClick={handleClick}>Deactivate</ModalButton>
                <ModalButton data-action={[`/admin/delete/${id}`, 'delete']} onClick={handleClick}>Delete</ModalButton>
            </div>
        </div>
    )
}
export default FormSelect;