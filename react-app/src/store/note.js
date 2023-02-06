
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES';
const GET_NOTE = 'notes/GET_NOTE';
const ADD_NOTE = 'notes/ADD_NOTE';
const EDIT_NOTE = 'notes/EDIT_NOTE';
const DELETE_NOTE = 'notes/DELETE_NOTE';
// const ADD_NOTE_TO_NTBK = 'notebook/ADD_NOTE_TO_NTBK'




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

// const addNoteToNtbkAc = (note) => ({
//     type: ADD_NOTE_TO_NTBK,
//     payload:note
// })





// thunks
export const getAllNotesThunk = () => async (dispatch) => {
    const response = await fetch(`/api/notes/`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllNotesAc(data.Notes));
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
        dispatch(getNoteAc(data.Note));
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
    const response = await fetch('/api/notes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addNoteAc(data));
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return response
        // return ['An error occurred. Please try again.']
    }

}

export const editNoteThunk = (noteId, updatedNote) => async (dispatch) => {
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        });

        if (response.ok) {
            const data = await response.json();
            // dispatch(get)
            dispatch(editNoteAc(data));
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ['An error occurred. Please try again.']
        }
    };

export const deleteNoteThunk = (noteId) => async (dispatch) => {
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            // const data = await response.json();
            dispatch(deleteNoteAc(noteId));
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ['An error occurred. Please try again.']
        }
    };
// this is sketchy.
// export const addNoteToNtbkThunk = (notebookId,noteTitle,noteContent)=>async (dispatch)=>{
//     const res = await fetch('/api/notes/',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             notebook_id:notebookId,
//             title: noteTitle,
//             content:noteContent
//         })
//     });
//     if(res.ok){
//         const note = await res.json();;
//         dispatch(addNoteToNtbkAc(note));
//     } else if (res.status < 500) {
//         const data = await res.json();
//         if(data.errors) {
//             return data.errors;
//         }
//     } else {
//         return res;
//     }
// }





// reducer
const initialState = {
    allNotes: {
        byId: {},
        allIds: [],
    },
    singleNote: {}
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
                singleNote: note
            };
        case ADD_NOTE:
            const newNote = action.payload;
            const newNoteState = {
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: [...state.allNotes.allIds, newNote.id],
                },
                singleNote: newNote
            };
            newNoteState.allNotes.byId[newNote.id] = newNote;
            return newNoteState;

        // case ADD_NOTE_TO_NTBK:{
        //     const newNote = action.payload;
        //     const newNoteState = {
        //         allNotes:{
        //             byId: {...state.allNotes.byId},
        //             allIds: [...state.allNotes.allIds, newNote.id],
        //         },
        //         singleNote:newNote
        //     }
        // }


        case EDIT_NOTE:
            const editedNote = action.payload;
            const editedNoteState = {
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: [...state.allNotes.allIds],
                },
                singleNote: editedNote
            };
            editedNoteState.allNotes.byId[editedNote.id] = editedNote;
            return editedNoteState;

        case DELETE_NOTE:
            const deletedNoteId = action.payload;
            const deletedNoteState = {
                allNotes: {
                    byId: {...state.allNotes.byId},
                    allIds: state.allNotes.allIds.filter(id => id !== deletedNoteId),
                },
                singleNote: {}
            };
            delete deletedNoteState.allNotes.byId[deletedNoteId];
            return deletedNoteState;


        default:
            return state;
    }
};
