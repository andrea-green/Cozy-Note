
// //single notebook index
import React, { useEffect, useState } from "react"
import AllNotes2 from "../Notes/AllNotes2"
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getNtbkThunk } from "../../store/notebook"
import { getNoteThunk } from "../../store/note"
import SingleNoteDetails from "../Notes/SingleNoteDetails"
import SingleNtbkNote from "./SingleNtbkNote"



export default function SingleNotebook() {

    // const myNotebook = useSelector(state => state.singleNtbk.details)
    const dispatch = useDispatch();
    const { notebookId, noteId } = useParams();
    const [loaded, setLoaded] = useState(false);

    // useEffect((noteId) => {
        // dispatch(getNoteThunk(noteId)).then(() => setLoaded(true))
        // dispatch(getNoteThunk(noteId))
    // }, [dispatch, noteId])

    useEffect(() => {
        dispatch(getNtbkThunk(notebookId)).then(() => setLoaded(true))
    }, [dispatch, notebookId])



    return loaded && (
        <div className='sn-idx-main'>
            <NavBar />
            <AllNotes2 />
            <SingleNtbkNote />
        </div>
    )

}
