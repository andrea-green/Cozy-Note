import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { getNoteThunk, getAllNotesThunk } from '../../store/note';
import OpenModalButton from '../OpenModalButton';
import CreateNoteForm from './CreateNoteForm'
import { useModal } from '../../context/Modal';
import notesHeader from '../graphics/header4.png';
import './index.css'

export default function NotesList() {
    const dispatch = useDispatch();
    const history = useHistory();

    const myNotes = useSelector((state) => state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes);

    const handleSubmit = async (noteId) => {
        await dispatch(getNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    useEffect(() => {
        dispatch(getAllNotesThunk())
    }, [dispatch])

    useEffect(() => {

    }, [myNotes])

    return (
        <div className='nl-main'>
            {/* <h1>WELCOME TO THE CIRCUS</h1> */}
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
