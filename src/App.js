import { useState } from "react";
import { Add } from "./components/Add";
import { List } from "./components/List";
import { Searcher } from "./components/Searcher";


function App() {

 const [listState, setListState] = useState([]);

  return (
          <div className="layout">

          {/*cabecera*/}
          <header className="header">
              
              <div className="logo">
                  <div className="play"></div>
              </div>

              <h1>MyMovies</h1>

          </header>
          
          {/*barra de navegacion*/}
          <nav className="nav">
              <ul>
                  <li><a href="/#">Home</a></li>
                  <li><a href="/#">Movie</a></li>
                  <li><a href="/#">Blog</a></li>
                  <li><a href="/#">Contact</a></li>
              </ul>
          </nav>

          {/*contenido principal*/}
          <section className="content">
              {/*aqui van el listado de peliculas*/}
              <List listState={listState} setListState={setListState}/>
              
          </section>

          <aside className="lateral">
            <Searcher listState={listState} setListState={setListState}/>

             <Add setListState={setListState}/>
             
          </aside>


          {/* pie de pagina*/}
          <footer className="footer">
              &copy; Oriana Nahir Romero Developer - <a href="https://oriiromero.github.io/MyCustomWebpage/">Web</a>
          </footer>

      </div>
  );
}

export default App;
