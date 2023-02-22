import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getAllListsThunk } from "../../store/list";
import CreateListForm from "./CreateListForm";
//set up icon  modal for create list form



export default function AllLists(){
    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector((state)=>state.session.user);

    const myLists = useSelector((state)=>state.lists.byId);
    const myListsArr = Object.values(myLists);

    useEffect(()=>{
        dispatch(getAllListsThunk())
    },[myLists])

    return (
        <div className='all-lists-main-container'>
            <div className='my-to-do-header'>
                <h1>My Lists </h1>
            </div>
            <div className='create-list'>
                <CreateListForm />
            </div>
            <div className='list-content'>
                {myListsArr.map((list)=> (
                    <div className='list-card' key={list.id}
                        onClick={()=>handleSubmit(list.id)}
                        style={{cursor:'pointer'}}
                    >
                    <div>
                        <h3>{list.title}</h3>
                    </div>
                    <div>
                        <span>{list.created_at}</span>
                    </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
