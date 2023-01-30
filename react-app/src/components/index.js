// home page index

// homepage index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import OpenModalButton from '../OpenModalButton';
import IconModal from "../IconModal/IconModal";

// thunks imports
import { getAllNotesThunk } from "../../store/note";
import { getAllNotebooksThunk } from "../../store/notebook";


// components
import CreateNoteForm from "./CreateNoteForm";
import LogoutButton from "../auth/LogoutButton";
import AllNotes from "./AllNotes";
import AllNotebooks from "./AllNotebooks";
import CreateNotebookForm from "./CreateNotebookForm";

//css imports
import '../IconModal/iconmodal.css';


function Body() {

    //use selectors
    const myNote = useSelector(state => state.notes.singleNote);

    // use effects to get all the details for the notes and notebooks



    return (
        <div>
            {/* notes container  */}
            <div className='notes-container'>
                <div className='notes-list'>
                    <AllNotes />
                </div>
                <div className='create-new-note'>
                    <IconModal
                        modalComponent={<CreateNoteForm />}
                        faIcon="fa-solid fa-notes-medical"
                    />
                </div>

            </div>
            {/* notebooks container  */}
            <div className='notebooks-container'>
                <div className="notebooks-list">
                    <AllNotebooks />
                </div>
                <div className='create-new-ntbk'>
                    <IconModal
                        modalComponent={<CreateNotebookForm />}
                        faIcon="fa-solid fa-book-medical"
                    />
                </div>
            </div>


        </div>

    )

}

export default Body;
