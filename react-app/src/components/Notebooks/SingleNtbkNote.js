import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNoteThunk } from '../../store/note'
import { useParams } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import './index.css';
import EditNoteTitle2 from './EditNoteTitle2';
import EditNoteContent2 from './EditNoteContent2';
import NotebookDropDown2 from './NotebookDropDown2';
import DeleteNoteForm2 from './DeleteNoteForm2';


export default function SingleNtbkNote() {

    const myNote = useSelector(state => state.notebooks.singleNtbk.singleNote)
    const myNotebook = useSelector(state => state.notebooks.singleNtbk.details)
    console.log('myNotebook',myNotebook)
    console.log('myNote',myNote)
    const dispatch = useDispatch()
    const { noteId } = useParams();



    // useEffect(() => {
    //     dispatch(getNoteThunk(noteId))
    // }, [noteId])

    useEffect(() => { }, [myNote])


    return (
        <div className='sn-main'>
            <div className='note-header'>
                <EditNoteTitle2/>
                {myNotebook &&
                    <h2 className='notebook-name'>Notebook: {myNotebook.name} </h2>
                }
                <div className='drop-down'>
                    <NotebookDropDown2 />
                </div>
            </div>
            <div className='delete-edit'>
                <OpenModalButton
                    modalComponent={<DeleteNoteForm2 />}
                    faIcon={<i className="fa-solid fa-trash fa-2xl" style={{ color: "#cacafa", cursor: 'pointer' }} />}
                />
            </div>
            <EditNoteContent2 />
        </div>
    )
}
