//single list index page.

import React, {useEffect,useState} from 'react';
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {editListThunk} from '../../store/list';

export default function EditListForm({myList}){
    const [title, setTitle] = useState(myList?.title);
    const updateTitle=(e)=>setTitle(e.target.value);
    const [errors,setErrors]=useState([]);

    const dispatch=useDispatch();
    const {closeModal}=useModal();

    useEffect(()=>{
        const errors=[];
        if(title.length < 1) errors.push('Title must be at least 1 character long');
        setErrors(errors);
    },[title])

    const handleSubmit=async(e,listId) =>{
        e.preventDefault();
        const payload={
            title
        }

        await dispatch(editListThunk(listId, payload))
            .then(()=>{
                closeModal()
            })
    };


    return (
        <>
            <div className='edit-form'>
                <h1>Edit your list</h1>
            </div>
            <section className='edit-container'>
                <div className='edit-errors'>
                    <ul>{errors.map((error)=>(
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>
                <form className='edit-form-body' onSubmit={(e)=> handleSubmit(e,myList?.id)}>
                    <textarea className='edit-form-input'
                        type='text'
                        placeholder={myList?.title}
                        required
                        value={updateTitle}
                        onChange={updateTitle}
                    />
                    <button className='edit-form-button' type='submit'>Save</button>
                </form>
            </section>
        </>
    );
}
