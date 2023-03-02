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
    const enterTitle = (e) => setTitle(e.target.value);
    const enterContent = (e) => setContent(e.target.value);

    const [errors, setErrors] = useState([]);
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
            <div className="form-header">
                <h1>New note</h1>
            </div>

            <section className='form-container'>
                <ul>{errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <label>Title </label>
                    <input className='form-input'
                        type="text"
                        required
                        value={title}
                        onChange={enterTitle}
                        style={{fontSize:"30px"}}
                    />
                    <label>Start writing to create your note.</label>
                    <textarea className='form-input'
                        type="text"
                        value={content}
                        onChange={enterContent}
                        style={{fontSize:"30px"}}
                    />
                    <button
                        className='button form-button'
                        type="submit"
                        // disabled={contentError}
                    >Submit</button>
                </form>
            </section>

        </div>

    )
}

// a drop down option to select from a list of pre-existing notebooks.
// if no notebooks exist -> only option is to create a new notebook with that note added to it.
// get all notebooks thunk
