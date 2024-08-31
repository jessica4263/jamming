import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import { ReactComponent as EditIcon } from '../../assets/edit-pencil.svg';

function Playlist() {

  return (
    <div>
      <div className={styles.inputContainer}>
        <input 
          className={styles.inputPlaylist} 
          placeholder='Write your playlist name..'
          name='playlistName'
          id='playlistName'
          type= 'text'
          required
        />
        <label htmlFor='playlistName'><EditIcon className={styles.editIcon}/></label>
      </div>
      <Tracklist/>
      <div className={styles.saveBtnContainer}>
        <button type='submit' className={styles.saveBtn}>Save to Spotify</button>
      </div>
    </div>
  );
}

export default Playlist;