import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { editNoteThunk } from '../../store/note'



export default function EditNoteForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const myNote = useSelector(state => state.notes.singleNote);


    const [title, setTitle] = useState(myNote.title);
    const [content, setContent] = useState(myNote.content);
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);


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
            content
        }

        dispatch(editNoteThunk(myNote.id, payload))
        .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // .then(() => history.push(`/notes/${noteId}`))
    }



    return <>
        <div className='edit-note-form'>
            <h1>Edit your note</h1>
        </div>
        <section className='edit-note-container'>
            <div className='edit-note-errors'>
                <ul> {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>

            <form className='edit-note-form-body' onSubmit={handleSubmit}>
                <input className='edit=note-form-input'
                    type="text"
                    placeholder={myNote.title}
                    required
                    value={title}
                    onChange={updateTitle}
                />
                <button
                    className='button form-button'
                    type="submit"
                >Submit</button>
                <button
                    className='button form-button'
                    type="submit"
                >Cancel</button>
            </form>

        </section>
    </>;
}
