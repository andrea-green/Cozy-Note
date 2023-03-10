import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getTaskThunk, getAllTasksThunk} from '../../store/task'
import OpenModalButton from '../OpenModalButton';
import {useModal} from '../../context/Modal'; 


export default function AllTasks(){
    const dispatch = useDispatch();
    const history = useDispatch

    const handleSubmit = async(taskId) => {
        await dispatch(getTaskThunk(taskId))
        history.push(`/tasks/${taskId}`)
    }
    useEffect(()=>{
        dispatch(getAllTasksThunk())
    },[dispatch])


    const myTasks = useSelector((state) => state.tasks.allTasks.byId);
    const tasksArr = Object.values(myTasks);


    useEffect(()=>{},[myTasks])

    return null;
}
