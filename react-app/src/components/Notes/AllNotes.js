// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { useHistory } from "react-router-dom"
// import { getNoteThunk, getAllNotesThunk } from '../../store/note';
// import notecard from '../images/indiv-note.png'
// import IconModal from '../IconModal/IconModal'
// import CreateNoteForm from './CreateNoteForm'
// import headerPic from '../images/my-notes-header.png'
// import notesFiller from '../images/notes-filler.gif'

export default function AllNotes() {
    // const dispatch = useDispatch();
    // const history = useHistory();

    // const handleSubmit = async (noteId) => {
    //     await dispatch(getNoteThunk(noteId))
    //     history.push(`/notes/${noteId}`)
    // }

    // useEffect(() => {
    //     dispatch(getAllNotesThunk())
    // }, [dispatch])


    // //use selector to grab all of the notes belonging to the current user.
    // const myNotes = useSelector((state) => state.notes.allNotes.byId);
    // const myNotesArr = Object.values(myNotes);


    // useEffect(() => {

    // }, [myNotes])

    return (
        <h1>notes</h1>
        // <div style={{ border: '1px solid black', overflow: 'auto', background: 'white', height: '50vh', borderRadius: '10px', marginLeft: '1rem', width: '45vw', marginRight: '1rem', marginTop: "0" }}>
        //     <div className='my-notes-header'>
        //         <img src={headerPic} alt='header' style={{ height: '300px', marginTop: '30px' }} />
        //         <div className='create-new-note' style={{ padding: '35px' }}>
        //             <IconModal
        //                 modalComponent={<CreateNoteForm />}
        //                 faIcon="fa-solid fa-notes-medical"
        //             />
        //         </div>
        //     </div>
        //     {!myNotesArr.length
        //         ? (
        //             <div>
        //                 <img src={notesFiller} alt='img' style={{
        //                     width: 'auto',
        //                     height: '12rem',
        //                     paddingLeft: '10rem'}}/>
        //             </ div>)
        //         : (
        //             <div className="home-notes-list">
        //                 {myNotesArr.map((note) => (
        //                     <div className='card-container' key={note.id}
        //                         onClick={() => { handleSubmit(note.id) }}
        //                         style={{ cursor: 'pointer' }}
        //                     >
        //                         <div>
        //                             <h3>{note.title}</h3>
        //                         </div>
        //                         <div>
        //                             <span>{note.updated_at}</span>
        //                         </div>
        //                     </div>

        //                 ))}
        //             </div>)
        //     }


        // </div>
    );
}

// emppty tags for outer div.
