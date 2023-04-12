
const GET_ALL_NTBKS = 'notebook/GET_ALL_NTBKS';
const GET_NTBK = 'notebook/GET_NTBK';
const ADD_NTBK = 'notebook/ADD_NTBK';
const EDIT_NTBK = 'notebook/EDIT_NTBK';
const DELETE_NTBK = 'notebook/DELETE_NTBK';



// action creators
const getAllNtbksAc = (notebooks) => ({
    type: GET_ALL_NTBKS,
    payload: notebooks
});

const getNtbkAc = (notebook) => ({
    type: GET_NTBK,
    payload: notebook
});

const addNtbkAc = (notebook) => ({
    type: ADD_NTBK,
    payload: notebook
});

const editNtbkAc = (notebook) => ({
    type: EDIT_NTBK,
    payload: notebook
});

const deleteNtbkAc = (notebookId) => ({
    type: DELETE_NTBK,
    payload: notebookId
});



// thunks
export const getAllNtbksThunk = () => async (dispatch) => {
    const res = await fetch('/api/notebooks/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const notebooks = await res.json();
        dispatch(getAllNtbksAc(notebooks.Notebooks));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getNtbkThunk = (notebookId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebookId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const notebook = await res.json();
        dispatch(getNtbkAc(notebook.Notebook));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const addNtbkThunk = (notebook) => async (dispatch) => {
    const res = await fetch('/api/notebooks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notebook)
    });
    if (res.ok) {
        const notebook = await res.json();
        dispatch(addNtbkAc(notebook));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return res;
    }
};


export const editNtbkThunk = (notebkId, updatedNtbk) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebkId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNtbk)
    });
    if (res.ok) {
        const notebook = await res.json();
        dispatch(editNtbkAc(notebook));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteNtbkThunk = (notebookId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebookId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        // const notebook = await res.json();
        dispatch(deleteNtbkAc(notebookId));
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

// reducer
const initialState = {
    allNotebooks: {
        byId: {},
        allIds: [],
    },
    singleNtbk: {
        allNotes: {},
        singleNote: {},
        details:{}
    }
};

export default function ntbkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NTBKS:
            const newState = {};
            action.payload.forEach(notebook => {
                newState[notebook.id] = notebook;
            });
            return {
                ...state,
                allNotebooks: {
                    byId: newState,
                    allIds: action.payload.map(notebook => notebook.id)
                }
            };

        case GET_NTBK: {
            const ntbk = action.payload;
            const newState = {
                ...state,
                singleNtbk: {
                    allNotes: {},
                    singleNote: {},
                    details:ntbk
                }
            };
            ntbk.notes.forEach((note, idx) => {
                if (idx === 0) {
                    newState.singleNtbk.singleNote = note
                }
                newState.singleNtbk.allNotes[note.id] = note
            })

            return newState;
        }

        case ADD_NTBK:
            const newNtbk = action.payload;
            const newNtbkState = {
                allNotebooks: {
                    byId: { ...state.allNotebooks.byId },
                    allIds: [...state.allNotebooks.allIds, newNtbk.id]
                },
                singleNtbk: {
                    allNotes:{},
                    singleNote:{},
                    details:newNtbk
                }
            };
            newNtbkState.allNotebooks.byId[newNtbk.id] = newNtbk;
            newNtbk.notes.forEach((note, idx) => {
                if (idx === 0) {
                    newState.singleNtbk.singleNote = note
                }
                newState.singleNtbk.allNotes[note.id] = note
            })
            return newNtbkState;

        case EDIT_NTBK:
            const updatedNtbk = action.payload;
            const updatedNtbkState = {
                allNotebooks: {
                    byId: { ...state.allNotebooks.byId },
                    allIds: [...state.allNotebooks.allIds]
                },
                singleNtbk: {
                    allNotes:{...state.singleNtbk.allNotes},
                    singleNote:{...state.singleNtbk.singleNote},
                    details:updatedNtbk
                }
            };

            updatedNtbkState.allNotebooks.byId[updatedNtbk.id] = updatedNtbk;

            return updatedNtbkState;

        case DELETE_NTBK:
            const deletedNtbkId = action.payload;
            const deletedNtbkState = {
                allNotebooks: {
                    byId: { ...state.allNotebooks.byId },
                    allIds: state.allNotebooks.allIds.filter(id => id !== deletedNtbkId)
                },
                singleNtbk: {
                    allNotes:{},
                    singleNote:{},
                    details:{}
                }
            };
            delete deletedNtbkState.allNotebooks.byId[deletedNtbkId];
            return deletedNtbkState;
        default:
            return state;
    }
}
