import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { getNoteThunk, getAllNotesThunk } from '../../store/note';
import IconModal from '../IconModal/IconModal'
import OpenModalButton from '../OpenModalButton';
import CreateNoteForm from './CreateNoteForm'
import { useModal } from '../../context/Modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notesHeader from '../graphics/header4.png';
import './index.css'
// import '../HomePage.css'


export default function AllNotes() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    //use selector to grab all of the notes belonging to the current user.
    const myNotes = useSelector((state) => state.notes.allNotes.byId);
    const myNotesArr = Object.values(myNotes);


    const NextArrow = ({ onClick }) => {
        return (
            <div className='next-arrow' onClick={onClick}>
                <i className="fa-regular fa-circle-right"></i>
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='prev-arrow' onClick={onClick}>
                <i className="fa-regular fa-circle-left"></i>
            </div>
        )
    }
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };

    const handleSubmit = async (noteId) => {
        await dispatch(getNoteThunk(noteId))
        history.push(`/notes/${noteId}`)
    }

    useEffect(() => {
        dispatch(getAllNotesThunk())
    }, [dispatch])

    useEffect(() => {

    }, [myNotes])

    return (
        // <h1>notes</h1>
        <div className='all-notes-main'>
            <div className='feature-header'>
                <img src={notesHeader} />
                <div className='create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNoteForm />}
                        buttonText='Create new note'
                    />
                </div>
            </div>
            <div className='indiv-card-container'>

                {!myNotesArr.length
                    ? (<></>)

                    : (
                        <div className='card-content'>
                            <Slider {...settings} >
                                {myNotesArr.map(note => (
                                    <div className='indiv-card' key={note.id} onClick={() => handleSubmit(note.id)}>
                                        <h3>{note.title}</h3>
                                        <span>{note.updated_at}</span>
                                    </div>
                                ))}

                            </Slider>

                        </div>)
                }
            </div>
        </div>





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
