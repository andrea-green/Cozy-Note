import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addListThunk } from '../../store/list';
import { useModal } from '../../context/Modal';
import './index.css'

export default function CreateListForm() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const enterTitle = (e) => setTitle(e.target.value);

    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();

    useEffect(() => {
        const errors = [];
        if (title.length < 1) errors.push('Title must be at least 1 character long');
        setErrors(errors);
    }, [title])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title
        }

        await dispatch(addListThunk(payload))
            .then(() => {
                closeModal()
            })
    };
    return (
        <div className='create-list-main'>
            <div className='form-header'>
                <h1>New List</h1>
                <button
                    type='submit'
                    onClick={closeModal}
                > X </button>
            </div>

            <section className='form-container'>
                <ul>{errors.map((error) => (
                    <li className='errors' key={error}>{error}</li>
                ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input className='list-form-input'
                        type="title"
                        required
                        value={title}
                        onChange={enterTitle}
                    />
                    <button
                        className='button form-button'
                        type='submit'
                    >Submit</button>
                </form>
            </section>
        </div>
    )

}
