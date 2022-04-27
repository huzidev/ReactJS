import React from 'react'

export default function AddTodos() {
  return (
    <div className="container my-3">
        <h3>
            Add Todo Items
        </h3>
        <form>
            <div class="mb-3">
                <label htmlFor="tittle" class="mb-3">
                    Add Todo's Tittle
                </label>
                <input type="email" class="form-control" id="tittle" aria-describedby="emailHelp" placeholder="Tittle"/>
            </div>
            <div class="mb-3">
                <label htmlFor="tittle" class="mb-3">
                    Add Todo's Description
                </label>
                <input type="text" class="form-control" id="desc" placeholder="Description"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
    
  )
}
