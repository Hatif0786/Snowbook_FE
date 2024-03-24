import React, { useContext, useState } from 'react'
import noteContext from '../context/Note/noteContext'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const context = useContext(noteContext)
  const {addNote} = context
  const navigate = useNavigate()
  const [note, setNote] = useState({title: "", description: "", tag:"General"})
  const [showAlert, setShowAlert] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note).then((resp) => {
      setShowAlert(true)
      setTimeout(()=>setShowAlert(false), 2000)
      navigate("/notes")
      setNote({title: "", description: "", tag:"General"})
      
    })
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };
  
  
  return (
    <div className='container'>
      <h1 className='my-4 text-center' ><b >Add a Note</b></h1>
      <main className='d-flex justify-content-center'>
        <section className="add-card page">
          <form className="form">
          <label htmlFor="title" className="label">
            <span className="title">Note Title</span>
            <input
              className="input-field"
              type="text"
              id="title"
              name="title"
              value={note.title}
              placeholder="Enter the note title"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description" className="label">
            <span className="title">Note Description</span>
            <input
              className="input-field"
              type="textarea"
              id="description"
              name="description"
              value={note.description}
              placeholder="Enter the note description"
              onChange={handleChange}
            />
          </label>
          <div className="split">
            <label htmlFor="tag" className="label">
              <span className="title">Tag</span>
              <select
                id="tag"
                className="input-field"
                value={note.tag}
                onChange={handleChange}
                name="tag"
              >
                <option value="General">General</option>
                <option value="Personal">Personal</option>
                <option value="Confidential">Confidential</option>
              </select>
            </label>
          </div>
            <input className="checkout-btn" type="button" onClick={handleClick} value="Add Note" />
          </form>
        </section>
      </main>

      <br />

      <section className="alert-section">
        {showAlert && (
          <div className="alert" style={{ backgroundColor: "#d17842", fontWeight: "bold", color: "black", borderRadius: "30px", width: "620px", border: "2px solid transparent", textAlign: "center" }} role="alert">
            Note Added!!
          </div>
        )}
      </section>

    </div>
  )
}

export default Home
