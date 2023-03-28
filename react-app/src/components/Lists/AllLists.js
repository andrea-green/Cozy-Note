// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { getAllListsThunk, getSingleListThunk } from "../../store/list";
// import CreateListForm from "./CreateListForm";
// import IconModal from "../IconModal/IconModal";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import listHeader from '../images/my-lists-graphic.svg';
// import listFiller from '../images/list-filler.gif'

// //set up icon  modal for create list form

// export default function AllLists() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const myLists = useSelector(state => state.lists.allLists.byId);
//     const myListsArr = Object.values(myLists);



//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className='next-arrow' onClick={onClick}>
//                 <i className="fa-regular fa-circle-right"></i>
//             </div>
//         )
//     }
//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className='prev-arrow' onClick={onClick}>
//                 <i className="fa-regular fa-circle-left"></i>
//             </div>
//         )
//     }
//     const settings = {
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,

//     };

//     useEffect(() => {
//         dispatch(getAllListsThunk())
//     }, [dispatch])


//     const handleSubmit = async (listId) => {
//         await dispatch(getSingleListThunk(listId))
//         history.push(`/lists/${listId}`)
//     }

//     useEffect(() => {

//     }, [myLists])



//     return (
//         <div className='all-lists-main-container'>
//             <div className='my-to-do-header'>
//                 <img src={listHeader} alt='header' style={{ height: '18vh', width: '10vw', marginTop: '0px', paddingRight: '1rem', marginBottom: '-1rem' }} />
//                 <div>
//                     <IconModal
//                         modalComponent={<CreateListForm />}
//                         faIcon="fa-solid fa-book-medical"
//                     />
//                 </div>
//             </div>
//             {!myListsArr.length
//                 ? (
//                     <div>
//                         <img src={listFiller} alt='image' style={{
//                             height: 'auto',
//                             width: '100%',
//                             marginTop: '-2rem'
//                         }} />
//                     </div>
//                 )

//                 : (
//                             <div className='list-content'>
//                                 <Slider {...settings} >
//                                     {myListsArr.map((list) => (
//                                         <div
//                                             className='list-card'
//                                             key={list.id}
//                                             onClick={() => handleSubmit(list.id)}
//                                         >
//                                             <div style={{ cursor: 'pointer' }}>
//                                                 <h3>{list.title}</h3>
//                                             </div>
//                                             <div>
//                                                 <span>{list.created_at}</span>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </Slider>
//                             </div>
//                 )}
//         </div>
//     );
// }
