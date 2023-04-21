import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNtbkThunk } from "../../store/notebook";
import EditNotebookForm from "./EditNotebookForm";
import DeleteNotebookForm from "./DeleteNotebookForm";
import IconModal from "../IconModal/IconModal";
import OpenModalButton from "../OpenModalButton";
import CreateNotebookForm from "./CreateNotebookForm";
import NavBar from '../NavBar/NavBar';
import { useParams } from "react-router-dom";
import SingleNtbkNote from "./SingleNtbkNote";
import NotebooksList from "./notebooks-list";
import NotesGrid from "./notes-grid";
import './index.css';

export default function AllNotebooks2() {
    const dispatch = useDispatch();
    const {notebookId} = useParams();
    const [loaded,setLoaded]=useState(false);


    useEffect(()=>{
        dispatch(getNtbkThunk(notebookId)).then(()=> setLoaded(true))
    },[dispatch,notebookId])

    return loaded && (
        <div className='sn-idx-main'>
            <NavBar/>
            <NotebooksList/>
            {/* <NotesGrid /> */}
        </div>
    )
    }
