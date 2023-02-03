import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getNoteThunk, editNoteThunk } from '../../store/note'
import IconModal from '../IconModal/IconModal'
import EditNoteForm from './EditNoteTitle'
import DeleteNoteForm from '../Notes/DeleteNoteForm'
import { useParams } from 'react-router-dom'



export default function SingleNoteDetails() {

    const myNote = useSelector(state => state.notes.singleNote)
    const myNotebook = useSelector(state => state.notebooks.allNotebooks.byId)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory();
    const [isContentEditing, setIsContentEditing] = useState(false)
    const [isTitleEditing, setIsTitleEditing] = useState(false)
    const [title, setTitle] = useState(myNote.title)
    const [content, setContent] = useState(myNote.content)
    const { noteId } = useParams();


    useEffect(() => {
    }, [myNote])

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            title,
            content
        }

        dispatch(editNoteThunk(noteId, payload))
    }


    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);


    return (
        <div>
            <div className='note-header'>
                {/* should be able to click and go to the notebook */}
                {myNote.notebook_id &&
                    <h1>{myNote.notebook_id} </h1>
                }
                <div className="edit-delete-buttons">
                    <IconModal
                        modalComponent={<EditNoteForm />}
                        faIcon="fa-solid fa-pencil"
                    />
                    <IconModal
                        modalComponent={<DeleteNoteForm />}
                        faIcon="fa-regular fa-trash-can"
                    />
                </div>
            </div>
            <div className='note-title'>
                <form className='edit-note-form-title' onSubmit={handleSubmit}>
                    <input className='edit-note-title-input'
                        type="text"
                        required
                        value={title}
                        onChange={updateTitle}
                    />
                    {title !== myNote.title &&
                        <>
                            <button
                                className='button form-button'
                                type="submit"
                            >Save</button>
                            <button
                                onClick={()=> setIsTitleEditing(false)}
                                className='button form-button'
                                type="submit"
                            >Cancel</button>
                        </>
                    }
                </form>
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
                                    onClick={() => setIsContentEditing(false)}
                                    className='button form-button'
                                    type="submit"
                                >Cancel</button>
                            </>
                        }
                    </form>

                </div>
                {/* <div>
                    <div>
                        <button onClick={() => {
                            setIsContentEditing(true)
                            setContent(myNote.content)
                        }}>
                            <i className="fas fa-solid fa-pencil"></i>
                        </button>
                    </div>

                </div> */}

            </div>
        </div>
    )
}

// conditional :
// what am i trying to do -> trying to check if the note belongs to a note book.
// means if notebook_id is truthy.
