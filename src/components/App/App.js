import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SongPlayer from '../SongPlayer/SongPlayer';
import styles from './App.module.css';

function App() {

  return (
    <div>
      <h1 className={styles.Myplaylist}>my playlist</h1>
      {/*Searchbar*/}
      <SearchBar/>
      <div className={styles.displayContainer}>
        <SearchResults/>
        <div className={styles.playlistContainer}>
          <SongPlayer/>
          {/*New playlist with added songs*/}
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
