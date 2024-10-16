import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SongPlayer from "../SongPlayer/SongPlayer";
import styles from "./App.module.css";
import Myplaylist from "../Myplaylists/Myplaylists";

function App() {

  const [tracks, setTracks] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([])
  const [token, setToken] = useState(null)
  const [trackUrl, setTrackUrl] = useState("");
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('')

  useEffect(() => {
    const getAppToken = async () => {
      const clientId = "15b7fb41cfae4ab08faae46825154140";
      const clientSecret = "7b0fad9e97784a02810aed2ebd71aaa5";
      const url = "https://accounts.spotify.com/api/token";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      });

      const response = await fetch(url, {
        method: "POST",
        headers,
        body,
      });

      const data = await response.json();
      localStorage.setItem('spotifyToken', data.access_token)
      setToken(data.access_token)

    };
    getAppToken();
  }, []);

  function addToPlaylist(track) {
    const songExists = playlistSongs.some((song) => song.id === track.id);
    if (!songExists) {
      setPlaylistSongs((prevTracks) => [...prevTracks, track]);
    }
  }

  function handlePlay(songId) {
    setTrackUrl(`https://open.spotify.com/embed/track/${songId}`)
  }

  function handleSave(playlistName, playlistSongs) {
    if (playlistName && playlistSongs) {
      setMyPlaylist((prevPlaylists) => [...prevPlaylists, { id: prevPlaylists.length + 1, name: playlistName, songs: playlistSongs }]);
      setPlaylistSongs([]);
      setPlaylistName('');
    }
  }

  return (
    <>
      <div>
        <h1 className={styles.Myplaylist}>my playlist</h1>
        {/*Searchbar*/}
        <SearchBar token={token} setTracks={setTracks} />
        <div className={styles.allContainer}>
          <div className={styles.displayContainer}>
            <SearchResults
              tracks={tracks}
              playlistSongs={playlistSongs}
              addToPlaylist={addToPlaylist}
              handlePlay={handlePlay}
            />
            <div className={styles.playlistContainer}>
              {trackUrl ? <SongPlayer token={token} trackUrl={trackUrl} /> : null}
              {/*New playlist with added songs*/}
              <Playlist
                playlistSongs={playlistSongs}
                setPlaylistSongs={setPlaylistSongs}
                handlePlay={handlePlay}
                handleSave={handleSave}
                setPlaylistName={setPlaylistName}
                playlistName={playlistName}
              />
            </div>
          </div>
          <Myplaylist handlePlay={handlePlay} myPlaylist={myPlaylist} />
        </div>
      </div>

    </>
  );
}

export default App;
