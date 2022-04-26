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
        <button className='btn btn-sm btn-danger' onClick={onDelete}>
            Delete
        </button>

    </div>
  )
}
