//single list index page.

import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { editListThunk } from '../../store/list';


export default function EditListForm() {
    const myList = useSelector(state => state.lists.singleList);
    const [title, setTitle] = useState(myList.title);
    const [errors, setErrors] = useState([]);
    const updateTitle = (e) => setTitle(e.target.value);

    const dispatch = useDispatch();
    const { closeModal } = useModal();


    useEffect(() => {
        const errors = [];
        if (title.length < 1) errors.push('Title must be at least 1 character long');
        setErrors(errors);
    }, [title])

    const handleSubmit = async (e, listId) => {
        e.preventDefault();
        const payload = {
            title
        }

        dispatch(editListThunk(myList.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };


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
                    <input className='edit-note-title-input'
                        type="text"
                        required
                        value={title}
                        onChange={updateTitle}
                    />
                    {title !== myList.title &&
                        <>
                            <button
                                className='button form-button'
                                type="submit"
                            >Save</button>
                            <button
                                onClick={() => setTitle(myList.title)}
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
