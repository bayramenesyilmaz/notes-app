import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { searchNotes } from "../redux/todos/todosSlice"

function Form() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searchNotes(search))
  }, [search])

  function handleSearch(e) {
    setSearch(e.target.value)
  }


  return (
    <form >
      <input
        className='search'
        type="text"
        placeholder='Search...'
        value={search}
        onChange={handleSearch}
      />
    </form>
  )
}

export default Form