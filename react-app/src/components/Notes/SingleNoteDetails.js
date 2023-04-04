import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getNoteThunk, editNoteThunk } from '../../store/note'
// import IconModal from '../IconModal/IconModal'
import DeleteNoteForm from '../Notes/DeleteNoteForm'
import { useParams } from 'react-router-dom'
import NotebookDropDown from './NotebooksDropDown'
import EditNoteTitle from './EditNoteTitle'
import EditNoteContent from './EditNoteContent'
import OpenModalButton from '../OpenModalButton'
// import '../HomePage.css'






export default function SingleNoteDetails() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch()
    const { noteId } = useParams();



    useEffect(() => {
        dispatch(getNoteThunk(noteId))
    }, [noteId])

    useEffect(() => { }, [myNote])


    return (
        // <h1>welcome to clown town </h1>
        <div className='sn-main'>
            <div className='note-header'>
                <h1 style={{ color: 'black', fontSize: '20px', marginBottom: '0' }}>Notebook</h1>
                {myNote.notebook &&
                    <h1 className='notebook-name'>{myNote.notebook.name} </h1>
                }
                <div className='drop-down'>
                    <NotebookDropDown />
                </div>
            </div>
            <div className='delete-edit'>
                <OpenModalButton
                    modalComponent={<DeleteNoteForm />}
                    faIcon={<i className="fa-solid fa-trash fa-2xl" style={{ color: "#cacafa", cursor: 'pointer' }} />}
                />

            </div>
        </div>
        // <div>
        //     <div className='note-header'>
        //         <h1 style={{ color: 'white', fontSize: '20px', marginBottom: '0' }}>Notebook</h1>
        //         {myNote.notebook &&
        //             <h1 className='notebook-name'>{myNote.notebook.name} </h1>
        //         }
        //         <NotebookDropDown />
        //     </div>
        //     <div style={{
        //         display:'flex', justifyContent:'flex-end',marginTop:'-8rem', marginBottom:'-6rem'
        //     }}>
        //         {/* <img src={rabbit} alt="" className='rabbit' /> */}
        //     </div>

        //     <div style={{ marginTop: '11rem' }} >
        //         <div className="edit-delete-buttons">
        //             <IconModal
        //                 modalComponent={<DeleteNoteForm />}
        //                 // imageUrl={trashCan}
        //                 // style={{ height: "90%", width: "100%" }}
        //             />
        //         </div>
        //         <EditNoteTitle />
        //         <EditNoteContent />
        //     </div>
        // </div>
    )
}
