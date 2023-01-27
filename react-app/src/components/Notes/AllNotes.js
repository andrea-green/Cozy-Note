import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { getNoteThunk } from '../../store/note';

export default function AllNotes(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.notes);
    const noteId = useSelector(state => state.notes.notes.id);
    const history = useHistory();

    const handleSubmit = (noteId) => {
        dispatch(getNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    return null; 
}
