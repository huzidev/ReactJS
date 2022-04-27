import React from 'react';

export default function AddTodos() {

    // we want it empty initially
    const [Tittle, SetTittle] = React.useState("")
    const [Desc, SetDesc] = React.useState("")

    function submit(event) {
        
        event.preventDefault()
        // so page will not reload

        if (!Tittle && !Desc) {
            
            alert("Tittle And Description Can't Be Empty")

        }

        if (!Tittle) {
            
            alert("Tittle Can't Be Empty")

        }

        if (!Desc) {
            
            alert("Description Can't Be Empty")

        }
    }

  return (
    <div className="container my-3">
        <h3>
            Add Todo Items
        </h3>
        <form onSubmit={submit}>
            <div class="mb-3">
                <label htmlFor="tittle" class="mb-3">
                    Add Todo's Tittle
                </label>
                <input type="text" value={Tittle} onChange={(event) => SetTittle(event.target.value)} class="form-control" id="tittle" aria-describedby="emailHelp" placeholder="Tittle"/>
                {/* REMEMBER once we provide the value it'll no longer be able to show us changes in the input tag THEREFORE we've to use onChange and then pass (event.target.value) SINCE we face this problem after PROVIDING VALUE therefore (event.target.value) */}
            </div>
            <div class="mb-3">
                <label htmlFor="tittle" class="mb-3">
                    Add Todo's Description
                </label>
                <input type="text" value={Desc} onChange={(event => SetDesc(event.target.value))} class="form-control" id="desc" placeholder="Description"/>
            </div>
            <button type="submit" class="btn btn-sm btn-success">
                Add Item
            </button>
        </form>
    </div>
    
  )
}
