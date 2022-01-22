import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>epeolatry</h1>
        <h5>(ˌɛpɪˈɒlətrɪ)</h5>
        <h6>the worship of words</h6>
      </header>
      <SearchEngine />
      <footer className="App-footer">
        <small>
          © 2022 Melissa Banoen-Garde, open-sourced on{" "}
          <a
            href="https://github.com/neonita/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://epeolatry.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
