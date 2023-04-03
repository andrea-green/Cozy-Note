import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllListsThunk, getSingleListThunk } from "../../store/list";
import OpenModalButton from '../OpenModalButton';
import CreateListForm from "./CreateListForm";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listHeader from '../graphics/header6.png';


//set up icon  modal for create list form

export default function AllLists() {
    const dispatch = useDispatch();
    const history = useHistory();
    const myLists = useSelector(state => state.lists.allLists.byId);
    const myListsArr = Object.values(myLists);



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
        dispatch(getAllListsThunk())
    }, [dispatch])


    const handleSubmit = async (listId) => {
        await dispatch(getSingleListThunk(listId))
        history.push(`/lists/${listId}`)
    }

    useEffect(() => {

    }, [myLists])



    return (
        // <h1>lists</h1>
        <div className='all-features-main'>
            <div className='feature-header'>
                <img src={listHeader} alt='list-header' />
                <div className='create-button'>
                    <OpenModalButton
                        modalComponent={<CreateListForm />}
                        buttonText='Create list'

                    />
                </div>
            </div>

            <div className='indiv-card-container'>
                {!myListsArr.length
                    ?(<></>)

                    :(
                        <div className='card-content'>
                            <Slider {...settings} >
                                {myListsArr.map(list => (
                                    <div className='indiv-card' key={list.id}  onClick={() => handleSubmit(list.id)} >
                                        <h3>{list.title}</h3>
                                        <span>{list.created_aat}</span>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )

                }


            </div>
        </div>
    );
}
