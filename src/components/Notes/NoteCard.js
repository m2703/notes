import React from 'react';
import './NoteCard.css'
const NoteCard = (props) =>
{

    return (<div>
        <div className = "notes-item__card">
         <div className = "notes-item__title">{props.title}</div>

         <div className = "notes-item__content">
           <p>{props.content}</p>
         </div>

         </div>
    </div>)
    
}

export default NoteCard;