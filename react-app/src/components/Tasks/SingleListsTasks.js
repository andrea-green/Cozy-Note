// renders all of the tasks that belong to a list .
//import this into single list details.

import {useSelector,useDispatch} from 'react-redux'
import {useHistory, useParams} from "react-router-dom"
import {getTaskThunk} from '../../store/index'
import {EditTaskContent } from '../Tasks/EditTaskContent'


export default function SingleListsTasks(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {taskId} = useParams();


    const handleSubmit = (taskId) => {
        dispatch(getTaskThunk(taskId))
        history.push(`/tasks/${taskId}`)
    }

    const myList = useSelector(state => state.lists.singleList)
    const myListTasks = useSeletctor(state => state.tasks.allTasks.byId);
    const myListTasksArr = Object.values(myListTasks).filter(task=> task.list_id === myList.id);

    return (
        <div>
            <div className='lists-tasks'>
                {myListTasksArr.map((task)=> (
                    <div className='single-task-container'>
                        <input
                            type='checkbox'
                            style={{cursor:'pointer'}}
                        />
                        <EditTaskContent />
                    </div>
                ))}

            </div>
        </div>
    )
}
