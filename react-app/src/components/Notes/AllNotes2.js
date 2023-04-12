import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory,useParams } from "react-router-dom"
import { getAllNotesThunk, getNoteThunk } from '../../store/note';
import notesHeader from '../graphics/header4.png'
import OpenModalButton from '../OpenModalButton';
import CreateNoteForm from './CreateNoteForm';


export default function AllNotes2() {
    const dispatch = useDispatch();
    const history = useHistory();

    const myNotes = useSelector(state => state.notebooks.singleNtbk.allNotes)
    const myNotesArr = Object.values(myNotes);
    // const myNotesArr = Object.values(myNotes).filter(note => note.notebook_id === myNotebook.id);
    // console.log('myNotesArr',myNotesArr)

    const handleSubmit = async(noteId) => {
        await dispatch(getNoteThunk(noteId))
    };

    useEffect(()=>{},[myNotes]);

    return (
        <div className='nl-main'>
            <div className='nl-header'>
                <img src={notesHeader} alt='nl-header'/>
                <div className='nl-create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNoteForm />}
                        buttonText='Create note'
                    />
                </div>
            </div>

            <div className='nl-list'>
                {myNotesArr.map(note=> (
                    <div className='indiv-note' key={note.id} onClick={() => handleSubmit(note.id)} style={{ cursor: 'pointer' }} >
                        <h3>{note.title}</h3>
                        <span>Updated: {note.updated_at}</span>
                    </div>
                ))}

            </div>

        </div>
    )
}
