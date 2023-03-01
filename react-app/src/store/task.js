
const GET_ALL_TASKS='tasks/GET_ALL_TASKS';
const GET_TASK = 'tasks/GET_TASK';





//action creators
const getAllTasksAc=(tasks) =>({
    type:GET_ALL_TASKS,
    payload:tasks
});

const getTaskAc = (task) => ({
    type:GET_TASK,
    payload:task
})



// thunks

export const getAllTasksThunk = () => async(dispatch) =>{
    const response = await fetch(`/api/lists`,{
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
    const response = await fetch(`api/lists/${taskId}`,{
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




// reducer

const initialState = {
    allTasks:{
        byId: {},
        allids: [],
    },
    singleTask: {}
}

export default function taskReducer(){
    switch (action.type) {
        case GET_ALL_TASKS:
            const newState = {};
            action.payload.forEach(note => {
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
        default:
            return state;
    }
};
