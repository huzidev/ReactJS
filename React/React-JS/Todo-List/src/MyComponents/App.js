import Header from './Header';
import Todos from './Todos';

function App() {

  let todos = [
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
  ]

  return (
    <> 
      <Header tittle = "My Todos List" searchBar={false}/>
      <Todos todos={todos}/>
    </>
  )
}
export default App;
