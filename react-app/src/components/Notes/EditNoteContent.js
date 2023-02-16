import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editNoteThunk } from '../../store/note'
import '../HomePage.css'



export default function EditNoteContent() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const myNote = useSelector(state => state.notes.singleNote);


    const title = myNote.title;
    const [content, setContent] = useState(myNote.content);
    const notebookId = myNote.notebook_id || null;
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        setContent(myNote.content)
    }, [myNote])

    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            notebookId
        }
        console.log('payload', payload)

        dispatch(editNoteThunk(myNote.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // .then(() => history.push(`/notes/${noteId}`))
    }



    return (
        <div className='edit-note-container'>
            <div className='edit-note-errors'>
                <ul> {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            </div>

            <div className='note-body'>
                <div>
                    <form className='edit-note-form-body' onSubmit={handleSubmit}>

                        <textarea className='edit-note-form-text'
                            type="text"
                            // placeholder={myNote.content}
                            required
                            value={content}
                            onChange={updateContent}
                        />
                        {content !== myNote.content &&
                            <>
                                <button
                                    className='button form-button'
                                    type="submit"
                                >Submit</button>
                                <button
                                    onClick={() => setContent(myNote.content)}
                                    className='button form-button'
                                    type="submit"
                                >Cancel</button>
                            </>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
