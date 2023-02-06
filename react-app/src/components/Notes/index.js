// single note page index

import React, { useEffect, useState } from "react"
import SingleNoteDetails from "./SingleNoteDetails"
import { getNoteThunk } from "../../store/note"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AllNotes from './AllNotes'
import '../HomePage.css'

export default function SingleNote() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const { noteId } = useParams();
    const [loaded, setLoaded] = useState(false)

    console.log('out', noteId)

    useEffect(() => {
        console.log(noteId)

        dispatch(getNoteThunk(noteId)).then(() => setLoaded(true))

        // async () => {
        // if (!Object.keys(myNote).length) {
        // console.log(noteId)
        //     dispatch(getNoteThunk(noteId))
        // }

        // }
    }, [dispatch, noteId])


    return loaded && (
        <>
            <div style={{border:'1px solid black',
            padding:'11px', overflow:'auto'}}>
                {<AllNotes />}
            </div>
            <div className="single-note-details">
                <SingleNoteDetails />
            </div>
        </>
    )
}
