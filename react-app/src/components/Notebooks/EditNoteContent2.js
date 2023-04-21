import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { editNoteThunk } from '../../store/note'
import '../HomePage.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css'


export default function EditNoteContent2() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const myNote = useSelector(state => state.notebooks.singleNtbk.singleNote)

    const title = myNote.title;
    const [content, setContent] = useState(myNote.content);
    const notebookId = myNote.notebook_id || null;
    const [errors, setErrors] = useState([]);
    const quillRef = useRef();

    useEffect(() => {
        setContent(myNote.content)
    }, [myNote])

    const updateContent = (value) => {
        setContent(value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            notebookId,
        };

        dispatch(editNoteThunk(myNote.id, payload))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };


    return (
        <>
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
                            <ReactQuill
                                className='react-quill'
                                value={content}
                                onChange={updateContent}
                                modules={{
                                    toolbar: [
                                        [{ header: [1, 2, 3, false] }],
                                        ['bold', 'italic', 'underline', 'strike'],
                                        [{ list: 'ordered' }, { list: 'bullet' }],
                                        [{ color: [] }, { background: [] }],
                                        ['clean'],
                                    ],
                                }}
                                ref={quillRef}
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
        </>
    )
}
