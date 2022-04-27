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
      <AddTodos />
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}
export default App;
