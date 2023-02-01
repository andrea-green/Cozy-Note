import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addNoteThunk } from '../../store/note';


export default function CreateNoteForm() {
    const dispatch = useDispatch();
    const history = useHistory();


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    console.log('title', title)
    console.log('content', content)

    const enterTitle = (e) => setTitle(e.target.value);
    const enterContent = (e) => setContent(e.target.value);

    const [errors, setErrors] = useState([]);


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

        await dispatch(addNoteThunk(payload))
        await history.push('/notes')
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) setErrors(data.errors);
            // });
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
                    />
                    <label>Start writing to create your note.</label>
                    <input className='form-input'
                        type="text"
                        value={content}
                        onChange={enterContent}
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
