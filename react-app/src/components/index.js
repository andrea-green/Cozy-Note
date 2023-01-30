// home page index

// homepage index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
// import OpenModalButton from '../OpenModalButton';
// import IconModal from '../IconModal';
import IconModal from './IconModal/IconModal'

// // thunks imports


import {getAllNotesThunk} from '../store/note'
import {getAllNtbksThunk} from '../store/notebook'


// components
import CreateNoteForm from './Notes/CreateNoteForm'
// import LogoutButton from "../auth/LogoutButton";
import AllNotes from './Notes/AllNotes'
import CreateNotebookForm from "./Notebooks/CreateNotebookForm";
import AllNotebooks from "./Notebooks/AllNotebooks";

//css imports
import './IconModal/iconmodal.css'


function Body() {

    //use selectors
    const myNote = useSelector(state => state.notes.singleNote);
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    // use effects to get all the details for the notes and notebooks
    useEffect(()=>{
        dispatch(getAllNotesThunk())
    },[dispatch])

    useEffect(()=>{
        dispatch(getAllNtbksThunk())
    },[dispatch])



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
