import './index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Editor from './Editor';
import WritingArea from './WritingArea';
import  { useState } from 'react';
import ReactQuill from 'react-quill';

import uuid from 'react-uuid';




function App() {
  const [notes, setNotes] = useState([]);
  const[activeNote,setActiveNote] = useState(false);

  const onAddNote= () => {

    const newNote ={
      id: uuid(),
      title: "Untitled",
      body:"",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  }

  const getActiveNote = () =>{
    return notes.find((note) => note.id == activeNote);
  }

  return <div className='App'>
    <Header/>
    <Sidebar 
    notes={notes} 
    onAddNote={onAddNote} 
    activeNote={activeNote}
    setActiveNote={setActiveNote}
    />
    <WritingArea activeNote={getActiveNote()}/>
    <Editor/>



    
  </div> 
}

export default App;
