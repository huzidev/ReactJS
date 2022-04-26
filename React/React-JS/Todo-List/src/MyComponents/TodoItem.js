import React from 'react';

// here we are using destructuring method
export default function TodoItem({todos, onDelete}) {
  return (
    <div>

        <h4>
            {todos.tittle}
        </h4>
        <p>
            {todos.desc}
        </p>
        <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todos)}}>
            {/* Since we are using Destructuring Method therefore we don't have to use props.onDelete */}
            {/* IT IS MANDATORY to use arrow function so it can call back the complete function while deleting any specific list item */}
            {/* IF WE JUST SAYS onClick={onClick} this means we are just PASSING function BUT when we did this onClick={onClick()} now it means we are CALLING  the function */}
            Delete
        </button>

    </div>
  )
}
