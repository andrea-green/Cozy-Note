import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory,useParams } from "react-router-dom"
import { getNoteThunk } from '../../store/note';
import notecard from '../images/indiv-note.png'


export default function AllNotes2() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { noteId } = useParams();

    const handleSubmit = (noteId) => {
        dispatch(getNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    const myNotebook= useSelector(state => state.notebooks.singleNotebook)

    const myNotes = useSelector((state) => state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes).filter(note => note.notebook_id === myNotebook.id)


    return (
            <div>
                <h1>My Notes </h1>
                <div className="notes-list">
                    {myNotesArr.map((note) => (
                        <div className='card-container' key={note.id}>
                            <div>
                                <h3>{note.title}</h3>
                            </div>
                            <div

                                className='card-pic'
                                onClick={() => { handleSubmit(note.id) }}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={notecard} alt='note' style={{height:'230px'}} />
                            </div>
                            <div>
                                <span>{note.updated_at}</span>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
    );
}

// conditionally render so that only the notes that belong to this notebooks are rendered.
// if (note.notebookId === notebookId){ render}
