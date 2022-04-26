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

            {/* IT IS MANDATORY to use arrow function so it can call back the complete function while deleting any specific list item and if we didn't use arrow function and uses just simple function then it'll delete all the available list items*/}

            {/* IF WE JUST SAYS onClick={onClick} this means we are just PASSING function BUT when we did this onClick={onClick()} now it means we are CALLING  the function */}

            {/* FOR CALLING FUNCTION THE BEST WAY IS TO USE ARROW FUNCTION AND MAKE SURE THAT WE'LL PASS SAME PARAMETER AS WE ARE PASSING HE PARAMETER IN APP.JS where we've created ours onClick Delete function*/}

            Delete
        </button>

    </div>
  )
}
