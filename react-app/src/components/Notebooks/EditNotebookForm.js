import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editNtbkThunk } from "../../store/notebook";
import { useModal } from "../../context/Modal";

export default function EditNotebookForm({ myNotebook }) {
    // const myNotebook = useSelector(state => state.notebooks.singleNotebook);
    const [name, setName] = useState(myNotebook?.name);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory();

    // const { notebookId } = useParams();
    console.log('myNotebook', myNotebook)

    const updateName = (e) => setName(e.target.value);



    useEffect(() => {
        const errors = [];

        if (name.length < 1) errors.push('Name must be at least 1 characters long');

        setErrors(errors);
    }, [name])

    

    const handleSubmit = async (e, notebookId) => {
        e.preventDefault();

        const payload = {
            name
        }

        await dispatch(editNtbkThunk(notebookId, payload))
        // history.push(`/notebooks/${notebookId}`)
        .then(() => {
            closeModal()
            // history.push(`/notebooks/${notebookId}`)
        })
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
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

                <form className='edit-form-body' onSubmit={(e) => handleSubmit(e,myNotebook?.id)}>
                    <textarea className='edit-form-input'
                        type="text"
                        placeholder={myNotebook?.name}
                        required
                        value={name}
                        onChange={updateName}
                    />
                    <button className='edit-form-button' type="submit">Save</button>
                </form>
            </section>
        </>
    )
}
