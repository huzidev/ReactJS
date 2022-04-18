import React from "react";
import Sidebar from "./SideBar";
import Editor from "./Editor";
// import { Data } from "./Data";
import Split from "react-split"; // split a library which helps us to split and rearrange ours page easily like here we've created a sidebar which splits ours screen to half
import {nanoid} from "nanoid";


export default function App() {

    const [notes, setNotes] = React.useState(
    
        () => JSON.parse(localStorage.getItem("notes")) || []
        // while getting info from LocalStorage we'll use JSON.parse(LocalStorage.GetItem("KEY"))
        
        // while getting something from LocalStorage it is not necessary to import String rather we'll import JS Object Therefore JSON.PARSE

        // we've also created a condition that if there is no any notes in local storage we'll simply import (empty array)
    
        //LAZY STATE INITIALIZATION

        // () => arrow function inside useState will allow us to Return JSON.PARSE only (SINGLE) time whenever ours page loads

        // BUT why we've to do this is because if we didn't do this ours complete App will load every time when we write something even if we write single character it'll loads complete App component hence simply we'll USE an arrow function inside use State so it'll Returns only when ours App loads

    )
    // we are (initializing) ours notes into an EMPTY ARRAY

    const [currentNoteId, setCurrentNoteId] = React.useState(

        (notes[0] && notes[0].id) || "" 
         // since we are in an empty array therefore here we've says notes at index 0 && notes at index 0's ID because if there is NO notes it'll through error undefined OR empty string

    )
    

    // REMEMBER while storing something in LOCAL STORAGE we've to use 
    // LocalStorage.SetItem and("KEY", Any String Value)

    // therefore here we've pass (key) which is (notes) and (JSON.STRINGIFY) which will converts ours (notes) which is (JS OBJECT) into a String value

    React.useEffect(() => {

        localStorage.setItem("notes", JSON.stringify(notes))

    }, [notes])
    // will update every time when notes changes

    function createNewNote() {

        const newNote = { 
            // we've made it an OBJECT {} because we've to provide it an ID and an BODY text in brief we've to provide it multiple features therefore OBJECT
 
            id: nanoid(), 
            // will create and UNIQUE id for us and we basically IMPORT nanoid from react libraries

            body: "Note's Tittle Here" 
            // THE BY DEFAULT TEXT FOR EACH NEW NOTE

        }

        setNotes(prevNotes => [newNote, ...prevNotes]) 
        // initially empty array will take all the prev notes data therefore we've used ... and (NEW NOTE) the function we've already created
        
        setCurrentNoteId(newNote.id) 
        // would sets ours current note id the note which we are updating to newNote.ID IN BRIEF it'll simply provide new id to ours new note which is current note (we called it current note because we are updating it currently)

    }

    function updateNote(text) { 
        // will simply state and saves any changes of anything written inside ours note therefore it is called UpdateNote

        // PUT updated note at TOP
        setNotes(OldNotes => {

            const NewArray = [] // an new empty array which will stores Updated Notes

            for (let i = 0; i < OldNotes.length; i++){
                
                const OldNote = OldNotes[i] // so we don't have to write OldNotes[i] everywhere rather we'll simply just write OldNote

                if (OldNote.id === currentNoteId) {
    
                    NewArray.unshift({...OldNote, body: text}) // UNSHIFT will SHIFT Updated Note At Top Of List

                }
                else{

                    NewArray.push(OldNote) // this will simply PUT ours OldNote After the New Note it has nothing to do with pushing ours updated note to go to TOP

                }

            }
            return NewArray // make sure to return else error will occurs

        })

    }
    
    function findCurrentNote() { 
        // will helps us to find WHAT the current note is as we are passing it as a prop in ours JSX

        return notes.find(note => {
            
            return note.id === currentNoteId

        }) || notes[0]

    }
    
    return (
        <main>

        { 
        // we've used this {} because we are using TERNARY OPERATORS inside it

            notes.length > 0 
            // we are passing TERNARY OPERATORS here we says if notes lenth is greater than zero means there are some notes then do all functions else wise : print default text

            ?

            <Split  
            // SPLIT IS JUST A PART OF OURS REACT LIBRARY WHICH WE'VE IMPORTED ALREADY

                sizes={[30, 70]} 

                direction="horizontal" 

                className="split"

            >
                <Sidebar

                    notes={notes}

                    currentNote={findCurrentNote()} 
                    // here we can see we are passing FindCurrentNote as props

                    setCurrentNoteId={setCurrentNoteId}

                    newNote={createNewNote}

                />
                {

                    currentNoteId && 

                    notes.length > 0 &&

                    <Editor 

                        currentNote={findCurrentNote()}  
                        // here we can see we are passing FindCurrentNote as props

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
                    // when there is no notes we'll print the button for creating new note

                >

                    Create one now

                </button>

            </div>
            
        }

        </main>
    )
}
