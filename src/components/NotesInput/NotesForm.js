import React , {useState}from 'react';
import './NotesForm.css'

const NotesForm = (props)=>
{ 
    const[enteredTitle,setEnteredTitle]=useState('')
    const[enteredContent,setEnteredContent]=useState('')
    
    const titleHandler = (event) =>
    {
       setEnteredTitle(event.target.value);
    }

    const textHandler = (event)=>
    {
       setEnteredContent(event.target.value)
    }

    const submitHandeler = (event)=>
    {
        event.preventDefault();
        setEnteredTitle('')
        setEnteredContent('')
        // console.log(notesData)
        props.saveNotesData(notesData);
    }

    //data source
    const notesData = 
    {
        title : enteredTitle,
        content : enteredContent
    }
    

    

    
    return(
    <div>
         <form className = "input-form" onSubmit = {submitHandeler}>
             
             <input type = "text" placeholder = "Enter the title" className = "notes-input__title" onChange = {titleHandler} value = {enteredTitle}></input>

             <textarea className = "notes-input__textarea" placeholder = "Enter the note here" onChange = {textHandler} value = {enteredContent}></textarea>

             <button className = "notes-input__btn" type = "submit">Add Note</button>
         
         </form>
    </div>
    );
    
}


export default NotesForm;