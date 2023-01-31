import logo from './logo.svg';
import './App.css';
import stories from './pages/stories.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Routes>
          <Route path='/stories/:id' element={<stories />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
