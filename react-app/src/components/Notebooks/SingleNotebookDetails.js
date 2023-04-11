import React, { useEffect } from "react";
import AllNotes2 from "../Notes/AllNotes2"
import { useSelector,useDispatch } from "react-redux";
import {getNoteThunk,getAllNotesThunk} from '../../store/note'
import { getAllNtbksThunk, getNtbkThunk } from "../../store/notebook";
import { useHistory, useParams } from "react-router-dom";
import notesHeader from '../graphics/header4.png';
import OpenModalButton from '../OpenModalButton';

import './index.css'
import CreateNoteForm from "../Notes/CreateNoteForm";


export default function SingleNotebookDetails(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {notebookId, noteId} = useParams();

    const myNotebook = useSelector(state => state.notebooks.singleNotebook)
    console.log('myNotebook',myNotebook)

    const myNotes = useSelector((state) => state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes).filter(note => note.notebook_id === myNotebook.id);

    const handleSubmit = (noteId) => {
        dispatch(getNoteThunk(noteId))
        history.push(`/notes${noteId}`)
    }
    useEffect(()=>{
        dispatch(getNtbkThunk(notebookId))
        dispatch(getNoteThunk(noteId))
        dispatch(getAllNtbksThunk())
        dispatch(getAllNotesThunk())
    },[dispatch,notebookId,noteId])

    useEffect(()=>{

    },[myNotes])

    return (
        <h1>this is me </h1>
    //     <div className='nl-main'>
    //     {/* <h1>WELCOME TO THE CIRCUS</h1> */}
    //     <div className='nl-header'>
    //         <img src={notesHeader} alt='nl-header'/>
    //         <div className='nl-create-button'>
    //             <OpenModalButton
    //                 modalComponent={<CreateNoteForm />}
    //                 buttonText='Create note'
    //             />
    //         </div>
    //     </div>

    //     <div className='nl-list'>
    //         {myNotesArr.map(note=> (
    //             <div className='indiv-note' key={note.id} onClick={() => handleSubmit(note.id)} style={{ cursor: 'pointer' }} >
    //                 <h3>{note.title}</h3>
    //                 <span>Updated: {note.updated_at}</span>
    //             </div>
    //         ))}

    //     </div>

    // </div>
    )
}
