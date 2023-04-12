import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNoteThunk } from '../../store/note'
// import DeleteNoteForm from '../Notes/DeleteNoteForm'
import { useParams } from 'react-router-dom'
// import EditNoteContent from './EditNoteContent'
// import OpenModalButton from '../OpenModalButton'
import './index.css';
import NotebookDropDown from '../Notes/NotebooksDropDown';
import EditNoteTitle2 from './EditNoteTitle2';


export default function SingleNtbkNote() {

    const myNote = useSelector(state => state.notebooks.singleNtbk.singleNote)
    const dispatch = useDispatch()
    const { noteId } = useParams();



    // useEffect(() => {
    //     dispatch(getNoteThunk(noteId))
    // }, [noteId])

    // useEffect(() => { }, [myNote])


    return (
        <div className='sn-main'>
            <div className='note-header'>
                <EditNoteTitle2/>
                {myNote.notebook &&
                    <h2 className='notebook-name'>Notebook: {myNote.notebook.name} </h2>
                }
                <div className='drop-down'>
                    <NotebookDropDown />
                </div>
            </div>
            <div className='delete-edit'>
                {/* <OpenModalButton
                    modalComponent={<DeleteNoteForm />}
                    faIcon={<i className="fa-solid fa-trash fa-2xl" style={{ color: "#cacafa", cursor: 'pointer' }} />}
                /> */}
            </div>
            {/* <EditNoteContent /> */}
        </div>
    )
}
