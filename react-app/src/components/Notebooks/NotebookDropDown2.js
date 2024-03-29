import React, { useState, useEffect, useRef } from "react";
import { getAllNtbksThunk, getNtbkThunk } from "../../store/notebook"
import { useSelector, useDispatch } from "react-redux";
import CreateNotebookForm from "../Notebooks/CreateNotebookForm";
import { addNtbkThunk } from "../../store/notebook";
import { useHistory, useParams } from "react-router-dom";
import { editNoteThunk } from "../../store/note";
import { useModal } from "../../context/Modal";
import './index.css';


export default function NotebookDropDown2() {

    const dispatch = useDispatch();
    const { setModalContent } = useModal();

    const myNotebooks = useSelector(state => state.notebooks.allNotebooks.byId)
    const myNotebooksArr = Object.values(myNotebooks);

    const myNote = useSelector(state => state.notebooks.singleNtbk.singleNote)


    const title = myNote.title
    const content = myNote.content
    const [dropDown, setDropDown] = useState(false)
    const dropdownRef = useRef(null);


    async function addToNotebook(nbkId) {
        const payload = {
            title,
            content,
            notebookId: nbkId,
        }

        await dispatch(editNoteThunk(myNote.id, payload))
        await dispatch(getNtbkThunk(nbkId))
    }

    const createNewNotebook = () => {
        setModalContent(<CreateNotebookForm />)

    }

    useEffect(() => {
        dispatch(getAllNtbksThunk())
    }, [])

    useEffect(() => { }, [myNote])

    const notebookOptions = myNotebooksArr.map((notebook, idx) => (
        <div onClick={() => addToNotebook(notebook.id)} key={notebook + idx} className='create-notebook-link'>
            <span>{notebook.name}</span>
        </div>
    ))

    const handleDropDown = () => { setDropDown(!dropDown) }

    const onOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", onOutsideClick);

        return () => {
            document.removeEventListener("mousedown", onOutsideClick);
        };
    }, []);


    return (
        <div className='dropdown-button' onClick={handleDropDown} ref={dropdownRef}>
            Add to a notebook
            {dropDown &&
                <>
                    <div className='create-notebook-link' onClick={createNewNotebook}>
                        <span>Create Notebook</span>
                    </div>
                    {notebookOptions}
                </>
            }
        </div>
    )
}
