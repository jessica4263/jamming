function App() {

    return (
      <div>
        <h1>My playlist</h1>
        <div>
          <input placeholder='Search for songs for your playlist..'></input>
          <button>Search</button>
        </div>
  {/*Result box with songs appeared on the search*/}
        <div>
          <h2>Results</h2>
          <br></br>
  {/*For every song that appears in the search*/}
          <section>
            <div>
              <div>Nombre del Artista</div>
              <div>Nombre de la cancion</div>
            </div>
            <img/>
            <hr/>
          </section>
        </div>
  {/*Song player*/}
        <div>
          {/*Washitappe for the Album Picture*/}
          <img/>
          <img/>
          <img/>
          <img/>
          {/*Album Picture*/}
          <img></img>
          {/*Play/Pause button*/}
          <div>
            <img/>
            <img/>
          </div>
        </div>
  {/*New playlist with added songs*/}
        <div>
          <input placeholder='Write your playlist name..'></input>
        </div>
      </div>
    );
  }