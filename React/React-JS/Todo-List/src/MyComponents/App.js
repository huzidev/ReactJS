import React from 'react';
import Header from './Header';
import Todos from './Todos';

function App() {

  function onDelete(todos) {
    // we've to pass same parameter when we were calling the function on onClick method
    
    console.log("Deleted");



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
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}
export default App;
