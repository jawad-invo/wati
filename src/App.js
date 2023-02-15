import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>WATI Integration</p>
        <a
          className="App-link"
          href="https://www.clare.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clare.AI
        </a>
      </header>
      <body></body>
    </div>
  );
}

export default App;
