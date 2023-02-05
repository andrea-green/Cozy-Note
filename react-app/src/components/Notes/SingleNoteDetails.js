import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getNoteThunk, editNoteThunk } from '../../store/note'
import IconModal from '../IconModal/IconModal'
import DeleteNoteForm from '../Notes/DeleteNoteForm'
import { useParams } from 'react-router-dom'
import NotebookDropDown from './NotebooksDropDown'
import EditNoteTitle from './EditNoteTitle'
import EditNoteContent from './EditNoteContent'




export default function SingleNoteDetails() {

    const myNote = useSelector(state => state.notes.singleNote)
    const myNotebook = useSelector(state => state.notebooks.allNotebooks.byId)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory();
    const { noteId } = useParams();



    useEffect(() => {
    }, [myNote])


    return (
        <div>
            <div className='note-header'>
                {/* should be able to click and go to the notebook */}
                {myNote.notebook &&
                    <h1>{myNote.notebook.name} </h1>
                }
                <NotebookDropDown/>
                <div className="edit-delete-buttons">
                    <IconModal
                        modalComponent={<DeleteNoteForm />}
                        faIcon="fa-regular fa-trash-can"
                    />
                </div>
            </div>
            <EditNoteTitle />
            <EditNoteContent />
        </div>
    )
}

// conditional :
// what am i trying to do -> trying to check if the note belongs to a note book.
// means if notebook_id is truthy.
