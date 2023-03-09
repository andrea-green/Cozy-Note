import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editTaskThunk } from '../../store/task';

export default function EditTask({ task }) {
    const dispatch = useDispatch();

    const { closeModal } = useModal();
    const myTask = useSelector(state => state.tasks.singleTask);

    const [content, setContent] = useState(task.content);
    const updateTask = (e) => setContent(e.target.value);
    const [errors, setErrors] = useState([]);
    const [isCompleted,setIsCompleted] = useState(task.is_completed)
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const errors = [];

        if (content.length < 1) errors.push('Task must be at least 1 characters long');
        setErrors(errors);
    }, [content])

    useEffect(()=> {
        if (loaded){
            const payload = {
                content,
                is_completed:isCompleted
            }

            dispatch(editTaskThunk(task.id, payload))
        } else setLoaded(true)
    },[dispatch, isCompleted])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            content,
            is_completed:isCompleted
        }

        await dispatch(editTaskThunk(task.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const taskCompletion = (e) =>{
       setIsCompleted(!isCompleted)
    }


    return (
        <>
            <div className='edit-note-errors'>
                <ul> {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>
            <div className='note-title'>
                <form className='edit-note-form-title' onSubmit={handleSubmit}>
                    <input
                        type='checkbox'
                        checked={isCompleted}
                        style={{ cursor: 'pointer' }}
                        onChange={taskCompletion}
                    />
                    <input className='edit-note-title-input'
                        type="text"
                        required
                        value={content}
                        onChange={updateTask}
                    />
                    {content !== task.content &&
                        <>
                            <button
                                className='button form-button'
                                type="submit"
                            >Save</button>
                            <button
                                onClick={() => setContent(task.content)}
                                className='button form-button'
                                type="submit"
                            >Cancel</button>
                        </>
                    }
                </form>
            </div>
        </>
    )
}
