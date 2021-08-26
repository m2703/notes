import React,{useState} from 'react';
import "./App.css"
import NotesItem from './components/Notes/NotesItem';
import NotesInput from './components/NotesInput/NotesInput';


const dummy_notes = 
  [
    {
      title: "Water",
      content: "You should drink a lot of Water"
    },

    {
      title: "Study",
      content: "You should study a lot to get succesfull"
    },

    {
      title: "Code",
      content: "You should learn to code as soon as possible"
    },

    {
      title: "Excercise",
      content: "Excercise is good for health"
    },
  ]

const App = () =>
{
  const[notes,setNotes] = useState(dummy_notes)

  

  const addNotesHandeler = (notes)=>
  {
    console.log("this is from App.js")
   setNotes(prevNotes =>{
     return[notes,...prevNotes]
   })
  }

  return(
  
  <div className = "container">
    <NotesInput onAddNotes = {addNotesHandeler}/>
    <NotesItem notes = {notes}></NotesItem>
    
    

  </div>
  
  );

  
}


export default App;
