import React from 'react';
import './NotesInput.css'
import NotesForm from './NotesForm';
const NotesInput = (props) =>
{
   const onSaveNotesHandeler = (enteredNotes) =>
   {
       const notesData = 
       {
           ...enteredNotes,
           id:Math.random().toString()
           
       }
       console.log("this is from NotesInput.js")
       console.log(notesData);
       props.onAddNotes(notesData)
   }


  return (<div className = "notes-input">

          <h1>Add Your Notes Here</h1>
          <NotesForm saveNotesData = {onSaveNotesHandeler}/>
         
      
  </div>)
  

}

export default NotesInput;