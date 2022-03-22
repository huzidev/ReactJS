import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'; // we created my components folder and create a file calle Header in my components just like linking JS or CSS with HTML
// make sure to close the name of file in return like we did here in return

function App() {
  return (
    // that's all JSX NOT HTML it's javascript syntax extension
    // we've to wrap all the html written throught JSX in something if there is nothing then simply wrap it in empty as we did their
    <> 
      <Header tittle = "My Todos List" />
    </>
  );
}
export default App;
