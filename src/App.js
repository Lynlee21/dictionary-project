import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
      </div>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/Lynlee21/dictionary-project"
            target="_blank"
            id="github"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Lynlee Anderson
        </small>
      </footer>
    </div>
  );
}

export default App;
