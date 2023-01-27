
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES';
const GET_NOTE = 'notes/GET_NOTE';
const ADD_NOTE = 'notes/ADD_NOTE';
const EDIT_NOTE = 'notes/EDIT_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';




// action creators
const getAllNotesAc = (notes) => ({
    type: GET_ALL_NOTES,
    payload: notes
});

const getNoteAc= (note) => ({
    type: GET_NOTE,
    payload: note
});

const addNoteAc = (note) => ({
    type: ADD_NOTE,
    payload: note
});

const editNoteAc = (note) => ({
    type: EDIT_NOTE,
    payload: note
});

const deleteNoteAc = (noteId) => ({
    type: DELETE_NOTE,
    payload: noteId
});





// thunks
export const getAllNotesThunk = (noteId) => async (dispatch) => {
    const response = await fetch(`/api/notes/${noteId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllNotesAc(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getNoteThunk = (noteId) => async (dispatch) => {
    const response = await fetch(`/api/notes/${noteId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(getNoteAc(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const addNoteThunk = (note) => async (dispatch) => {
    const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addNoteAc(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}

export const editNoteThunk = (noteId, updatedNote) => async (dispatch) => {
    async (dispatch) =>{
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(editNoteAc(data));
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ['An error occurred. Please try again.']
        }
    }
};

export const deleteNoteThunk = (noteId) => async (dispatch) => {
    async (dispatch) =>{
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(deleteNoteAc(data));
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ['An error occurred. Please try again.']
        }
    }
};





// reducer
const initialState = {
    allNotes: {
        byId: {},
        allIds: [],
    }
}

export default function noteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NOTES:
            const newState = {};
            action.payload.forEach(note => {
                newState[note.id] = note;
            });
            return {
                ...state,
                allNotes: {
                    byId: newState,
                    allIds: action.payload.map(note => note.id),
                },
            };
        case GET_NOTE:
            const note = action.payload;
            return{
                ...state,
                allNotes: note
            };
        case ADD_NOTE:
            const newNote = action.payload;
            const newNoteState = {
                ...state,
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: [...state.allNotes.allIds, newNote.id],
                },
            };
            newNoteState.allNotes.byId[newNote.id] = newNote;
            return newNoteState;
        case EDIT_NOTE:
            const editedNote = action.payload;
            const editedNoteState = {
                ...state,
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: [...state.allNotes.allIds,newNote.id],
                },
            };
            editedNoteState.allNotes.byId[editedNote.id] = editedNote;
            return editedNoteState;
        case DELETE_NOTE:
            const deletedNote = action.payload;
            const deletedNoteState = {
                ...state,
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: state.allNotes.allIds.filter(id => id !== deletedNote.id),
                },
            };
            delete deletedNoteState.allNotes.byId[deletedNote.id];
            return deletedNoteState;


        default:
            return state;
    }
};
