// home page index

// homepage index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import IconModal from './IconModal/IconModal'
import './HomePage.css'

// // thunks imports


import { getAllNotesThunk } from '../store/note'
import { getAllNtbksThunk } from '../store/notebook'
import { getAllListsThunk } from '../store/list'




// components
import AllNotes from './Notes/AllNotes'
import CreateNotebookForm from "./Notebooks/CreateNotebookForm";
import AllNotebooks from "./Notebooks/AllNotebooks";
import AllLists from "./Lists/AllLists";
import CreateListForm from './Lists/CreateListForm'
//?? do i need to import all tasks as well?

//css imports
import './IconModal/iconmodal.css'


function Body() {

    const dispatch = useDispatch();

    // use effects to get all the details for the notes and notebooks
    useEffect(() => {
        dispatch(getAllNotesThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllNtbksThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllListsThunk())
    }, [dispatch])




    return (
        <div>
            {/* notes container  */}

            <div className='notes-container'>
                <div className='notes-list'>
                    <AllNotes />
                </div>
            </div>
            {/* notebooks container  */}
            <div className='notebooks-container'>
                <div className="notebooks-list" >
                    <AllNotebooks />
                </div>
            </div>
            {/* lists container */}
            <div className='lists-container'>
                <div className='allLists-list'>
                    <AllLists />
                </div>
                <div className='create-new-ntbk' style={{ margin: '40px' }}>
                    <IconModal
                        modalComponent={<CreateListForm />}
                        faIcon="fa-solid fa-book-medical"
                    />
                </div>
            </div>
        </div>

    )

}

export default Body;
