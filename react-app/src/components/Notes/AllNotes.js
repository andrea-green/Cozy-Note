import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { getAllNotesThunk } from '../../store/note';


export default function AllNotes(){
    const dispatch = useDispatch();
    // const state = useSelector(state=>console.log('state', state));
    // console.log(state)
    // const noteId = useSelector(state => state.notes.notes.id);
    const history = useHistory();

    const handleSubmit = (noteId) => {
        dispatch(getAllNotesThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    //use selector to grab all of the notes belonging to the current user.
    const myNotes = useSelector((state)=>state.notes.allNotes);
    const myNotesArr = Object.values(myNotes);

    return (
        <div>
            <h1>My Notes Here </h1>
            <div className='create-new-note'>
                <button onClick={()=>{
                    handleSubmit(noteId)
                }}
                />
            </div>
        </div>
    );
}

// emppty tags for outer div.