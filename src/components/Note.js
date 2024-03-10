import React, {useContext} from 'react'
import noteContext from '../context/Note/noteContext'
import "../components/css/Note.css"
import Noteitem from './Noteitem'
function Note() {

  const {note, setNote} = useContext(noteContext) 
  return (
    <div className='row my-3'>
          <h1 className='my-3 text-center'><b>Your Notes</b></h1>
          {note.map((n) => {
            return <Noteitem key={n._id} note={n}/>
          })}
      </div>
  )
}

export default Note