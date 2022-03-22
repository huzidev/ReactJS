import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
// make sure to close the name of file in return like we did here in return

function App() {
  return (
    // that's all JSX NOT HTML it's javascript syntax extension
    // we've to wrap all the html written throught JSX in something if there is nothing then simply wrap it in empty as we did their
    <> 
      <Header />
    </>
  );
}

export default App;
