import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { addNtbkThunk } from '../../store/notebook';


export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();


    const [name, setName] = useState('');
    const enterName = (e) => setName(e.target.value);

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];

        if (name.length < 1) errors.push('Name must be at least 1 characters long');

        setErrors(errors);
    },[name])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name
        }

        return dispatch(addNtbkThunk(payload))
            .then(() => history.push('/notebooks'))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };
    return (
        <>
            <div className="form-header">
                <h1>New Notebook</h1>
            </div>

            <section className='form-container'>
                <ul>{errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}</ul>
                <form className='form-body' onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input className='form-input'
                        type="text"
                        required
                        value={name}
                        onChange={enterName}
                    />
                    <label>Start writing to create your note.</label>
                    <input className='form-input'
                        type="text"
                        value={content}
                        onChange={enterContent}
                    />
                </form>
            </section>

        </>
    )
}
