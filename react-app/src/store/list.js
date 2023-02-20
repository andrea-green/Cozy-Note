const GET_ALL_LISTS = "lists/GET_ALL_LISTS";
const GET_SINGLE_LIST = "lists/GET_SINGLE_LIST";


// action creators
const getAllListsAc = (lists) => ({
    type: GET_ALL_LISTS,
    payload: lists
});

const getSingleListAc = (list) =>({
    type:GET_SINGLE_LIST,
    payload:list
});



// thunks
export const getAllListsThunk = () => async (dispatch) => {
    const res = await fetch('/api/lists', {
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

export const getSingleListThunk = () => async(dispatch) => {
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
            
        default:
            return state;
    }
}
