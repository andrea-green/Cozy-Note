// import React, { useState, useEffect } from "react";
// import { getAllNtbksThunk } from "../../store/notebook"
// import { useSelector, useDispatch } from "react-redux";
// import CreateNotebookForm from "../Notebooks/CreateNotebookForm";
// import { addNtbkThunk } from "../../store/notebook";
// import { useHistory, useParams } from "react-router-dom";
// import { editNoteThunk } from "../../store/note";
// import { useModal } from "../../context/Modal";


// export default function NotebookDropDown() {

//     const dispatch = useDispatch();
//     const { noteId } = useParams();
//     const { setModalContent } = useModal();

//     const myNotebooks = useSelector(state => state.notebooks.allNotebooks.byId)
//     const myNotebooksArr = Object.values(myNotebooks);

//     const myNote = useSelector(state => state.notes.singleNote)


//     const title = myNote.title
//     const content = myNote.content
//     const [dropDown, setDropDown] = useState(false)


//     function addToNotebook(nbkId){
//         console.log('nbkid',nbkId)
//         const payload = {
//             title,
//             content,
//             notebookId:nbkId,
//         }

//         dispatch(editNoteThunk(noteId, payload))
//     }

//     const createNewNotebook=()=>{
//         setModalContent(<CreateNotebookForm />)

//     }

//     useEffect(() => {
//         dispatch(getAllNtbksThunk())
//     }, [])

//     useEffect(() => {},[myNote])

//     const notebookOptions = myNotebooksArr.map((notebook, idx) => (
//         <div onClick={()=> addToNotebook(notebook.id)} key={notebook + idx} className='create-notebook-link'>
//             <span>{notebook.name}</span>
//         </div>
//     ))

//     const openDropDown = () => { setDropDown(!dropDown) }




//     return (

//         <div onClick={openDropDown} style={{cursor:'pointer',background:'white', border:'1px solid black',marginBottom:'2rem'}}>
//             Add to a notebook!
//             {dropDown &&
//                 <>
//                     <div className='create-notebook-link' onClick={createNewNotebook}>
//                         <span>Create New Notebook</span>
//                     </div>
//                     {notebookOptions}
//                 </>
//             }
//         </div>
//     )
// }
