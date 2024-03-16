import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import noteContext from '../context/Note/noteContext';
import svgImage from '../snowSvg.svg'; // Import your SVG image

const Noteitem = (props) => {
   const context = useContext(noteContext)
   const {deleteNote} = context;
   const { note } = props;

   const tagStyle = {
    backgroundColor: note.tag === "Confidential" ? "red" : (note.tag === "Personal" ? "#DECD34" : "#1389eb"),
   }

   const dltNote = () => {
    deleteNote(note._id)
   }

   const editNote = () => {
    editNote(note._id, note)
   }

  return (
    <div className='col-md-3 my-4'>
        <div className="card">
        <img src={svgImage} alt='' />
        <div className="card__content">
            <p className="card__title" style={{marginBottom: "5px"}}>{note.title}</p>
            <span className="tag" style={tagStyle}>{note.tag}</span>
            <p className="card__description">{note.description}</p>
            <div className="trash-icon trash-icon-left">
                <FontAwesomeIcon style={{"cursor":"pointer", "fontSize":"25px"}} icon={faTrashCan} onClick={dltNote} />
            </div>
            <div className="trash-icon trash-icon-right">
                <FontAwesomeIcon style={{"cursor":"pointer", "fontSize":"25px"}} icon={faPenToSquare} onClick={editNote} />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Noteitem;
