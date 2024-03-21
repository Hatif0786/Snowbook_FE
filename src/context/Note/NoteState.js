import React, { useContext } from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
import userContext from '../User/userContext';


const NoteState = (props) => {
      const [notes, setNotes] = useState([])
      const context = useContext(userContext)
      const {getToken} = context

      const addNote = async ({ title, description, tag }) => {
        try {
            const resp = await fetch("https://snowbook-be.onrender.com/api/note/add", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getToken()}`
                },
                body: JSON.stringify({ title, description, tag }) // Pass the data to be sent as JSON
            });
            if (resp.ok) { // Check if response is successful (status code in the range 200-299)
                const newNote = await resp.json();
                setNotes([...notes, newNote]);
            } else {
                console.error('Error adding note:', resp.status, resp.statusText);
            }
        } catch (error) {
            console.error('Error adding note:', error);
        }
    }
    
    

      const deleteNote = async (id) => {
        // Filter out the note with the given ID
        try {
          const resp = await fetch(`https://snowbook-be.onrender.com/api/note/delete/${id}`, {
              method: 'DELETE',
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${getToken()}`
              } // Pass the data to be sent as JSON
          });
          if (resp.ok) { // Check if response is successful (status code in the range 200-299)
              await resp.json().then(()=> {
                const updatedNotes = notes.filter(note => note._id !== id);
                // Set the state with the updated array of notes
                setNotes(updatedNotes);
            });
          } else {
              console.error('Error adding note:', resp.status, resp.statusText);
          }
          } catch (error) {
              console.error('Error adding note:', error);
          }
            
      }

      const editNote = async (id, n) => {
        try {
            const resp = await fetch(`https://snowbook-be.onrender.com/api/note/update/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getToken()}`
                }, body: JSON.stringify(n) // Pass the data to be sent as JSON
            });
            if (resp.ok) { // Check if response is successful (status code in the range 200-299)
                const updatedNote = await resp.json(); // Parse response JSON
                const updatedNotes = notes.map(note => (note._id === id ? updatedNote : note));
                setNotes(updatedNotes);
                return updatedNote;    
            } else if(resp.status === 500) {
                return await resp.json();
            }else {
                console.error('Error adding note:', resp.status, resp.statusText);
            }
            } catch (error) {
                console.error('Error adding note:', error);
            }
      }
    

      

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState