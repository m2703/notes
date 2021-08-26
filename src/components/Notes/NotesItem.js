import React from 'react';
import './NotesItem.css'
import NoteCard from './NoteCard';

const NotesItem = (props)=>

{
   return (
   <div className = "notes-item">
       {props.notes.map(notesCont =>
       (
           <NoteCard
            title = {notesCont.title}
            content = {notesCont.content}
           />
       ))}
   </div>

           
      




   );
}

export default NotesItem;