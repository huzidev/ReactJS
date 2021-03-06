import React from "react";
import ReactMde from "react-mde"; // these are 3rd party libraries we can install them through npm
import Showdown from "showdown";

export default function Editor({ currentNote, updateNote }) {
    // MAKE SURE TO PASS THESE PARAMETERS ABOVE INSIDE THESE CURLY BRACKETS

    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({

        tables: true,

        simplifiedAutoLink: true,

        strikethrough: true,

        tasklists: true,

    })  

    return (

        <section className="pane editor">

            <ReactMde

                value={currentNote.body}

                onChange={updateNote}
                
                selectedTab={selectedTab}

                onTabChange={setSelectedTab}

                generateMarkdownPreview={(markdown) =>

                    Promise.resolve(converter.makeHtml(markdown))

                }

                minEditorHeight={80}

                heightUnits="vh"

            />

        </section>

    )

}