// renders all of the tasks that belong to a list .
//import this into single list details.

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from "react-router-dom"
import { getAllTasksThunk, getTaskThunk } from '../../store/task'
import EditTask from './EditTaskContent';


export default function SingleListsTasks() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { taskId} = useParams();


    const handleSubmit = (taskId) => {
        dispatch(getTaskThunk(taskId))
        history.push(`/tasks/${taskId}`)
    }


    const myListTasks = useSelector(state => state.tasks.allTasks.byId);
    const myListTasksArr = Object.values(myListTasks)

    return (
        <div>
            <div className='lists-tasks'>
                {myListTasksArr.map((task) => (
                    <div className='single-task-container' key={task.id}>
                        <EditTask task={task} />
                    </div>
                ))}

            </div>
        </div>
    )
}
