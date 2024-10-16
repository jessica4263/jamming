import React, { useState } from 'react';
import styles from './Tracklist.module.css';
import { ReactComponent as PlayIcon } from '../../assets/play-button.svg';
import { ReactComponent as RemoveIcon } from '../../assets/delete-button.svg';
import Track from '../Track/Track';

function Tracklist({ songs, removeSong, handlePlay }) {

  return (
    <>
      {songs.map((song) => (
        <div>
          <div className={styles.trackContainer}>
            <Track
              key={song.id}
              name={song.name}
              artist={song.artists[0]?.name}
              album={song.album.name}
            />
            {/*Buttons add and play*/}
            <div className={styles.iconsContainer}>
              <PlayIcon onClick={() => handlePlay(song.id)} className={styles.icon} />
              <RemoveIcon onClick={() => removeSong(song)} className={styles.icon} />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Tracklist;
