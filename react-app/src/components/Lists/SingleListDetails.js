import React, { useEffect,useState } from "react";
// import all the tasks belonging to the specific list.
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleListThunk } from "../../store/list";
import { getTaskThunk } from "../../store/task";
//also need to import thunk to grab all of the tasks of a list.

export default function SingleListDetails(){
    const myList = useSelector(state=>state.lists.singleList)
    const myListArr = Object.values(myList);
    const dispatch = useDispatch();
    const {listId} = useParams();


     const myTasks = useSelector(state => state.tasks.allTasks.byId)
     const myTasksArr = Object.values(myTasks)
     const listTasks = myTasksArr.filter(task=> task.list_id == myListArr?.id)


    useEffect(()=>{
        dispatch(getSingleListThunk(listId))
    },[dispatch,listId]);


    return (
        <div className='single-list-details-main'>
            <div className='single-list-details-header'>
                <h1>{myList.title}</h1>
            </div>
            <div className='single-list-tasks'>
                

            </div>
        </div>
    );
}
