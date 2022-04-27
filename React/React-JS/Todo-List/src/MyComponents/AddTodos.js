import React from 'react';

export default function AddTodos(props) {

    // we want it empty initially
    const [Tittle, SetTittle] = React.useState("")
    const [Desc, SetDesc] = React.useState("")

    function submit(event) {
        
        event.preventDefault()
        // so page will not reload

        if (!Tittle && !Desc) {
            
            alert("Tittle And Description Can't Be Empty")

        }

        else if (!Tittle) {
            
            alert("Tittle Can't Be Empty")

        }

        else if (!Desc) {
            
            alert("Description Can't Be Empty")

        }

        else{

            props.addTodo(Tittle, Desc)
            // by providing empty string to ours SetTittle and SetDesc we will not face saved value in ours Input bars
            SetTittle("")
            SetDesc("")

        }
    }

  return (
    <div className="container my-3">
        <h3>
            Add Todo Items
        </h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="tittle" className="mb-3">
                    Add Todo's Tittle
                </label>
                <input type="text" value={Tittle} onChange={(event) => SetTittle(event.target.value)} className="form-control" id="tittle" aria-describedby="emailHelp" placeholder="Tittle"/>
                {/* REMEMBER once we provide the value it'll no longer be able to show us changes in the input tag THEREFORE we've to use onChange and then pass (event.target.value) SINCE we face this problem after PROVIDING VALUE therefore (event.target.value) */}
            </div>
            <div className="mb-3">
                <label htmlFor="tittle" className="mb-3">
                    Add Todo's Description
                </label>
                <input type="text" value={Desc} onChange={(event => SetDesc(event.target.value))} className="form-control" id="desc" placeholder="Description"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">
                Add Item
            </button>
        </form>
    </div>
    
  )
}
