
// //single notebook index
import React, { useEffect, useState } from "react"
import AllNotes2 from "../Notes/AllNotes2"
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getNtbkThunk } from "../../store/notebook"
import { getNoteThunk } from "../../store/note"
import SingleNoteDetails from "../Notes/SingleNoteDetails"



export default function SingleNotebook() {

    const myNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const { notebookId, noteId } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect((noteId) => {
        dispatch(getNoteThunk(noteId)).then(() => setLoaded(true))
    }, [dispatch, noteId])

    useEffect(() => {
        dispatch(getNtbkThunk(notebookId))
    }, [dispatch, notebookId])



    return loaded && (
        <div className='sn-idx-main'>
            <NavBar />
            <AllNotes2 />
            {/* <SingleNoteDetails /> */}
        </div>
    )

}
