// single note page index

import React, { useEffect } from "react"
import SingleNoteDetails from "./SingleNoteDetails"
import { getNoteThunk } from "../../store/note"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AllNotes from './AllNotes'

export default function SingleNote(){

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const {noteId} = useParams();

    useEffect(()=>{
        if (!Object.keys(myNote).length){
            dispatch(getNoteThunk(noteId))
        }
    },[dispatch,noteId,myNote])

    return (
        <>
         <div className = "all-notes-note-page">
            {/* {<AllNotes />} */}

         </div>
         <div className="single-note-details">
            <SingleNoteDetails />
         </div>
        </>
    )
}
