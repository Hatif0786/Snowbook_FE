import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import noteContext from '../context/Note/noteContext';
import '../components/css/Note.css';
import Noteitem from './Noteitem';

function Note() {
  const { notes } = useContext(noteContext);

  const numColumns = { xs: 6, sm: 4, md: 3 }; // Define number of columns for different screen sizes

  return (
    <>
    <h1 className='my-3 text-center'><b>Your Notes</b></h1>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-3'>
      
      {notes.map((n, index) => (
        <div key={n._id} className={`col-${numColumns.xs} col-sm-${numColumns.sm} col-md-${numColumns.md}`}>
          <Noteitem note={n} />
        </div>
      ))}
      {/* Conditionally render the plus icon */}
      {notes.length % numColumns.md >= 0 && (
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
