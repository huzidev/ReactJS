import React from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import AddTodos from './AddTodos';
import Header from './Header';
import Todos from './Todos';

function App() {

  function onDelete(todos) {
    // we've to pass same parameter when we were calling the function on onClick method
    
    console.log("Deleted");

    SetTodos(PrevVal => PrevVal.filter(list => list !== todos))
    // IT IS MANDATORY TO USE .FILTER because it is just like a LOOP and to use !== for deleting

    // since we wanted to delete the DATA therefore we'll use that SPECIFIC React State where we've all the DATA which we wanted to delete like HERE we've SetTodos which is a react state and in that state we've all the data which should've to be deleted
  }

  function addTodo(Tittle, Desc) {
    // so we've passed Tittle and Desc which we've Created as ReactState in ours AddTodos.js so it can receive those values
    
    let Sno = Todos[Todos.length - 1].sno + 1
    // here we says that Todos.Length which can be according to ours list - 1 (-1) because index starts from 0
    // [Todos.lenth-1].sno means TODOS'S (Todos ka) sno with respect to their items in the list
    

    const todoList = {

      sno: Sno,
      tittle: Tittle,
      desc: Desc

    }

    SetTodos([...Todos, todoList])
    console.log(todoList)
  }

  const [todos, SetTodos] = React.useState([
    {
      sno: 1,
      tittle: "Go To University",
      desc: "Go To University And Do Study And Meet Yours Friends",
    },

    {
      sno: 2,
      tittle: "Go To University",
      desc: "Go To University And Do Study And Meet Yours Friends"
    },

    {
      sno: 3,
      tittle: "Go To University",
      desc: "Go To University And Do Study And Meet Yours Friends"
    }
  ])

  return (
    <> 
      <Header tittle = "My Todos List" searchBar={false}/>
      <AddTodos addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}
export default App;
