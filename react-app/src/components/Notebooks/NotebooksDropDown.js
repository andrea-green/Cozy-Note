import React, { useState, useEffect } from "react";
import { getAllNtbksThunk } from "../../store/notebook"
import { useSelector, useDispatch } from "react-redux";
import CreateNotebookForm from "./CreateNotebookForm";
import { addNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";

export default function NotebookDropDown() {

    const dispatch = useDispatch();

    const myNotebooks = useSelector(state => state.notebooks.allNotebooks.byId)
    const myNotebooksArr = Object.values(myNotebooks);
    // drop down menu setup
    const [selectNotebook, setSelectNotebook] = useState('');

    const handleSubmit= (notebookId) => {
        // 

    }

    const notebookOptions = myNotebooksArr.map((notebook, idx) => (
            <div key={notebook + idx} className='create-notebook-link'>
                <span>{notebook.name}</span>

            </div>

    ))

    // const options = [{CreateNotebookForm}]
    // const optionComps =
    // myNotebooksArr.forEach(notebook=>{
    //     const notebookOption={value:notebook.name,label:notebook.name}
    //     options.push(notebookOption)
    // })

    //now i'm confused how to conditionally render this bc only want this to happen if you dont have any notebooks.
    useEffect((notebook) => {
        dispatch(addNtbkThunk(notebook))
    })




    return (
        <div className='notebook-drop-down-main'>
            {!myNotebooksArr ? (
                <div className='create-notebook-link'>
                    <span>Add to a new notebook</span>
                </div>
            ) : (<></>)}

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
