import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNtbkThunk } from '../../store/notebook';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';


export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();


    const [name, setName] = useState('');
    const enterName = (e) => setName(e.target.value);

    const [errors, setErrors] = useState([]);
    const {closeModal} = useModal()

    useEffect(() => {
        const errors = [];

        if (name.length < 1) errors.push('Name must be at least 1 characters long');

        setErrors(errors);
    }, [name])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name
        }

        await dispatch(addNtbkThunk(payload))
            .then(() => {
                closeModal()
            })
        // .catch(async (res) => {
        //     console.log('res', res)
        // const data = await res.json();
        // if (data && data.errors) setErrors(data.errors);
        // });
    };
    return (
        <div>
            <div className="form-header">
                <h1>New Notebook</h1>
            </div>

            <section className='form-container'>
                <ul>{errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input className='notebook-form-input'
                        type="name"
                        required
                        value={name}
                        onChange={enterName}
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
