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
        <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
            <div style={{width:'fit-content'}}>
                {/* notes container  */}
                <AllNotes />
                {/* notebooks container  */}
                <div className='notebooks-container'>
                    <div className="notebooks-list" >
                        <AllNotebooks />
                    </div>
                </div>
            </div>
            {/* lists container */}
            <div className='lists-container'>
                <AllLists />
            </div>
        </div>

    )

}

export default Body;
