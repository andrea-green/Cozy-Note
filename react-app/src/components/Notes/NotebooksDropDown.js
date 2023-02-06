import React, { useState, useEffect } from "react";
import { getAllNtbksThunk } from "../../store/notebook"
import { useSelector, useDispatch } from "react-redux";
import CreateNotebookForm from "../Notebooks/CreateNotebookForm";
import { addNtbkThunk } from "../../store/notebook";
import { useHistory, useParams } from "react-router-dom";
import { editNoteThunk } from "../../store/note";
import { useModal } from "../../context/Modal";


export default function NotebookDropDown() {

    const dispatch = useDispatch();
    const { noteId } = useParams();
    const { setModalContent } = useModal();

    const myNotebooks = useSelector(state => state.notebooks.allNotebooks.byId)
    const myNotebooksArr = Object.values(myNotebooks);
    console.log('myNotebooksArr', myNotebooksArr)
    // // drop down menu setup
    // const [selectNotebook, setSelectNotebook] = useState('');

    const myNote = useSelector(state => state.notes.singleNote)


    const title = myNote.title
    const content = myNote.content
    const [dropDown, setDropDown] = useState(false)


    function addToNotebook(nbkId){
        console.log('nbkid',nbkId)
        const payload = {
            title,
            content,
            notebookId:nbkId,
        }

        dispatch(editNoteThunk(noteId, payload))
    }
    // const addToNotebook = (myNotebookId) => {
    //     setNotebookId(myNotebookId)
    //     const payload = {
    //         title,
    //         content,
    //         notebookId,
    //     }

    //     dispatch(editNoteThunk(noteId, payload))
    // }

    const createNewNotebook=()=>{
        setModalContent(<CreateNotebookForm />)

    }

    useEffect(() => {
        dispatch(getAllNtbksThunk())
    }, [])

    const notebookOptions = myNotebooksArr.map((notebook, idx) => (
        <div onClick={()=> addToNotebook(notebook.id)} key={notebook + idx} className='create-notebook-link'>
            <span>{notebook.name}</span>
        </div>
    ))

    const openDropDown = () => { setDropDown(!dropDown) }




    return (

        <div onClick={openDropDown} style={{cursor:'pointer',background:'white', border:'1px solid black'}}>
            Add to a notebook
            {dropDown &&
                <>
                    <div className='create-notebook-link' onClick={createNewNotebook}>
                        <span>Create New Notebook</span>
                    </div>
                    {notebookOptions}
                </>
            }
        </div>
    )
}

// if the current user does not have any notebooks, then show the create a notebook button.
    //will this redirect user to a new page or will it open another modal?
    // create new note button needs to redirect user to the notes page but open up the new note thing on the side.
    // so opening modal for new notebook will work for this.
    // will need to stay on the same page after creating the notebook.
    // should update the button so that it shows that it belongs to the new notebook. -> didn't i have
    // like a label that displays the notebook name? -> yes keep the button there but update the label.
// if the current user does have notebooks, show their notesbooks as a dropdown menu.
// where is this going to be rendered-> make it into a variable and then use conditional rendering to render those
// variables or?

// if i create/ add the note to a notebook, is this going to update the state/ db and how the hell doe i
// figure that out?
