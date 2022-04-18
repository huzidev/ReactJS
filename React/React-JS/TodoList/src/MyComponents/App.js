import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split" // split a library which helps us to split and rearrange ours page easily like here we've created a sidebar which splits ours screen to half
import {nanoid} from "nanoid"


export default function App() {

    const [notes, setNotes] = React.useState([]) // we are (initializing) ours notes into an EMPTY ARRAY

    const [currentNoteId, setCurrentNoteId] = React.useState(

        (notes[0] && notes[0].id) || "" 
        
        // since we are in an empty array therefore here we've says notes at index 0 && notes at index 0's ID because if there is NO notes it'll through error undefined OR empty string

    )
    
    function createNewNote() {

        const newNote = {

            id: nanoid(), // will create and UNIQUE id for us and we basically IMPORT nanoid from react libraries

            body: "# Type your markdown note's title here"

        }

        setNotes(prevNotes => [newNote, ...prevNotes]) // initially empty array will take all the prev notes data therefore we've used ... and (NEW NOTE) the function we've already created
        
        setCurrentNoteId(newNote.id) // would sets ours current note id the note which we are updating to newNote.ID IN BRIEF it'll simply provide new id to ours new note which is current note (we called it current note because we are updating it currently)

    }
    
    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
