import React from 'react';

export default function Todos(props) {
  return (

    <div className='container'>

      <h3 className='text-center my-3'>
        Todos List
      </h3>

      {

        props.todos.map(() => {

          return <TodoItem />

        })

      }

    </div>

  )
}
