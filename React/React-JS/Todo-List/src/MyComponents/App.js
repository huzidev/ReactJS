import React from 'react';
import AddTodos from './AddTodos';
import Header from './Header';
import Todos from './Todos';

function App() {

  let initTodo

  // THERE we are creating statements for getting items from ours LocalStorage

  if(localStorage.getItem("todos") === "NULL"){

    // if there is not items in LocalStorage means LocalStorage is === NULL then we simply wanted to update InitTodo to Empty Array [] and we'll pass this InitTodo to ours ReactState where all the Data is going to be stored

    initTodo = []

  }

  else{

    initTodo = JSON.parse(localStorage.getItem("todos"))

    // else we know that for GETTING items or data form local storage we've to use JSON.Parse

  }

  function onDelete(todos) {
    // we've to pass same parameter when we were calling the function on onClick method
    
    console.log("Deleted");

    SetTodos(PrevVal => PrevVal.filter(list => list !== todos))
    // IT IS MANDATORY TO USE .FILTER because it is just like a LOOP and to use !== for deleting

    // since we wanted to delete the DATA therefore we'll use that SPECIFIC React State where we've all the DATA which we wanted to delete like HERE we've SetTodos which is a react state and in that state we've all the data which should've to be deleted
  }

  function addTodo(Tittle, Desc) {
    // so we've passed Tittle and Desc which we've Created as ReactState in ours AddTodos.js so it can receive those values
    
    let Sno

    // we've to do this if else statement there so WHEN ours list is completely empty then sno will be starts from 0 if list is not empty then we've to assign Sno with respect to other available item's Sno

    if(todos.length === 0){

      Sno = 0

    }

    else{
      Sno = todos[todos.length - 1].sno + 1
    // here we says that Todos.Length which can be according to ours list - 1 (-1) because index starts from 0
    // [Todos.lenth-1].sno means TODOS'S (Todos ka) sno with respect to their items in the list
    }

    const todoList = {

      sno: Sno,
      tittle: Tittle,
      desc: Desc

    }

    SetTodos([...todos, todoList])
    // SetTodos is a function which will updates ours SetTodos State where all list items information is Stored With Sno
    console.log(todoList)
  }

  const [todos, SetTodos] = React.useState(initTodo)

  // since we know that in this ReactState all the list items will be STORED and for STORING multiple value we should use ARRAY and initTodo is equal to [] means initTodo = [] hence it can store multiple value and DATA

  return (
    <> 
      <Header tittle = "My Todos List" searchBar={false}/>
      <AddTodos addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}
export default App;
