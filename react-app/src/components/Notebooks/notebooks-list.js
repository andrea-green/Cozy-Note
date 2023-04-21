import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getNtbkThunk,getAllNtbksThunk } from '../../store/notebook';
import OpenModalButton from '../OpenModalButton';
import CreateNotebookForm from './CreateNotebookForm';
import './index.css';



export default function NotebooksList(){
    const dispatch = useDispatch();
    const history = useHistory();

    const myNotebooks = useSelector(state => state.notebooks.allNotebooks.byId);
    const myNotebooksArr = Object.values(myNotebooks);

    const handleSubmit = async(notebookId)=>{
        await dispatch(getNtbkThunk(notebookId))
        history.push(`/notebooks/${notebookId}`)
    }

    useEffect(()=>{
        dispatch(getAllNtbksThunk())
    },[dispatch])

    useEffect(()=>{},[myNotebooks])

    return (
        <div className='nbl-main'>
            <div className='nbl-header'>
                <h1>My Notebooks</h1>
                <div className='nbl-create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNotebookForm />}
                        buttonText='Create notebook'
                        className='nbl-button'
                    />
                </div>
            </div>
            <div className='nbl-list'>
                {myNotebooksArr.map(notebook=> (
                    <div className='indiv-nb' key={notebook.id} onClick={() => handleSubmit(notebook.id)} style={{ cursor: 'pointer' }} >
                        <h3>{notebook.name}</h3>
                        <span>Updated: {notebook.updated_at}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
