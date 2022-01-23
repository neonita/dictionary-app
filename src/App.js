import "./App.css";
import SearchEngine from "./SearchEngine";
import Definition from "./Definition";

function App() {
  return (
    <div className="App">
      <div className="divider"></div>
      <header className="main-header">
        <h4 className="main-header-title">
          <a href="/">epeolatry</a>
        </h4>
      </header>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-sm-6"> */}
          <div className="left-column column-block">
            <div className="left-column-title">
              <h1>epeolatry</h1>
              <h5>(ˌɛpɪˈɒlətrɪ)</h5>
              <h6>the worship of words</h6>
            </div>
            <SearchEngine />
            <footer className="App-footer">
              <small>
                © 2022{" "}
                <a
                  href="https://github.com/neonita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Melissa Banoen-Garde
                </a>
                , open-sourced on{" "}
                <a
                  href="https://github.com/neonita/dictionary-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ˈɡɪthəb
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
          {/* </div> */}

          {/* <div className="col-sm-6">
            <div className="right-column column-block">
              <Definition />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
