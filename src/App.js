import "./App.css";
import SearchEngine from "./SearchEngine";

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
          <div className="col-sm-6">
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
          </div>

          <div className="col-sm-6">
            <div className="right-column column-block">
              <h2>right column</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis, ea? Magni, inventore labore vitae excepturi assumenda
                quam, mollitia consequuntur unde ut recusandae ex illo. Enim
                saepe possimus quibusdam sit temporibus. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, asperiores maxime
                corrupti itaque dolores velit enim. Eveniet odio porro illum
                deserunt explicabo illo exercitationem repellat reprehenderit,
                sunt, quam sint rerum! Laborum libero perspiciatis vero debitis
                doloribus, facere repellendus pariatur maxime rerum corporis
                quas mollitia esse et reprehenderit optio ipsa nam temporibus
                commodi quaerat ea culpa? Dolorem delectus doloremque error
                quas. Minima repellat tempore dolores veritatis repellendus quis
                temporibus, numquam in obcaecati alias ducimus veniam. Saepe
                corrupti ea asperiores obcaecati quibusdam deleniti,
                necessitatibus voluptas officiis ex voluptates quae, expedita
                pariatur tempora? Delectus expedita, vel maiores quo rerum
                inventore, illo nostrum voluptas aut corrupti iste, quisquam
                officiis voluptatem! Incidunt repellat, ratione vero quo,
                debitis necessitatibus nobis hic ullam alias natus qui deleniti!
                Tempora, illo sunt nostrum perspiciatis harum in at. Quod,
                placeat illum quae recusandae saepe veniam cupiditate
                consectetur minus. Eum, dolore! Molestiae natus laudantium illo
                reiciendis maxime assumenda atque sit quasi. Eaque, sunt quas.
                Adipisci molestias ad nihil qui explicabo recusandae corrupti
                nulla dolorem, modi, inventore beatae exercitationem tempore vel
                hic. Modi consectetur voluptatem, et omnis atque fugit?
                Accusamus, exercitationem praesentium? Animi soluta officiis,
                eveniet mollitia ipsam eos culpa repudiandae assumenda eius
                dolores et corrupti, aspernatur reiciendis? Rem eum beatae amet
                ullam libero vitae facilis, recusandae suscipit sint tempora
                soluta est. Ut accusantium quod est ipsa dolores expedita in
                fuga, voluptatibus quas quos molestiae magnam soluta odio!
                Minima voluptate alias, architecto illum perferendis, labore
                beatae placeat, laborum quia quaerat eligendi odit! Quisquam
                saepe unde voluptates neque, et similique maxime quidem
                explicabo quasi expedita odio quod eum modi cumque ex provident
                mollitia animi sit dolore ea incidunt impedit. Iure tempora
                rerum ex. At, impedit aliquam debitis quasi sed illum iusto
                dolores. Aspernatur quos quis, sunt eaque quia ipsa maxime
                ullam, unde vel recusandae obcaecati id nesciunt consectetur
                pariatur molestias totam ex! Neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
