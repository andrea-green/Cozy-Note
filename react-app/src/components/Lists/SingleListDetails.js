import React, { useEffect } from "react";
// import all the tasks belonging to the specific list.
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleListThunk } from "../../store/list";
import { getTaskThunk } from "../../store/task";
//also need to import thunk to grab all of the tasks of a list.

export default function SingleListDetails(){
    const myList = useSelector(state=>state.lists.singleList)
    const dispatch = useDispatch();
    const {listId} = useParams();


    useEffect(()=>{
        dispatch(getSingleListThunk(listId))
    },[dispatch,listId]);

    // have use effect for getting a taks thunk? do i even need this? questionable.


    return (
        <div className='single-list-details-main'>
            <div className='single-list-details-header'>
                <h1>{myList.title}</h1>
            </div>
            {/* <div className='single-list-tasks'>
                will import the tasks belonging to a single note component here.
            </div> */}
        </div>
    );
}
