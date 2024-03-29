import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { getAllNotesThunk, getNoteThunk } from '../../store/note';
import notesHeader from '../graphics/header4.png'
import OpenModalButton from '../OpenModalButton';
import CreateNoteForm from './CreateNoteForm';
import { singleNtbkNoteAc } from '../../store/notebook';

export default function AllNotes2() {
    const dispatch = useDispatch();
    const history = useHistory();

    const myNotes = useSelector(state => state.notebooks.singleNtbk.allNotes)
    const myNote = useSelector(state => state.notebooks.singleNtbk.singleNote)




    const myNotesArr = Object.values(myNotes);
    const myNotebook = useSelector(state => state.notebooks.singleNtbk.details)


    const handleSubmit = async (note) => {
        await dispatch(singleNtbkNoteAc(note))
    };



    useEffect(() => { }, [myNote, myNotes]);

    return (
        <div className='nl-main'>
            <div className='nl-header'>
                <img src={notesHeader} alt='nl-header' />
                <div className='nl-create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNoteForm />}
                        buttonText='Create note'
                    />
                </div>
                <div className='notebook-name'>
                    <i className="fa-solid fa-book fa-2x" style={{ color: '#ffffff' }}></i>
                    {myNotebook &&
                        <h2 className='notebook-name'>{myNotebook.name} </h2>
                    }
                </div>
            </div>

            <div className='nl-list'>
                {myNotesArr.map(note => (
                    <div className='indiv-note' key={note.id} onClick={() => handleSubmit(note)} style={{ cursor: 'pointer' }} >
                        <h3>{note.title}</h3>
                        <span>Updated: {note.updated_at}</span>
                    </div>
                ))}

            </div>

        </div>
    )
}
