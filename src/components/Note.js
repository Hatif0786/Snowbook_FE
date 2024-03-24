import React, { useContext, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../context/Note/noteContext';
import '../components/css/Note.css';
import Noteitem from './Noteitem';

function Note() {
  const { notes, editNote } = useContext(noteContext);
  const navigate = useNavigate()
  const ref = useRef(null);
  const [editnote, setEditNote] = useState({_id:"", title:"",description:""});
  const updateNoteModal = (note) => {
    setEditNote({_id: note._id, title: note.title, description: note.description})
    ref.current.click();
  };

  const updateNote = (note) => {
    const n = {title: editnote.title, description: editnote.description}
    editNote(note._id, n).then((res)=> {
      if(res && res._id){
        setEditNote({_id:"",title:"",description:""})
        ref.current.click()
        navigate("/notes")
      }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };



  const numColumns = { xs: 6, sm: 4, md: 3 }; // Define number of columns for different screen sizes

  return (
    <>
      <button style={{display:"none"}}  type="button" className="btn btn-primary" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
       Modal launching button
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width: "900px", marginLeft: "37%", marginTop:"15%"}}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content " >
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" >
              <form className='form' style={{width: "400px"}}>
                  <label htmlFor="title" className="label">
                  <span className="title">Note Title</span>
                  <input
                    className="input-field"
                    type="text"
                    id="title"
                    name="title"
                    value={editnote.title}
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
                  value={editnote.description}
                  placeholder="Enter the note description"
                  onChange={handleChange}
                />
              </label>
              </form>
            </div>
            <div className="modal-footer">
              <input className="checkout-btn" style={{alignItems:'center', justifyContent:'center', borderRadius:"40px"}} type="button" onClick={() => updateNote(editnote)} value="Edit Note" />
            </div>
          </div>
        </div>
      </div>


      <h1 className='my-3 text-center'><b>Your Notes</b></h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-3'>
        {notes.map((n, index) => (
          <div key={n._id} className={`col-${numColumns.xs} col-sm-${numColumns.sm} col-md-${numColumns.md}`}>
            <Noteitem note={n} updateNoteModal={updateNoteModal}/>
          </div>
        ))}
        {/* Conditionally render the plus icon */}
        {notes.length % numColumns.sm >= 0 && (
          <div className={`col-${numColumns.xs} col-sm-${numColumns.sm} col-md-${numColumns.md}`}>
            <div className="plus-icon">
              <Link to="/" className="button-link">
                <img src={require("./../plus.png")} style={{}} alt="Plus Icon" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Note;
