// renders all of the tasks that belong to a list .
//import this into single list details.

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from "react-router-dom"
import { getAllTasksThunk, getTaskThunk } from '../../store/task'
import IconModal from '../IconModal/IconModal';
import EditTask from './EditTaskContent';
import DeleteTaskForm from './DeleteTaskForm';


export default function SingleListsTasks() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { taskId, listId } = useParams();


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
                    <div style={{ display: 'flex', flexDirection: 'row' }} key={task.id}>
                        <div className='single-task-container'>
                            <EditTask task={task} />
                        </div>
                        <div style={{marginTop:'2rem',marginLeft:'1rem'}}>
                            <IconModal
                                modalComponent={<DeleteTaskForm task={task} />}
                                faIcon="fa-solid fa-trash-can"
                            />
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
