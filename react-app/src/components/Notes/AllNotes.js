import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { getAllNotesThunk } from '../../store/note';


export default function AllNotes(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.notes);
    const noteId = useSelector(state => state.notes.notes.id);
    const history = useHistory();

    const handleSubmit = (noteId) => {
        dispatch(getAllNotesThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    //use selector to grab all of the notes belonging to the current user.
    const myNotes = useSelector((state)=>state.AllNotes.author_id);
    const myNotesArr = Object.values(myNotes);

    return (
        <>
            <h1>My Notes</h1>
            <div>


            </div>
        </>
    );
}

// emppty tags for outer div.
