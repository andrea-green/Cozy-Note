import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { getNoteThunk, getAllNotesThunk } from '../../store/note';
import OpenModalButton from '../OpenModalButton';
import CreateNoteForm from './CreateNoteForm'
import { useModal } from '../../context/Modal';
import notesHeader from '../graphics/header4.png';
import './index.css'
import CreateNotebookForm from '../Notebooks/CreateNotebookForm';

export default function NotesList() {
    return (
        <div className='nl-main'>
            {/* <h1>WELCOME TO THE CIRCUS</h1> */}
            <div className='nl-header'>
                <img src={notesHeader} alt='nl-header'/>
                <div className='nl-create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNotebookForm />}
                        buttonText='Create notebook'
                    />
                </div>
            </div>

        </div>
    )
}
