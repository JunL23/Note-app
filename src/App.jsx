import { useState } from 'react'
import Notebar from './Noteholder'
import "./App.css"

function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Untitled note");
  const [content, setContent] = useState("");
  const [time, setTime] = useState(`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()} - ${new Date().getHours()} : ${new Date().getMinutes()}`);
  const [task, setTask] = useState([]);
  const [note, getnote] = useState();
  const [id, setID] = useState(0);

  // Function to add new notes
  function addTask(){
    setTime(`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()} - ${new Date().getHours()} : ${new Date().getMinutes()}`);
    // create the new note
    const newNote = {id: id, title: title, content: content, time: time};

    // Add the note into the note array
    setTask(t => [...t, newNote]);
    // Increment the ID to prepare for new notes
    setID(id + 1);
    // Clear the content variable
    setContent("");
    // Reset the title variable
    setTitle("Untitled note");
  }

  // function to change the new note's title
  function addtitle(event){
    setTitle(event.target.value);
  }

  // function to change the content of the new note
  function addcontent(event){
    setContent(event.target.value);
  }

  // function to change the title of existing notes
  function changeNoteTitle(event){
    const newNote = {...note, title: event.target.value}
    getnote(newNote);

    setTask(t => t.map((n) => n.id === note.id ? newNote : n));
  }

  // function to change the content of existing notes
  function changeNoteContent(event){
    const newNote = {...note, content: event.target.value}
    getnote(newNote);

    setTask(t => t.map((n) => n.id === note.id ? newNote : n));
  }

  // function to pass to the note component to return the note that is being clicked and close the writing note screen
  function handleNotes(note){
    getnote(note);
    setShow(false);
  }

  return (
    <>
      <div className='main-container'>
        <Notebar lists = {task} displayNote = {handleNotes}></Notebar>

        {/* conditional rendering of the writing note */}
        {show ? <div className='writing'>
          <input type='text' className='title' placeholder='Please write your title' value={title} onChange={addtitle}></input>
          <br></br>
          <textarea className='content' placeholder='Write down your notes' value={content} onChange={addcontent}></textarea>
        </div> : null}


        {
          note && <div className='writing'>
            <input type='text' className='title' value={note.title} onChange={changeNoteTitle}></input>
            <br></br>
            <textarea className='content' value={note.content} onChange={changeNoteContent}></textarea>
          </div>
        }

        <button className="add" onClick={(s) => {setShow(true); getnote(null)}}>Add note</button>
        <button className="save" onClick={(s) => {
          addTask();
          setShow(false);
        }}>
            Save
        </button>

      </div>
    </>
  );
}

export default App
