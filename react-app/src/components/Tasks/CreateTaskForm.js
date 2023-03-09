import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { createTaskThunk } from '../../store/task';


export default function CreateTaskForm({listId}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [content,setContent] = useState('');
    const [errors,setErrors] = useState([]);
    const {closeModal} = useModal();
    // const {listId} = useParams();

    const enterContent =(e) => setContent(e.target.value);
    console.log('listId', typeof listId)


    useEffect(()=>{
        const errors=[];
        if (content.length < 1 ) errors.push('Content must be 1 characters long');
        setErrors(errors);
    },[content])


    const handleSubmit = async(e) =>{
        e.preventDefault();

        const payload={
            content,
            list_id:listId
        }
        await dispatch (createTaskThunk(payload))
            .then((task)=>{
                closeModal()
            })
    };

    return (
        <div>
            <div className="form-header">
                <h1>New task</h1>
            </div>

            <section className='form-container'>
                <ul>{errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <label>Start writing to create your task </label>
                    <input className='form-input'
                        type="text"
                        required
                        value={content}
                        onChange={enterContent}
                        style={{fontSize:"30px"}}
                    />
                    <button
                        className='button form-button'
                        type="submit"
                    >Submit</button>
                </form>
            </section>
        </div>
    )


}
