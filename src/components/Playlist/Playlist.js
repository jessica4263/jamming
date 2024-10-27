import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import { ReactComponent as EditIcon } from '../../assets/edit-pencil.svg';

function Playlist({ playlistSongs, setPlaylistSongs, handlePlay, handleSave, setPlaylistName, playlistName }) {

  function removeSong(songToRemove) {
    setPlaylistSongs((prevSongs) => prevSongs.filter((song) => song.id !== songToRemove.id));
  }

  return (
    <div className={styles.playlistCont}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputPlaylist}
          placeholder='Write your playlist name..'
          name='playlistName'
          id='playlistName'
          type='text'
          value={playlistName}
          required
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <label htmlFor='playlistName'><EditIcon className={styles.editIcon} /></label>
      </div>
      <Tracklist songs={playlistSongs} removeSong={removeSong} handlePlay={handlePlay} />
      <div className={styles.saveBtnContainer}>
        <button onClick={() => handleSave(playlistName, playlistSongs)} type='submit' className={styles.saveBtn}>Save to My Playlists</button>
      </div>
    </div>
  );
}

export default Playlist;
