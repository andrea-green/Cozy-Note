const GET_ALL_TASKS='tasks/GET_ALL_TASKS';
const GET_TASK = 'tasks/GET_TASK';
const CREATE_TASK = 'tasks/CREATE_TASK';
const EDIT_TASK = 'tasks/EDIT_TASK';
const DELETE_TASK = 'tasks/DELETE_TASK';

//action creators
const getAllTasksAc=(tasks) =>({
    type:GET_ALL_TASKS,
    payload:tasks
});

const getTaskAc = (task) => ({
    type:GET_TASK,
    payload:task
});

const createTaskAc = (task) => ({
    type:CREATE_TASK,
    payload:task
})

const editTaskAc = (task) => ({
    type:EDIT_TASK,
    payload:task
});

const deleteTaskAc = (taskId) => ({
    type:DELETE_TASK,
    payload:taskId
})



// thunks

export const getAllTasksThunk = (listId) => async(dispatch) =>{
    const response = await fetch(`/api/lists/${listId}/tasks`,{
        headers:{
            'Content-Type':'application/json'
        }
    });

    if (response.ok){
        const data = await response.json();
        dispatch(getAllTasksAc(data.Tasks));
    }else if (response.status <500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred.Please try again.']
    }
};


export const getTaskThunk = (taskId) => async(dispatch) =>{
    const response = await fetch(`api/tasks/${taskId}`,{
        headers:{
            'Content-Type':'application/json'
        }
    });

    if (response.ok){
        const data = await response.json();
        dispatch(getTaskAc(data.Task));
    }else if (response.status < 500) {
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
    }else {
        return ['An error occurred.Please try again.']
    }
}

export const createTaskThunk = (task) => async(dispatch)=>{
    const response = await fetch (`/api/tasks/`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    if (response.ok){
        const data = await response.json();
        dispatch(createTaskAc(data));
        return data
    } else if (response.status < 500 ){
        const data = await response.json();
        if(data.errors){
            return data.errors;
        }
    } else {
        return response
    }
}

export const editTaskThunk = (taskId, updatedTask) =>async (dispatch) => {
    const response = await fetch (`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(updatedTask)
    });
    if (response.ok){
        const data = await response.json();
        dispatch(editTaskAc(data));
    }else if ( response.status < 500 ) {
        const data = await response.json();
        if (data.errors){
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteTaskThunk = (taskId) => async (dispatch) =>{
    const response = await fetch (`/api/tasks/${taskId}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.ok) {
        dispatch(deleteTaskAc(taskId));
    } else if (response.status < 500){
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    }else {
        return ['An error occurred.Please try again.']
    }
};




// reducer

const initialState = {
    allTasks:{
        byId: {},
        allids: [],
    },
    singleTask: {}
}

export default function taskReducer(state=initialState,action){
    switch (action.type) {
        case GET_ALL_TASKS:
            const newState = {};
            action.payload.forEach(task => {
                newState[task.id] = task;
            });
            return {
                ...state,
                allTasks:{
                    byId:newState,
                    allIds:action.payload.map(task=>task.id),
                },
            };

        case GET_TASK:
            const task = action.payload;
            return {
                ...state,
                singleTask:task
            };

        case CREATE_TASK:
            const newTask = action.payload;
            const newTaskState = {
                allTasks:{
                    byId:{...state.allTasks.byId},
                    allIds:[...state.allTasks.allIds,newTask.id],
                },
                singleTask:newTask
            };
            newTaskState.allTasks.byId[newTask.id]=newTask;
            return newTaskState;

        case EDIT_TASK:
            const editedTask = action.payload;
            const editedTaskState = {
                allTasks:{
                    byId: {...state.allTasks.byId},
                    allIds: [...state.allTasks.allIds],
                },
                singleTask:editedTask
            };
            editedTaskState.allTasks.byId[editedTask.id] = editedTask;
            return editedTaskState;

        case DELETE_TASK:
            const deletedTaskId = action.payload;
            const deletedTaskState = {
                allTasks : {
                    byId : {...state.allTasks.byId},
                    allIds: state. allTasks.allIds.filter(id => id !== deletedTaskId),
                },
                singleTask:{}
            };
            delete deletedTaskState.allTasks.byId[deletedTaskId];
            return deletedTaskState;

        default:
            return state;
    }
};
