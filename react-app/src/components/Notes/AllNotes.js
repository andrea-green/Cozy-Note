import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { getNoteThunk } from '../../store/note';
import notecard from '../images/indiv-note.png'
import IconModal from '../IconModal/IconModal'
import CreateNoteForm from './CreateNoteForm'
import headerPic from '../images/my-notes-header.png'


export default function AllNotes() {
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
    const myNotes = useSelector((state) => state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes);
    console.log('notesArr', myNotesArr)

    return (
        <div style={{border: '1px solid black'}}>
            <div className='my-notes-header'>
                <img src={headerPic} alt='header' style={{height:'300px',marginTop:'30px'}}/>
                <div className='create-new-note' style={{ padding: '35px' }}>
                    <IconModal
                        modalComponent={<CreateNoteForm />}
                        faIcon="fa-solid fa-notes-medical"
                    />
                </div>
            </div>
            <div className="home-notes-list">
                {myNotesArr.map((note) => (
                    <div className='card-container' key={note.id}
                        onClick={() => { handleSubmit(note.id) }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div>
                            <h3>{note.title}</h3>
                        </div>
                        {/* <div

                            className='card-pic'
                            onClick={() => { handleSubmit(note.id) }}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={notecard} alt='note' style={{ height: '230px' }} />
                        </div> */}
                        <div>
                            <span>{note.updated_at}</span>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
}

// emppty tags for outer div.
