import React from 'react';

// here we are using destructuring method
export default function TodoItem({todos, onDelete}) {
  return (
    <div>

        <h4>
            {todos.tittle}
        </h4>

    </div>
  )
}
