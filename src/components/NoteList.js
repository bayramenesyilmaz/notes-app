import { useDispatch, useSelector } from "react-redux"
import { deleteNote } from "../redux/todos/todosSlice"


function NoteList() {
  const filteredNotes = useSelector(state => state.todos.filteredNotes)
  const dispatch = useDispatch()

  function handleDelete(id) {
    dispatch(deleteNote(id))
  }


  return (
    <div className="notelist">

      {
        filteredNotes.map(note => {

          return <div key={note.id} className='note' style={{ backgroundColor: note.color }}>
            <i className="fa-solid fa-trash-can" onClick={() => handleDelete(note.id)}></i>
            <p>{note.note}</p>
          </div>

        })
      }

    </div>

  )
}

export default NoteList