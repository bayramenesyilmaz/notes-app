import React, { useState } from 'react'
import { nanoid } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"
import { toggleColor, addNote } from "../redux/todos/todosSlice"

function TextArea() {
    const colors = useSelector(state => state.todos.colors)
    const selectedColor = useSelector(state => state.todos.selectedColor)
    const dispatch = useDispatch();

    const [note, setNote] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

        if (note === "") {
            return alert("Not giriniz!")

        } else if (selectedColor === null) {
            return alert("Renk seçimi yapınız!")
        }

        dispatch(addNote({ id: nanoid(), note, color: selectedColor }))

        setNote("")
    }

    return (
        <form className='textBox' onSubmit={handleSubmit}>

            <textarea placeholder='Enter your note here...' value={note} onChange={e => setNote(e.target.value)} />

            <div className='textBox-bottom'>
                <div className='colorbox'>
                    {
                        colors.map(color => {

                            return <button
                                type='button'
                                key={color.id}
                                className='color'
                                style={{ backgroundColor: color.name }}
                                onClick={() => dispatch(toggleColor(color.name))}
                            >
                                {
                                    color.name === selectedColor && <i style={{ color: "white" }} className="fa-solid fa-check"></i>
                                }
                            </button>
                        })
                    }
                </div>

                <button type='submit' className='addbutton'>ADD</button>
            </div>
        </form>
    )
}

export default TextArea