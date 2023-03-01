import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { deleteTaskThunk } from '../../store/task';


export default function DeleteTaskForm(){
    const dispatch = useDispatch();
    const history = useHistory();


    const myTask = useSelector(state => state.tasks.singleTask);
    const [errors,setErrors] = useState([]);
    // const [boolean, setBoolean] = useState(false);


    // const trueBoolean = (e) => setBoolean(true);
    // const falseBoolean = (e) => setBoolean(false);
    const {closeModal} = useModal()


    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(deleteTaskThunk(myTask.id))
        history.push('/tasks')
        closeModal();
    }

    return (
        <div>
            {/* <div className='form-header'>
                <h1>Are you sure you want to delete this task?</h1>
            </div> */}
            <section className='form-body-container'>
                <div className='delete-errors'>
                    <ul>{errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* <label>
                        No
                        <input className='button'
                            type="radio"
                            required
                            checked={boolean ? false : true}
                            onChange={falseBoolean}
                        />
                    </label>
                    <label>
                        Yes
                        <input className='button'
                            type="radio"
                            required
                            checked={boolean}
                            onChange={trueBoolean}
                        />
                    </label> */}
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
