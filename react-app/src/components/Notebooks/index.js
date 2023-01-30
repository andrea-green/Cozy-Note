// // notebooks index.


// // homepage index
// import React, { useEffect } from "react";
// import { useDispatch,useSelector} from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// // import OpenModalButton from '../OpenModalButton';
// import IconModal from "../IconModal/IconModal";

// // components
// import CreateNoteForm from "./CreateNoteForm";
// import LogoutButton from "../auth/LogoutButton";
// import AllNotes from "./AllNotes";




// function Body() {




//     const dispatch = useDispatch();
//     const history = useHistory();
//     const { noteId } = useParams();

//     const myNotebooks = useSelector((state)=>state.notebooks.allNotebooks);
//     const myNotebooksArr = Object.values(myNotebooks);

//     useEffect(() => {
//         if (noteId) {
//             dispatch(getNoteThunk(noteId))
//         }
//     }, [dispatch, noteId]);

//     const handleSubmit=()=>{
//         dispatch(addNoteThunk(noteId))
//         history.push(`/notes/${noteId}`)
//     }


//     return (


//     <div className='notebooks-container'>
//         <h1>My Notebooks</h1>
//         {myNotebooksArr.map((notebook) => (
//             <div key={notebook.id} className='notebook'>

//             </div>

//         ))}

//     </div>
//     )
// }

// export default Body;
