import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editNoteThunk } from '../../store/note'



export default function EditNoteTitle() {
    const dispatch = useDispatch();

    const { closeModal } = useModal();
    const myNote = useSelector(state => state.notes.singleNote);


    const [title, setTitle] = useState(myNote.title);
    const content = myNote.content
    const notebookId = myNote.notebook_id || null;
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);



    useEffect(() => {
        const errors = [];

        if (title.length < 1) errors.push('Title must be at least 1 characters long');
        if (content.length < 0) errors.push('Content may not be empty');

        setErrors(errors);
    }, [title, content])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            notebookId
        }

        dispatch(editNoteThunk(myNote.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // .then(() => history.push(`/notes/${noteId}`))
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
