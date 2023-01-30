import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editNtbkThunk } from "../../store/notebook";

export default function EditNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    const updateName = (e) => setName(e.target.value);

    const myNotebook = useSelector(state => state.notebooks.singleNotebook);

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

        return dispatch(editNtbkThunk(payload))
            .then(() => history.push('/notebooks'))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <>
            <div className='edit-form'>
                <h1>Edit your notebook</h1>
            </div>
            <section className='edit-container'>
                <div className='edit-errors'>
                    <ul> {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>

                <form className='edit-form-body' onSubmit={handleSubmit}>
                    <input className='edit-form-input'
                        type="text"
                        placeholder={myNotebook.name}
                        required
                        value={name}
                        onChange={updateName}
                    />
                </form>
            </section>
        </>
    )
}
