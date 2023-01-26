
const GET_NOTES = 'notes/GET_NOTES';




// action creators
const getNotesAc = (notes) => ({
    type: GET_NOTES,
    payload: notes
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

        default:
            return state;
    }
};
