import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // that's all JSX NOT HTML it's javascript syntax extension
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is First ever app created by 
          <a href="https://github.com/huzidev" target="_blank" class="dev"> Huzi-Dev</a>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          First App
        </a>
      </header>
    </div>
  );
}

export default App;
