// import React, { useEffect } from "react";
// import AllNotes2 from "../Notes/AllNotes2"
// import { useSelector,useDispatch } from "react-redux";
// import {getNoteThunk} from '../../store/note'
// import { getNtbkThunk } from "../../store/notebook";
// import { useParams } from "react-router-dom";


// export default function SingleNotebookDetails(){
//     const myNotebook = useSelector(state => state.notebooks.singleNotebook)
//     const dispatch = useDispatch();
//     const {notebookId, noteId} = useParams();


//     useEffect(()=>{
//         dispatch(getNtbkThunk(notebookId))
//     },[dispatch,notebookId])

//     useEffect(()=>{
//         dispatch(getNoteThunk(noteId))
//     },[dispatch,noteId])



//     return (
//         <div className='single-notebook'>
//             <div className='single-notebook-header'>
//                 <h1>{myNotebook.name}</h1>
//             </div>
//             <div className='note-page'>
//                 <AllNotes2 />
//             </div>



//         </div>
//     );
// }
