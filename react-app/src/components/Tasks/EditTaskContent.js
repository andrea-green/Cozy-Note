import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editTaskThunk } from '../../store/task';

export default function EditTask() {
    const dispatch = useDispatch();

    const { closeModal } = useModal();
    const myTask = useSelector(state => state.tasks.singleTask);

    const [content, setContent] = useState(myTask.content);
    const updateTask = (e) => setContent(e.target.value);
    const [errors, setErrors] = useState([]);
    const listId = myTask.list_id;

    useEffect(() => {
        const errors = [];

        if (content.length < 1) errors.push('Task must be at least 1 characters long');
        setErrors(errors);
    }, [title])

    useEffect(() => {
        setContent(myTask.content)
    }, [myTask])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            content,
            listId
        }

        dispatch(editTaskThunk(myTask.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <div className='edit-task-errors'>
                <ul> {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>

            <div cclassName='list-content'>
                <form className = 'edit-list-content-form' onSubmit={handleSubmit}>
                    <input className='edit-list-content-input'
                        type="text"
                        requiredvalue={content}
                        onChange={updateTask}
                    />
                {content !== myTask.content &&
                        <>
                            <button
                                className='button form-button'
                                type="submit"
                            >Save</button>
                            <button
                                onClick={() => setContent(myTask.content)}
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
