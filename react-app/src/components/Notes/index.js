// homepage index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import OpenModalButton from '../OpenModalButton';
import IconModal from "../IconModal/IconModal";

// thunks imports
import { editNoteThunk } from "../../store/note";
import { getNotesThunk } from "../../store/note";
import { getNoteThunk } from "../../store/note";

// components
import CreateNoteForm from "./CreateNoteForm";
import LogoutButton from "../auth/LogoutButton";
import AllNotes from "./AllNotes";


//css imports


function Body() {

    //hooks
    const [note, setNote] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const { noteId } = useParams();

    //use selectors
    const state = useSelector(state => state);
    const singleNote = useSelector(state => state.notes[noteId]);



    useEffect(() => {
        if (noteId) {
            dispatch(getNoteThunk(noteId))
        }
    }, [dispatch, noteId]);
    return (
        <div className='main-body'>
            {/* far left column  put in app.js. make this in the nav bar comp. */}
            <div className='left-column'>
                <LogoutButton />
                <div className="create-note-form">{
                    <IconModal
                    faIcon="fa-solid fa-notes-medical"
                    modalComponent={<CreateNoteForm/>}
                    />

                }
                </div>
            </div>
            {/* middle notes container  */}
            <div className="notes-dashboard">
                <AllNotes />
                <CreateNoteForm />
            </div>
            {/* duplicate for notebooks */}

        </div>
    )
}

export default Body;
