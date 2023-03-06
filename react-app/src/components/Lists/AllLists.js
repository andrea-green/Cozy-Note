import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllListsThunk, getSingleListThunk } from "../../store/list";
import CreateListForm from "./CreateListForm";
import IconModal from "../IconModal/IconModal";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//set up icon  modal for create list form

export default function AllLists() {
    const dispatch = useDispatch();
    const history = useHistory();
    const myLists = useSelector(state => state.lists.allLists.byId);
    const myListsArr = Object.values(myLists);

    const NextArrow = ({ onClick }) => {
        return (
            <div className='next-arrow' onClick={onClick}>
                <i class="fa-regular fa-circle-right"></i>
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='prev-arrow' onClick={onClick}>
                <i class="fa-regular fa-circle-left"></i>
            </div>
        )
    }
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // autoplay: true
    };

    useEffect(() => {
        dispatch(getAllListsThunk())
    }, [dispatch])

    const handleSubmit = (e, listId) => {
        e.preventDefault();
        dispatch(getSingleListThunk(listId))
            .then(() => { history.push(`/lists/${listId}`) })
    }


    return (
        <div className='all-lists-main-container'>
            <div className='my-to-do-header'>
                <h1>My Lists</h1>
                <div>
                    <IconModal
                        modalComponent={<CreateListForm />}
                        faIcon="fa-solid fa-book-medical"
                    />
                </div>
            </div>

            <div className='list-content'>
                <Slider {...settings} >
                    {myListsArr.map((list) => (
                        <div
                            className='list-card'
                            key={list.id}
                            onClick={() => handleSubmit(list.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div>
                                <h3>{list.title}</h3>
                            </div>
                            {/* <div>
                                <ul>
                                basically need to display my tasks associated w/ list here.
                                    <li>{task}</li>
                                </ul>
                            </div> */}
                            <div>
                                <span>{list.created_at}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
