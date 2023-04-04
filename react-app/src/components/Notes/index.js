// // single note page index

import React, { useEffect, useState } from "react"
import SingleNoteDetails from "./SingleNoteDetails"
import { getNoteThunk } from "../../store/note"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import NotesList from "./notes-list"
import NavBar from "../NavBar/NavBar"
import './index.css';


export default function SingleNote() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(getNoteThunk(noteId)).then(() => setLoaded(true))
    }, [dispatch, noteId])


    return loaded && (
        <div className='sn-idx-main'>
            <NavBar />
            <NotesList />
            <SingleNoteDetails />
            {/* <div> */}
                {/* style={{ padding: "11px", overflow: "auto",display:'flex' }} */}
                {/* <AllNotes /> need to make a different all notes that displays differently
            </div>
            <div className="single-note-details">
                <SingleNoteDetails />
            </div> */}
        </div>
    )
}
