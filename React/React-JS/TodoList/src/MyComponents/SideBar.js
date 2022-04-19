import React from "react";

export default function Sidebar(props) {

    const noteElements = props.notes.map((note) => ( 
        // note is just parameter name it can be anything just like name of variable
        // props.notes.map MEANS it is been taking some ARRAY of NOTES and mapping it into ours CONST variables called NoteElements then we'll assign this NoteElements in to bottom inside {}

        <div key={note.id}>

            <div
                
                className={`title ${
                    
                    note.id === props.currentNote.id ? "selected-note" : "" 
                    // if note.id is === CurrentNote.id then ClassName will be selected-note and background will be specific as we've assigned it to selected note in ours CSS else : there will be no class 

                }`}

                onClick={() => props.setCurrentNoteId(note.id)} 
                // ON ONCLICK it'll changes Current Note id to that notes id on which we've CLICKED so we the color of that note changes each time and we'll see all different text and information about that specific note

            >

                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>

                {/* note.body means inside the text area because we defined it as body part SPLIT just works as SEPARATOR which will separates ours text with the next line */}
                
                {/* [0] means first line of ours note  else wise the text on index 1 and 2 will also be printed as tittle*/}
                
                <button 

                    className="delete-btn"

                    onClick={(event) => props.Delete(event, note.id)}
                    // IT IS MANDATORY TO DO THIS CALLING AN EVENT FUNCTION WHILE DELETING THE NOTES EVENT IS JUST PARAMETER WHICH WE'VE ALREADY PASS IN OURS FUNCTION IN (APP.JS) and (NOTE.ID) is the id of that specific note which is going to be deleted

                    // we've to call back that function so it'll be called or return just a single time
                >

                    <i className="gg-trash trash-icon"></i>

                </button>

            </div>

        </div>

    ))

    return (

        <section className="pane sidebar">

            <div className="sidebar--header">

                <h3>Notes</h3>

                <button className="new-note" onClick={props.newNote}>+</button>

            </div>

            {noteElements}

        </section>

    )
}
