import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNtbksThunk } from '../../store/notebook'
// import { getAllNtbksThunk } from "../../store/notebooks";
import { getNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";
// import EditNotebookForm from "./EditNotebookForm";
// import DeleteNotebookForm from "./DeleteNotebookForm";
import IconModal from "../IconModal/IconModal";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OpenModalButton from "../OpenModalButton";
import CreateNotebookForm from "./CreateNotebookForm";
import nbHeader from '../graphics/header5.png';

export default function AllNotebooks() {
    const dispatch = useDispatch();

    const history = useHistory();
    const user = useSelector((state) => state.session.user);



    const handleSubmit = (e, notebookId) => {
        e.preventDefault();

        dispatch(getNtbkThunk(notebookId))
            .then(() => { history.push(`/notebooks/${notebookId}`) })
    }


    // //use selector to grab all of the notebooks belonging to the current user.
    const myNotebooks = useSelector((state) => state.notebooks.allNotebooks.byId);
    const myNotes = useSelector((state) => state.notes.allNotes);
    const myNotebooksArr = Object.values(myNotebooks);

    // //accordian effect for later implementation
    // const [activeIndex, setActiveIndex] = useState([]);

    // const toggle = (index, notebookId) => {
    //     const newIndex = [...activeIndex];

    //     if (!newIndex.includes(index)) {
    //         newIndex.push(index);
    //         setActiveIndex(newIndex);
    //         dispatch(getNtbkThunk(notebookId));
    //     }
    //     else {
    //         newIndex.splice(newIndex.indexOf(index), 1);
    //         setActiveIndex(newIndex);
    //     }
    // };

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

    useEffect(() => {
        dispatch(getAllNtbksThunk())
    }, [myNotes])

    return (
        // <h1>notebooks</h1>
        <div className='all-features-main' >
            <div className='feature-header'>
                <img src={nbHeader} alt='nb-header'/>
                <div className='create-button'>
                    <OpenModalButton
                        modalComponent={<CreateNotebookForm />}
                        buttonText='Create notebook'
                    />
                </div>
            </div>
            <div className='indiv-card-container'>
                {!myNotebooksArr.length
                    ? (<></>)

                    : (
                        <div className='card-content' >
                            <Slider {...settings} >
                                {myNotebooksArr.map (notebook => (
                                    <div className='indiv-card' key={notebook.id} onClick={() => handleSubmit(notebook.id)}>
                                        <h3>{notebook.name}</h3>
                                        <span>{notebook.updated_at}</span>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )
                }
            </div>

        </div>
        //         <div className="notebook-table" style={{ border: '1px solid black', borderRadius: '10px', width: 'fit-content' }}>
        //             <div className='create-new-ntbk' style={{ height: '18vh', display: 'flex', paddingTop: '2rem' }}>
        //                 <img src={headerPic} alt='header' style={{ height: '30vh', width: '15vw', marginTop: '0px', paddingRight: '6rem' }} />
        //                 <IconModal
        //                     modalComponent={<CreateNotebookForm />}
        //                     faIcon="fa-solid fa-book-medical"

        //                 />
        //             </div>
        //             {!myNotebooksArr.length
        //                 ? (
        //                     <div>
        //                         <img src={notebookFiller} alt='img' style={{
        //                             height: '16rem',
        //                             width: 'auto',
        //                             marginTop:'-6rem'}} />
        //                     </div>
        //                 )
        //                 : (
        //                     <table style={{ marginTop: '-4rem' }}>
        //                         <thead>
        //                             <tr>
        //                                 <th></th>
        //                                 <th></th>
        //                                 <th>TITLE</th>
        //                                 <th>CREATED BY</th>
        //                                 <th>UPDATED </th>
        //                                 <th>ACTIONS</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {myNotebooksArr.map((notebook, index) => (
        //                                 <React.Fragment key={notebook.id}>
        //                                     <tr>
        //                                         <td onClick={() => toggle(index, notebook.id)} style={{ cursor: "pointer" }}>
        //                                             {activeIndex.includes(index) ?
        //                                                 <i className="fa-solid fa-angles-down"></i>
        //                                                 : <i className="fa-solid fa-angles-right"></i>}
        //                                         </td>
        //                                         <td>
        //                                             <i className="fa-solid fa-book-bookmark">{notebook.title}</i>
        //                                         </td>

        //                                         <td>{notebook.name}</td>
        //                                         <td>{user.username}</td>
        //                                         <td>{notebook.updated_at}</td>
        //                                         <td style={{ display: 'flex', justifyContent: 'space-around' }}>
        //                                             <OpenModalButton
        //                                                 modalComponent={<EditNotebookForm myNotebook={notebook} />}
        //                                                 faIcon={<i className="fa-regular fa-pen-to-square" style={{ cursor: "pointer" }} />}
        //                                                 tr={true}

        //                                             />
        //                                             <OpenModalButton
        //                                                 modalComponent={<DeleteNotebookForm myNotebook={notebook} />}
        //                                                 faIcon={<i className="fa-regular fa-trash-can" style={{ cursor: "pointer" }} />}
        //                                                 tr={true}

        //                                             />
        //                                         </td>
        //                                     </tr>
        //                                     {activeIndex.includes(index) &&

        //                                         <tr>
        //                                             <td colSpan={4}>
        //                                                 <table>
        //                                                     <tbody>
        //                                                         {notebook.notes?.map((note) => (
        //                                                             <tr key={note.id}>
        //                                                                 <td onClick={() => history.push(`/notes/${note.id}`)} style={{ cursor: 'pointer' }}>
        //                                                                     {note.title}
        //                                                                 </td>
        //                                                                 <td>{note.updated_at}</td>
        //                                                             </tr>
        //                                                         ))}
        //                                                     </tbody>
        //                                                 </table>
        //                                             </td>
        //                                         </tr>
        //                                     }
        //                                 </React.Fragment>
        //                             ))}
        //                         </tbody>
        //                     </table>
        //                 )
        //             }

        //         </div >
    );
}
