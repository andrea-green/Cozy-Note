import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getNoteThunk } from '../../store/note'
import IconModal from '../IconModal/IconModal'
import EditNoteForm from '../Notes/EditNoteForm'
import DeleteNoteForm from '../Notes/DeleteNoteForm'


export default function SingleNoteDetails() {

    const myNote = useSelector(state => state.notes.singleNote)
    const myNotebook = useSelector(state => state.notebooks.allNotebooks.byId)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory();


    useEffect((noteId) => {
        dispatch(getNoteThunk(noteId))
    }, [dispatch])


    return (
        <div>
            <div className='note-header'>
                {/* should be able to click and go to the notebook */}
                {myNote.notebook_id &&
                    <h1>{myNote.notebook_id} </h1>
                }
                <div className="edit-delete-buttons">
                    <IconModal
                    modalComponent={<EditNoteForm/>}
                    faIcon="fa-light fa-pencil"
                    />
                    <IconModal
                    modalComponent={<DeleteNoteForm/>}
                    faIcon="fa-regular fa-trash-can"
                    />
                </div>
            </div>
            <div className='note-title'>
                <h1>{myNote.title}</h1>
            </div>
            <div className='note-body'>
                <p>{myNote.content}</p>
            </div>
        </div>
    )
}

// conditional :
// what am i trying to do -> trying to check if the note belongs to a note book.
// means if notebook_id is truthy.
