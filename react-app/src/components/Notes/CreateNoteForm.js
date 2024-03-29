import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { addNoteThunk } from '../../store/note';


export default function CreateNoteForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const enterTitle = (e) => setTitle(e.target.value);
    const enterContent = (e) => setContent(e.target.value);
    const { closeModal } = useModal();


    useEffect(() => {
        const errors = [];

        if (title.length < 1) errors.push('Title must be at least 1 characters long');

        setErrors(errors);

    }, [title, content])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            title,
            content
        }

        await dispatch(addNoteThunk(payload))
            .then((note) => {
                closeModal()
                history.push(`/notes/${note.id}`)
            })
    };



    return (
        <div>
            <div className="form-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>New note</h1>
                <button
                    type='submit'
                    onClick={closeModal}
                    style={{ cursor: 'pointer', marginTop: '1rem', height: 'fit-content' }}
                > X </button>
            </div>
            <section className='form-container'>
                    <ul>{errors.map((error) => (
                        <li className='errors' key={error}>{error}</li>
                    ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <input className='form-input'
                        type="text"
                        placeholder='Title'
                        required
                        value={title}
                        onChange={enterTitle}
                    />
                    <textarea className='form-input'
                        type="text"
                        value={content}
                        onChange={enterContent}
                        placeholder='Start writing to create your note'
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

// a drop down option to select from a list of pre-existing notebooks.
// if no notebooks exist -> only option is to create a new notebook with that note added to it.
// get all notebooks thunk
