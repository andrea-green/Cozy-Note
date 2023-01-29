// homepage index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import OpenModalButton from '../OpenModalButton';
import IconModal from "../IconModal/IconModal";

// thunks imports
import { editNoteThunk } from "../../store/note";
import { getAllNotesThunk,getNoteThunk,addNoteThunk } from "../../store/note";


// components
import CreateNoteForm from "./CreateNoteForm";
import LogoutButton from "../auth/LogoutButton";
import AllNotes from "./AllNotes";


//css imports
import './notes.css'
import '../IconModal/iconmodal.css';


function Body() {

    //hooks
    const [note, setNote] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const { noteId } = useParams();

    //use selectors
    // const state = useSelector(state => state);
    // const singleNote = useSelector(state => state.notes[noteId]);
    const myNote = useSelector(state => state.notes.singleNote);


    useEffect(() => {
        if (noteId) {
            dispatch(getNoteThunk(noteId))
        }
    }, [dispatch, noteId]);

    const handleSubmit=()=>{
        dispatch(addNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }


    return (
        <div className="home-page-div">
        <h1>Hello</h1>
        <h1>My Notes Here </h1>
            <div className='create-new-note'>
                <IconModal
                modalComponent={<CreateNoteForm/>}
                faIcon="fa-solid fa-notes-medical"
                 />
            </div>

        </ div>
    )
    // return (
    //     <div className='main-body'>
    //         {/* far left column  put in app.js. make this in the nav bar comp. */}
    //         <div className='left-column'>
    //             <LogoutButton />
    //
    //         </div>
    //         {/* middle notes container  */}
    //         <div className="notes-dashboard">
    //             <AllNotes />
    //             <CreateNoteForm />
    //         </div>
    //         {/* duplicate for notebooks */}

    //     </div>
    // )
}

export default Body;
