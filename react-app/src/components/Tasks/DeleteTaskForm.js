import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { deleteTaskThunk } from '../../store/task';


export default function DeleteTaskForm({ task }){
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors,setErrors] = useState([]);
    const [boolean, setBoolean] = useState(false);


    const trueBoolean = (e) => setBoolean(true);
    const falseBoolean = (e) => setBoolean(false);
    const {closeModal} = useModal()


    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(deleteTaskThunk(task.id))
            .then (()=>{
                closeModal()})
    }

    return (
        <div>
            <div className='form-header' style={{display:'flex',justifyContent:'space-between'}}>
                <h1>Are you sure you want to delete this task?</h1>
                <button
                    type='submit'
                    onClick={closeModal}
                    style={{cursor:'pointer',marginTop:'1rem',height:'fit-content'}}
                > X </button>
            </div>
            <section className='form-body-container'>
                <div className='delete-errors'>
                    <ul>{errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        No
                        <input className='button'
                            type="radio"
                            required
                            checked={boolean ? false : true}
                            onChange={falseBoolean}
                            style={{cursor:'pointer'}}
                            />
                    </label>
                    <label>
                        Yes
                        <input className='button'
                            type="radio"
                            required
                            checked={boolean}
                            onChange={trueBoolean}
                            style={{cursor:'pointer'}}
                        />
                    </label>
                    <button
                        className='button form-button'
                        type="submit"
                        // disabled={!boolean}
                    >Delete</button>
                </form>
            </section>


        </div>

    );
}
