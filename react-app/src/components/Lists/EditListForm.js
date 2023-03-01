//single list index page.

import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editListThunk } from '../../store/list';

export default function EditListForm({ myList }) {
    const [title, setTitle] = useState(myList.title);
    const [errors, setErrors] = useState([]);
    const myList = useSelector(state => state.lists.singleList);
    const updateTitle = (e) => setTitle(e.target.value);

    const dispatch = useDispatch();
    const { closeModal } = useModal();

    useEffect(() => {
        const errors = [];
        if (title.length < 1) errors.push('List must be at least 1 characters long');
        setErrors(errors);
    }, [list])

    useEffect(() => {
        setTitle(myList.title)
    }, [myList])

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

        await dispatch(editListThunk(listId, payload))
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
                    {title !== myNote.title &&
                        <>
                            <button
                                className='button form-button'
                                type="submit"
                            >Save</button>
                            <button
                                onClick={() => setTitle(myNote.title)}
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
