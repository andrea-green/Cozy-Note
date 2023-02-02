import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { getNoteThunk } from '../../store/note';


export default function AllNotes(){
    const dispatch = useDispatch();
    // const state = useSelector(state=>console.log('state', state));
    // console.log(state)
    // const noteId = useSelector(state => state.notes.notes.id);
    const history = useHistory();

    const handleSubmit = async (noteId) => {
        await dispatch(getNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }


    //use selector to grab all of the notes belonging to the current user.
    const myNotes = useSelector((state)=>state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes);
    console.log('notesArr', myNotesArr)

    return (
        <div>
            <h1>My Notes </h1>
            <div className="notes-list">
                {myNotesArr.map((note) => (
                    <div key={note.id} className='note'>
                            <button onClick={() => {
                                handleSubmit(note.id)
                                }}>{note.title}
                            </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

// emppty tags for outer div.
