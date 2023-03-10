function Sidebar({notes, onAddNote, setActiveNote, activeNote}){
    return <div class="sidebar">
                <div class="subheaderpos">   
                    <h2 id="subheader">Notes</h2>
                    <p onClick={onAddNote} id="subheader" class="hovertop" >+</p>
                </div>
                <div class="columnpos">
                    <p id="column"> No Notes Yet </p>
                    {notes.map((note)=>( 
                        <div className={`notepadpos ${note.id == activeNote && "active"}` } 
                            onClick={()=>setActiveNote(note.id)}
                        >
                            <p id="notepad">{note.title}</p>
                            <p id="notepad"> {new Date(note.lastModified).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                            })}</p>
                            <p id="notepad">{note.body ? note.body.substr(0, 100) + "..." : "..."}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
}

export default Sidebar;