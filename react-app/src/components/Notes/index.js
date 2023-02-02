// single note page index

import React, { useEffect } from "react"
import SingleNoteDetails from "./SingleNoteDetails"
import { getNoteThunk } from "../../store/note"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AllNotes from './AllNotes'

export default function SingleNote() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const { noteId } = useParams();
    console.log('out', noteId)

    useEffect(() => {
        console.log(noteId)
        // async () => {
            // if (!Object.keys(myNote).length) {
            // console.log(noteId)
            //     dispatch(getNoteThunk(noteId))
            // }
        dispatch(getNoteThunk(noteId))
        // }
    }, [dispatch, noteId])

    return (
        <>
            <div className="all-notes-note-page">
                {<AllNotes />}
            </div>
            <div className="single-note-details">
                <SingleNoteDetails />
            </div>
        </>
    )
}
