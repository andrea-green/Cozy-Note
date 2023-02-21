const GET_ALL_LISTS = "lists/GET_ALL_LISTS";
const GET_SINGLE_LIST = "lists/GET_SINGLE_LIST";
const CREATE_LIST = "lists/CREATE_LIST";

// action creators
const getAllListsAc = (lists) => ({
    type: GET_ALL_LISTS,
    payload: lists
});

const getSingleListAc = (list) =>({
    type:GET_SINGLE_LIST,
    payload:list
});

const createListAc = (list) => ({
    type:CREATE_LIST,
    pyaload:list
});


// thunks
export const getAllListsThunk = () => async (dispatch) => {
    const res = await fetch('/api/lists/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const lists = await res.json();
        dispatch(getAllListsAc(lists.Lists));
    } else if (res.status < 500) {
        const data = await res.json();
        if(data.errors){
            return data.errors;
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

export const getSingleListThunk = (listId) => async(dispatch) => {
    const res = await fetch(`api/lists/${listId}`, {
        headers:{
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const notebook = await res.json();
        dispatch(getSingleListAc(list.List));
    }else if (res.status < 500) {
        const data = await res.json();
        if(data.errors){
            return data.errors;
        }
    } else {
        return ['An error occurred.Please try again.']
    }
}

export const addListThunk = (list) => async(dispatch) =>{
    const res = await fetch('/api/lists/',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    });
    if (res.ok){
        const list = await res.json();
        dispatch(createListAc(list));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors){
            return data.errors;
        }
    } else {
        return res;
    }
}


// reducer
const initialState = {
    allLists: {
        byId: {},
        allIds: [],
    },
    singleList: {}
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_LISTS:
            const newState={};
            action.payload.forEach(list=>{
                newState[list.id]=list;
            });
            return {
                ...state,
                allLists:{
                    byId: newState,
                    allIds:action.payload.map(list=>list.id)
                }
            };
        case GET_LIST:
            const list = action.payload;
            return {
                ...state,
                singleList:list
            };
        case CREATE_LIST:
            const newList = action.payload;
            const newListState = {
                allLists:{
                    byId: {...state.allLists.byId},
                    allIds:[...state.allLists.allIds,newList.id]
                },
                singleList: newList
            };
            newListState.allLists.byId[newList.id]= newList;
            return newListState;

            
        default:
            return state;
    }
}
