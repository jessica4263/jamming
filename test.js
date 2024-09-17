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
          <img />
          <hr />
        </section>
      </div>
      {/*Song player*/}
      <div>
        {/*Washitappe for the Album Picture*/}
        <img />
        <img />
        <img />
        <img />
        {/*Album Picture*/}
        <img></img>
        {/*Play/Pause button*/}
        <div>
          <img />
          <img />
        </div>
      </div>
      {/*New playlist with added songs*/}
      <div>
        <input placeholder='Write your playlist name..'></input>
      </div>
    </div>
  );
}

// const [accessToken, setAccessToken] = useState("");
// const [query, setQuery] = useState("");

// useEffect(() => {
//   // Check if there's an access token in localStorage
//   const token = localStorage.getItem("access_token");
//   if (token) {
//     setAccessToken(token);
//   }
// }, []);

// const handleLogin = () => {
//   redirectToSpotify();
// };

// const handleSearch = async () => {
//   if (!accessToken) {
//     console.log("No access token found. Redirecting to Spotify...");
//     handleLogin(); // Redirect to Spotify login if no token is available
//     return;
//   }

//   // Proceed with the search if the user is authenticated
//   try {
//     console.log("Searching for:", query);
//     const response = await fetch(
//       `https://api.spotify.com/v1/search?q=${query}&type=track`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Search results:", data); // Process the search results here
//     } else {
//       console.error("Error fetching search results", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// import React, { useState } from 'react';
// import styles from './Track.module.css';
// import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
// import { ReactComponent as AddIcon } from '../../assets/add-button.svg';

// function Track({ name, artist, album}) {

//   return (
//     <>
//     <div>
//         {/*For every song that appears in the search*/}
//         <div className={styles.trackContainer}>
//           <div className={styles.font}>
//             <div className={styles.nameSong}>{name}</div>
//             <div className={styles.nameArtist}>{artist}</div>
//             <div className={styles.nameAlbum}>{album}</div>
//           </div>
//           {/*Buttons add and play*/}
//           <div className={styles.iconsContainer}>
//             <PlayIcon className={styles.icon} />
//             <AddIcon className={styles.icon} />
//           </div>
//         </div>
//         <hr/>
//     </div>
//   </>
//   );
// }

// export default Track;