
const GET_NOTES = 'notes/GET_NOTES';
const ADD_NOTE = 'notes/ADD_NOTE';
const EDIT_NOTE = 'notes/EDIT_NOTE';




// action creators
const getNotesAc = (notes) => ({
    type: GET_NOTES,
    payload: notes
});

const addNoteAc = (note) => ({
    type: ADD_NOTE,
    payload: note
});

const editNoteAc = (note) => ({
    type: EDIT_NOTE,
    payload: note
});




// thunks
export const getNotesThunk = (noteId) => async (dispatch) => {
    const response = await fetch(`/api/notes/${noteId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(getNotesAc(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

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





// reducer
const initialState = {
    allNotes: {
        byId: {},
        allIds: [],
    }
}

export default function noteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
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

        default:
            return state;
    }
};
