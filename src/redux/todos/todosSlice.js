import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        colors: [
            {
                id: "#20c997",
                name: "#20c997",
                selected: false
            },
            {
                id: "#198754",
                name: "#198754",
                selected: false
            },
            {
                id: "#ffc107",
                name: "#ffc107",
                selected: false
            },
            {
                id: "#6f42c1",
                name: "#6f42c1",
                selected: false
            },
            {
                id: "#0d6efd",
                name: "#0d6efd",
                selected: false
            }
        ],
        notes: [
            {
                id: 1,
                note: "React kursu izle",
                color: "#20c997"
            },
            {
                id: 2,
                note: "Redux ödevini tamamla",
                color: "#ffc107"
            }
        ],
        filteredNotes: [],
        selectedColor: null
    },
    reducers: {
        toggleColor: (state, action) => {
            state.selectedColor = action.payload
        },
        addNote: (state, action) => {
            state.notes.push(action.payload)
            state.selectedColor = null
            state.filteredNotes = state.notes
        },
        deleteNote: (state, action) => {
            const newList = state.filteredNotes.filter(note => note.id !== action.payload)
            state.filteredNotes = newList
        },
        searchNotes: (state, action) => {

            if (!action.payload) {
                state.filteredNotes = state.notes
            }
            state.filteredNotes = state.notes.filter(prevnote => prevnote.note.toLowerCase().includes(action.payload.toLowerCase()) && prevnote)

        }
    }
})

export const { toggleColor, addNote, deleteNote, searchNotes } = todosSlice.actions
export default todosSlice.reducer;