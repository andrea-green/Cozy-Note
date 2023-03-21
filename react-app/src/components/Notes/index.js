// single note page index

import React, { useEffect, useState } from "react"
import SingleNoteDetails from "./SingleNoteDetails"
import { getNoteThunk } from "../../store/note"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AllNotes from './AllNotes'
import '../HomePage.css'
import toDo from '../images/to-do.png'

export default function SingleNote() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(getNoteThunk(noteId)).then(() => setLoaded(true))
    }, [dispatch, noteId])


    return loaded && (
        <>
            <div style={{ padding: "11px", overflow: "auto",display:'flex' }}>
                <AllNotes />
            </div>
            <div className="single-note-details">
                <SingleNoteDetails />
            </div>
        </>
    )
}
