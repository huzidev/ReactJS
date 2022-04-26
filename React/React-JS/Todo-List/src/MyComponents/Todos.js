import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  return (

    <div className='container'>

      <h3 className='text-center my-3'>
        Todos List
      </h3>

      {

        props.todos.map((todos) => {
          // make sure to pass parameter here so we can pass the value in props
          return <TodoItem todos={todos} onDelete={props.onDelete}/>

        })

      }

    </div>

  )
}
